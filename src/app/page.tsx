"use client";

import { useEffect } from "react";
import Image from "next/image";

export default function ComingSoonRedirect() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = "https://shankarkohli.com";
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(to right, #0f172a, #1e293b)",
        fontFamily: "Arial, sans-serif",
        color: "#fff",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center", // ✅ centers everything horizontally
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        {/* Logo */}
        <Image
          src="/logo.svg"
          alt="Mark Real Esstate Logo"
          width={100}
          height={100}
          priority
          style={{ marginBottom: "20px" }}
        />

        {/* Brand Name */}
        <h1 style={{ fontSize: "2.5rem", marginBottom: "10px" }}>
          Mark Real Esstate
        </h1>

        {/* Message */}
        <p style={{ marginBottom: "10px", color: "#cbd5f5" }}>
          We’re launching soon…
        </p>

        <p style={{ fontSize: "0.9rem", color: "#94a3b8" }}>
          Redirecting you to our founder
        </p>
      </div>
    </main>
  );
}