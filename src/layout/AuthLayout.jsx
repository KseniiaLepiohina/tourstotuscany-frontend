import { Outlet } from "react-router-dom";
import Header from "../components/header";

export default function AuthLayout() {
  return (
    <section
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "rgba(0,0,0,0.4)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999
      }}>
        <section
        style={{
        background: "#fff",
        padding: "24px",
        borderRadius: "12px",
        width: "90%",
        maxWidth: "420px",
      }}
    >
        <Outlet />
      </section>
    </section>
  )
}