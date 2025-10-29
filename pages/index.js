// pages/index.js
import React from "react";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh" }}>
        <h1>🎉 Elli Beans Dashboard Live!</h1>
      </main>
    </>
  );
}
