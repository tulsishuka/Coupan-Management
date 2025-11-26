import React, { useState } from "react";
import { API } from "../api";

export default function BestCoupon() {
  const [cartValue, setCartValue] = useState("");
  const [best, setBest] = useState(null);

  const evaluate = async () => {
    const res = await API.post("/best-coupon", {
      user: { userTier: "NEW", country: "IN", lifetimeSpend: 0, ordersPlaced: 0 },
      cart: { items: [{ category: "electronics", unitPrice: Number(cartValue), quantity: 1 }] }
    });
    setBest(res.data);
  };

  return (
   <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-md">
        <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">Find Best Coupon</h2>

        <div className="flex flex-col gap-4">
          <input
            placeholder="Cart Value"
            type="number"
            value={cartValue}
            onChange={e => setCartValue(e.target.value)}
            className="px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
          />

          <button
            onClick={evaluate}
            className="bg-purple-500 text-white py-3 rounded-lg font-semibold hover:bg-purple-600 transition-colors"
          >
            Get Best Coupon
          </button>

          {best?.bestCoupon ? (
            <div className="mt-4 p-4 bg-green-100 rounded-lg text-green-800 font-semibold text-center">
              Best Coupon: <span className="font-bold">{best.bestCoupon.code}</span> | Discount: ₹{best.discount}
            </div>
          ) : best ? (
            <div className="mt-4 p-4 bg-red-100 rounded-lg text-red-800 font-semibold text-center">
              No coupon applicable
            </div>
          ) : null}
        </div>
      </div>
    </div>


  );
}
