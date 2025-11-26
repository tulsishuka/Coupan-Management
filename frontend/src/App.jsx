import  { useState } from "react";
import Login from "./pages/Login";
import CreateCoupon from "./pages/CreateCoupon";
import BestCoupon from "./pages/FindCoupon";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
     <div className="min-h-screen flex bg-gray-100">
      {!loggedIn ? (
        <Login setLoggedIn={setLoggedIn} />
      ) : (
        <>
          <div className="flex-1 flex items-center justify-center  p-16">
            <div className="w-full max-w-md"><CreateCoupon /></div>
          </div>
          <div className="flex-1 flex items-center justify-center  p-16">
            <div className="w-full max-w-md"><BestCoupon /></div>
          </div>
        </>
      )}
    </div>
  );
}
