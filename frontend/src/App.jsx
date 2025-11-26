import React, { useState, useEffect } from "react";
import { API } from "./api";

export default function App() {
  const [coupons, setCoupons] = useState([]);
  const [form, setForm] = useState({});
  const [cartValue, setCartValue] = useState("");
  const [best, setBest] = useState(null);

  const load = async () => {
    const res = await API.get("/coupons");
    setCoupons(res.data);
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    load();
  }, []);

  const create = async () => {
    await API.post("/coupons", form);
    alert("Created!");
    load();
  };

  const evaluate = async () => {
    const res = await API.post("/best-coupon", {
      user: {
        userTier: "NEW",
        country: "IN",
        lifetimeSpend: 2000,
        ordersPlaced: 1
      },
      cart: {
        items: [
          {
            category: "electronics",
            unitPrice: Number(cartValue),
            quantity: 1
          }
        ]
      }
    });

    setBest(res.data);
  };

  return (
    <div className="page">

      <h1>Coupon Management</h1>

      <h2>Create Coupon</h2>
      <input placeholder="Code" onChange={(e) => setForm({ ...form, code: e.target.value })} />
      <input placeholder="Description" onChange={(e) => setForm({ ...form, description: e.target.value })} />
      <input placeholder="discountType (FLAT/PERCENT)" onChange={(e) => setForm({ ...form, discountType: e.target.value })} />
      <input placeholder="discountValue" onChange={(e) => setForm({ ...form, discountValue: Number(e.target.value) })} />
      <button onClick={create}>Create</button>

      <h2>All Coupons</h2>
      {coupons.map((c) => (
        <p key={c.code}>{c.code} — {c.discountType} — {c.discountValue}</p>
      ))}

      <h2>Best Coupon</h2>
      <input placeholder="Cart Value" onChange={(e) => setCartValue(e.target.value)} />
      <button onClick={evaluate}>Find Best</button>

      {best && (
        <p>
          Best Coupon: {best.bestCoupon?.code} | Discount: {best.discount}
        </p>
      )}
    </div>
  );
}
