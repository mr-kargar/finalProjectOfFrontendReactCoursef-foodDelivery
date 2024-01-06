import React from "react";

function Badge(props) {
    console.log(props);
  return <div className="badge">
    {props.quantity}</div>;
}

export default Badge;
