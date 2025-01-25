"use client";

import { useState } from "react";

export default function Login() {
  const [password, setPassword] = useState<string | null>(null);

  const loginAdmin = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/aboutme');
      const data = await response.json();

      if(data[0].password.trim() === password){
        document.cookie = `p-admin=${password}; path=/;`; 
        window.location.href = '/panel';
      }else{
        alert('رمز اشتباه است')
      }
      
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center flex-col gap-y-2">
      <input
        type="text"
        placeholder="رمز ورود"
        className="text-black py-1 px-3"
        onBlur={(e) => setPassword(e.target.value)}
      />
      <button
        className="py-1 px-3 hover:bg-gray-500"
        onClick={loginAdmin}
      >
        ثبت
      </button>

    </div>
  );
}
