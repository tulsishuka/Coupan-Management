const express = require("express");
const cors = require("cors");
const coupons = require("./data/coupons");
const { checkEligibility } = require("./utils/eligibility");
const app = express();
app.use(cors());
app.use(express.json());
const PORT = 5000;

app.post("/api/coupons", (req, res) => {
  const newCoupon = req.body;
  const exists = coupons.find((c) => c.code === newCoupon.code);
  if (exists) return res.status(400).json({ error: "Coupon already exists" });

  coupons.push(newCoupon);
  res.json({ message: "Coupon created", coupon: newCoupon });
});

app.get("/api/coupons", (req, res) => {
  res.json(coupons);
});

app.post("/api/best-coupon", (req, res) => {
  const { user, cart } = req.body;
  const cartValue = cart.items.reduce((sum, i) => sum + i.unitPrice * i.quantity, 0);

  let best = null;
  let bestDiscount = 0;
  const now = new Date();

  for (const c of coupons) {
    if (!(new Date(c.startDate) <= now && now <= new Date(c.endDate))) continue;
    if (!checkEligibility(c, user, cartValue, cart.items)) continue;

    let discount = c.discountType === "FLAT" ? c.discountValue : (c.discountValue / 100) * cartValue;
    if (c.maxDiscountAmount) discount = Math.min(discount, c.maxDiscountAmount);

    if (discount > bestDiscount) {
      bestDiscount = discount;
      best = c;
    }
  }
  res.json({ bestCoupon: best, discount: bestDiscount });
});
app.listen(PORT, () => console.log("Backend running on port " + PORT));
