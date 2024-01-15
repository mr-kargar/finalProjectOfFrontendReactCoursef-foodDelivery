import React from "react";

const Order = ({ order }) => {
    
  return (
    <div className="order">
        <div className="order-header">
        <p>{order.updatedAt}</p>
        <p>{order.status}</p>
        </div>
        
      {order.items.map((item) => {
        return (
          <div className="order-item">
            <p>{item.menuItemId.name}</p>
            <p>qty : {item.quantity}</p>
            <p>price : {item.quantity * item.menuItemId.price}</p>
          </div>
        );
      })}

      <p>total : {order.totalAmount}</p>
      
    </div>
  );
};

export default Order;
