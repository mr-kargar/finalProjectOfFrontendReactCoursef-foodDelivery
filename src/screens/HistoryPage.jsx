import React from "react";
import Button from "../components/button";
import { useNavigate } from "react-router-dom";

function HistoryPage() {
  const navigate = useNavigate();

  const handleStartOrdering = () => {
    navigate("/home");
  };

  return (
    <div className="historyPage">
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

        <h3>History</h3>
      </div>
      <div className="content">
        <div className="emptyHistory">
          <svg
            width="108"
            height="120"
            viewBox="0 0 108 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M95.4167 12.75H89.5V0.916656H77.6667V12.75H30.3333V0.916656H18.5V12.75H12.5833C6.075 12.75 0.75 18.075 0.75 24.5833V107.417C0.75 113.925 6.075 119.25 12.5833 119.25H95.4167C101.925 119.25 107.25 113.925 107.25 107.417V24.5833C107.25 18.075 101.925 12.75 95.4167 12.75ZM95.4167 107.417H12.5833V48.25H95.4167V107.417ZM12.5833 36.4167V24.5833H95.4167V36.4167H12.5833ZM24.4167 60.0833H83.5833V71.9167H24.4167V60.0833ZM24.4167 83.75H65.8333V95.5833H24.4167V83.75Z"
              fill="#C7C7C7"
            />
          </svg>
          <h2>No history yet</h2>
          <p>Hit the orange button down below to Create an order</p>
        </div>
      </div>
      <Button
        label={"Start Ordering"}
        className={"primary button-bottom"}
        onClick={handleStartOrdering}
      />
    </div>
  );
}

export default HistoryPage;
