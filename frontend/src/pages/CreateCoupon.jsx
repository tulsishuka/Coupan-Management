import React, { useState } from "react";
import { API } from "../api";

export default function CreateCoupon() {
  const [form, setForm] = useState({});

  const create = async () => {
    await API.post("/coupons", form);
    alert("Coupon created");
  };

  return (
   <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-lg">
        <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">Create Coupon</h2>
        <div className="grid grid-cols-1 gap-4">
          <input placeholder="Code"value={form.code || ""}onChange={e => setForm({ ...form, code: e.target.value })}className="px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"/>
          <input placeholder="Description" value={form.description || ""}onChange={e => setForm({ ...form, description: e.target.value })}className="px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"/>
          <input placeholder="Type (FLAT/PERCENT)"value={form.discountType || ""}onChange={e => setForm({ ...form, discountType: e.target.value })}className="px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"/>
          <input placeholder="Value"type="number"value={form.discountValue || ""}onChange={e => setForm({ ...form, discountValue: Number(e.target.value) })}className="px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"/>
          <input placeholder="Start Date"type="date"value={form.startDate || ""}onChange={e => setForm({ ...form, startDate: e.target.value })}className="px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"/>
          <input placeholder="End Date"type="date"value={form.endDate || ""}onChange={e => setForm({ ...form, endDate: e.target.value })}className="px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"/>
        </div>

    <button onClick={create}className="mt-6 w-full bg-purple-500 text-white py-3 rounded-lg font-semibold hover:bg-purple-600 transition-colors">Create Coupon</button>
      </div>
    </div>
  );
}
