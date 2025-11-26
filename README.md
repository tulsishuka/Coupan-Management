Coupon Management – Assignment
📝 Project Overview

This project implements a simple e-commerce Coupon Management System.
It provides two main features:

Create Coupon API → Admin can create coupons with eligibility rules.

Best Coupon API → Given a user + cart, the system returns the best coupon based on discount calculation and eligibility.

The project includes both Backend (Node + Express) and Frontend (React + Vite).

🚀 Tech Stack
```
Backend
Node.js
Express.js
In-memory data storage 
CORS
Frontend
React
Vite
Axios
Tailwind CSS
```
<img width="1664" height="872" alt="Screenshot 2025-11-26 135026" src="https://github.com/user-attachments/assets/722f7d80-3e9c-4f6f-8a73-e2dfe5a44caa" />

📂 Folder Structure
```
project/
  backend/
    package.json
    server.js
    data.js
    utils/
      couponLogic.js
    routes/
      couponRoutes.js
      authRoutes.js
  frontend/
    package.json
    vite.config.js
    src/
      App.jsx
      components/
        Login.jsx
        CreateCoupon.jsx
        BestCoupon.jsx
        Dashboard.jsx
```
Backend – How to Run
Steps
cd backend
npm install
npm nodemon server.js

Server runs on:
http://localhost:5000

🎨 Frontend – How to Run
Steps
cd frontend
npm install
npm run dev

Frontend runs on:
http://localhost:5173

🔐 Demo Login (Required by Assignment)
These credentials are pre-seeded in backend:

Email: hire-me@anshumat.org
Password: HireMe@2025!
```

🧠 Best Coupon Selection Logic
```
🤖 AI Usage Note (Required)

I used AI tools to clarify assignment requirements into user story, plan the folder structure, and get guidance for writing some boilerplate code.
All logic, implementation, debugging, and testing were done by me.
Prompts used include: “Explain coupon assignment,” “Provide folder structure,” and “Write login UI.”
