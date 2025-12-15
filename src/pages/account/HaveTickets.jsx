import React from "react";
import TuscanyCarousel from '../../Carousels/reviews';
import { Icon } from "@iconify/react";

export default function MyTickets() {
  return (
    <section>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <caption style={{ textAlign: "left", marginBottom: "1em" }}>
          <h3 className="carousel_title">My Tickets</h3>
        </caption>
        <thead >
          <tr>
            <th style={{ padding: "0.5em" }}>Tour name</th>
            <th style={{ padding: "0.5em" }}>Payment Method</th>
            <th style={{ padding: "0.5em" }}>Price</th>
            <th style={{ padding: "0.5em" }}>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ borderBottom: "1px solid #ddd" }}>
            <td>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5em" }}>
                <img
                  src=""
                  alt="tour"
                  style={{
                    width: "10em",
                    height: "6.8em",
                    borderRadius: "0.75em",
                    objectFit: "cover"
                  }}
                />
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "0.3em" }}>
                  <span>Tour Title</span>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.3em" }}>
                    <Icon icon="system-uicons:calendar-month" color="#FA8B02" width={18} height={18} />
                    <span>DD/MM/YYYY</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.3em" }}>
                    <Icon icon="system-uicons:clock" color="#FA8B02" width={18} height={18} />
                    <span>HH:MM</span>
                  </div>
                </div>
              </div>
            </td>
            <td>
              <div style={{ display: "flex", alignItems: "center", gap: "0.3em" }}>
                <img src="" alt="payment method" style={{ width: 18, height: 18 }} />
                <span>Payment Method</span>
              </div>
            </td>
            <td>0€</td>
            <td>Status</td>
          </tr>
        </tbody>
      </table>
      <TuscanyCarousel />
    </section>
  );
}
