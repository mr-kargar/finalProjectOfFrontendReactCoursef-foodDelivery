import React from "react";
import { useNavigate } from "react-router-dom";

function OfferAndPromoPage() {
  const navigate = useNavigate();
  return (
    <div className="offerAndPromoPage">
      <div className="header">
        <svg
                onClick={() => navigate(-1)}

          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 18L9 12L15 6"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <h3>My offers</h3>
      </div>
      <div className="content">
        <div className="emptyHistory">
          <h2>ohh snap! No offers yet</h2>
          <p>Bella dose’t have any offers yet please check again.</p>
        </div>
      </div>
    </div>
  );
}

export default OfferAndPromoPage;
