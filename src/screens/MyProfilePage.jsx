import React from "react";
import Button from "../components/button";
import { useNavigate } from "react-router-dom";
import LinkItem from "../components/LinkItem";
import { Link } from "react-router-dom";

function MyProfilePage() {

  const navigate = useNavigate();
  return (
    <div className="myProfilePage">
      <div className="myProfilePage-header">
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
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <h3>My Profile</h3>
      </div>

      <div className="myProfilePage-content">
        
          <h3>Personal details</h3>

          <div className="myProfilePage-content-personalDetails">
            <img src="src\assets\images\Rectangle 6.png" alt="avatar" />
            <div className="myProfilePage-content-personalDetails-content">
              <h2>Marvis Ighedosa</h2>
              <h5>dosamarvis@gmail.com</h5>
              <p>No 15 uti street off ovie palace road effurun delta state</p>
            </div>
          </div>
     <Link to={"/order"} >  <LinkItem label={"Orders"} /></Link>
      <Link to={"#"} ><LinkItem label={"Pending reviews"} /></Link>
      <Link to={"#"} ><LinkItem label={"Faq"} /></Link>
      <Link to={"#"} ><LinkItem label={"Help"} /></Link>
       
       

      

        <Button label={"Update"} className={'primary button-bottom'}/>
      </div>
    </div>
  );
}

export default MyProfilePage;
