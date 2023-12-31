import React, { useEffect } from "react";
import HamburgerMenu from "../components/HamburgerMenu";
import SearchBar from "../components/SearchBar";
import FoodView from "../components/FoodView";
import BottomMenu from "../components/BottomMenu";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { foodFetch } from "../redux/foodSlice";
import { searchFetch } from "../redux/searchSlice";
import { useNavigate } from "react-router-dom"; 

function HomePage() {

  const navigate = useNavigate();

  const types = ["foods", "drinks", "snacks", "sauces", "salads"];
  const [show, setShow] = useState(false);

  function showMenu() {
    setShow(!show);
  }

  const token = localStorage.getItem("token");

  const dispatch = useDispatch();

  useEffect(() => {
    showFoodByType(token, "foods");
  }, []);

  const showFoodByType = (token, type) => {
    const data = { token, type };
    dispatch(foodFetch(data));
  };

  const foodList = useSelector((state) => state.food);

  const handelSearch = (e) => {
    console.log(e);
    if (e.key === "Enter") {
      const data = { token: token, name: e.target.value };
      dispatch(searchFetch(data));
navigate(`/search/${e.target.value}`);
    }
  };

  const foodSearch = useSelector((state) => state.search);
console.log(foodSearch);
  return (
    <>
      <div className={`homePage ${show ? "showMenu" : null}`}>
        <div className="homePage-header">
          <HamburgerMenu showMenu={showMenu} />
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.3">
              <path
                d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </svg>
        </div>
        <div className="homePage-content">
          <h1 className="homePage-content-title">Delicious food for you</h1>
          <SearchBar onKeyPress={handelSearch} />
          <div className="homePage-content-filter">
            {types.map((type) => {
              return (
                <div
                  className="homePage-content-filter-item"
                  onClick={() => showFoodByType(token, type)}
                >
                  {type}
                </div>
              );
            })}
          </div>

          <div className="homePage-content-food">
            {foodList.loading ? (
              <h1>is loadin...</h1>
            ) : (
              foodList.foods.data.map((food) => {
                return <Link to={`../foodDetails/${food.name}`}><FoodView food={food}/></Link> ;
              })
            )}
          </div>
        </div>

        <BottomMenu />
      </div>

      <div className="mainMenu" onClick={showMenu}>
        <ul className={`mainMenu-list ${show ? "showUl" : null}`}>
          <li>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16 9C16 10.0609 15.5786 11.0783 14.8284 11.8284C14.0783 12.5786 13.0609 13 12 13C10.9391 13 9.92172 12.5786 9.17157 11.8284C8.42143 11.0783 8 10.0609 8 9C8 7.93913 8.42143 6.92172 9.17157 6.17157C9.92172 5.42143 10.9391 5 12 5C13.0609 5 14.0783 5.42143 14.8284 6.17157C15.5786 6.92172 16 7.93913 16 9ZM14 9C14 9.53043 13.7893 10.0391 13.4142 10.4142C13.0391 10.7893 12.5304 11 12 11C11.4696 11 10.9609 10.7893 10.5858 10.4142C10.2107 10.0391 10 9.53043 10 9C10 8.46957 10.2107 7.96086 10.5858 7.58579C10.9609 7.21071 11.4696 7 12 7C12.5304 7 13.0391 7.21071 13.4142 7.58579C13.7893 7.96086 14 8.46957 14 9Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 1C5.925 1 1 5.925 1 12C1 18.075 5.925 23 12 23C18.075 23 23 18.075 23 12C23 5.925 18.075 1 12 1ZM3 12C3 14.09 3.713 16.014 4.908 17.542C5.74723 16.4399 6.8299 15.5467 8.07143 14.9323C9.31297 14.3179 10.6797 13.9988 12.065 14C13.4323 13.9987 14.7819 14.3095 16.0109 14.9088C17.2399 15.508 18.316 16.3799 19.157 17.458C20.0234 16.3216 20.6068 14.9952 20.8589 13.5886C21.111 12.182 21.0244 10.7355 20.6065 9.36898C20.1886 8.00243 19.4512 6.75505 18.4555 5.73004C17.4598 4.70503 16.2343 3.93186 14.8804 3.47451C13.5265 3.01716 12.0832 2.88877 10.6699 3.09997C9.25652 3.31117 7.91379 3.85589 6.75277 4.68905C5.59175 5.52222 4.64581 6.61987 3.99323 7.8912C3.34065 9.16252 3.00018 10.571 3 12ZM12 21C9.93395 21.0031 7.93027 20.2923 6.328 18.988C6.97293 18.0647 7.83134 17.3109 8.83019 16.7907C9.82905 16.2705 10.9388 15.9992 12.065 16C13.1772 15.9991 14.2735 16.2636 15.2629 16.7714C16.2524 17.2793 17.1064 18.0159 17.754 18.92C16.1393 20.2667 14.1026 21.0029 12 21Z"
                fill="white"
              />
            </svg>
            <span>
              <Link to="../profile">Profile</Link>
            </span>
          </li>
          <li>
            <svg
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.25 6.68753C3.03451 6.68753 2.82785 6.77314 2.67548 6.92551C2.5231 7.07788 2.4375 7.28455 2.4375 7.50003C2.4375 7.71552 2.5231 7.92218 2.67548 8.07456C2.82785 8.22693 3.03451 8.31253 3.25 8.31253H5.05375L7.18575 16.8438C7.36694 17.5669 8.0145 18.0625 8.75956 18.0625H18.8914C19.6251 18.0625 20.2483 17.575 20.4409 16.8682L22.5469 9.12503H20.8455L18.8906 16.4375H8.75875L6.62756 7.90628C6.53953 7.55628 6.33659 7.24595 6.05124 7.02498C5.76589 6.80401 5.41465 6.68518 5.05375 6.68753H3.25ZM17.875 18.0625C16.5384 18.0625 15.4375 19.1635 15.4375 20.5C15.4375 21.8366 16.5384 22.9375 17.875 22.9375C19.2116 22.9375 20.3125 21.8366 20.3125 20.5C20.3125 19.1635 19.2116 18.0625 17.875 18.0625ZM10.5625 18.0625C9.22594 18.0625 8.125 19.1635 8.125 20.5C8.125 21.8366 9.22594 22.9375 10.5625 22.9375C11.8991 22.9375 13 21.8366 13 20.5C13 19.1635 11.8991 18.0625 10.5625 18.0625ZM13 6.68753V10.75H10.5625L13.8125 14L17.0625 10.75H14.625V6.68753H13ZM10.5625 19.6875C11.0208 19.6875 11.375 20.0418 11.375 20.5C11.375 20.9583 11.0208 21.3125 10.5625 21.3125C10.1042 21.3125 9.75 20.9583 9.75 20.5C9.75 20.0418 10.1042 19.6875 10.5625 19.6875ZM17.875 19.6875C18.3333 19.6875 18.6875 20.0418 18.6875 20.5C18.6875 20.9583 18.3333 21.3125 17.875 21.3125C17.4167 21.3125 17.0625 20.9583 17.0625 20.5C17.0625 20.0418 17.4167 19.6875 17.875 19.6875Z"
                fill="white"
              />
            </svg>

            <span>
              <Link to="../order">orders</Link>
            </span>
          </li>
          <li>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.41 11.58L12.41 2.58C12.05 2.22 11.55 2 11 2H4C2.9 2 2 2.9 2 4V11C2 11.55 2.22 12.05 2.59 12.42L11.59 21.42C11.95 21.78 12.45 22 13 22C13.55 22 14.05 21.78 14.41 21.41L21.41 14.41C21.78 14.05 22 13.55 22 13C22 12.45 21.77 11.94 21.41 11.58ZM13 20.01L4 11V4H11V3.99L20 12.99L13 20.01Z"
                fill="white"
              />
              <path
                d="M6.5 8C7.32843 8 8 7.32843 8 6.5C8 5.67157 7.32843 5 6.5 5C5.67157 5 5 5.67157 5 6.5C5 7.32843 5.67157 8 6.5 8Z"
                fill="white"
              />
            </svg>

            <span>
              <Link to="../offer">offer and promo</Link>
            </span>
          </li>
          <li>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 5V14H14V19H5V5H19ZM19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H15L21 15V5C21 3.9 20.1 3 19 3ZM12 14H7V12H12V14ZM17 10H7V8H17V10Z"
                fill="white"
              />
            </svg>

            <span>
              <Link to="#">Privacy policy</Link>
            </span>
          </li>
          <li>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_121_17)">
                <path
                  d="M10.0081 19.2C8.91539 18.675 7.92677 18.1188 7.04221 17.5312C6.15766 16.9438 5.38368 16.3813 4.72026 15.8438C4.05685 15.3063 3.47473 14.6688 2.97392 13.9313C2.47311 13.1938 2.05685 12.5531 1.72514 12.0094C1.39343 11.4656 1.11701 10.75 0.895871 9.8625C0.674733 8.975 0.505627 8.24688 0.388554 7.67813C0.271481 7.10938 0.183676 6.29375 0.125139 5.23125C0.0666028 4.16875 0.0340824 3.3375 0.0275784 2.7375C0.0210743 2.1375 0.0178223 1.225 0.0178223 0C0.0178223 0.325 0.505627 0.60625 1.48124 0.84375C2.45685 1.08125 3.63408 1.2 5.01295 1.2C6.39181 1.2 7.56904 1.08125 8.54465 0.84375C9.52026 0.60625 10.0081 0.325 10.0081 0C10.0081 0.325 10.4959 0.60625 11.4715 0.84375C12.4471 1.08125 13.6243 1.2 15.0032 1.2C16.3821 1.2 17.5593 1.08125 18.5349 0.84375C19.5105 0.60625 19.9983 0.325 19.9983 0C19.9983 1.225 19.9951 2.1375 19.9886 2.7375C19.9821 3.3375 19.9495 4.16875 19.891 5.23125C19.8325 6.29375 19.7447 7.10938 19.6276 7.67813C19.5105 8.24688 19.3414 8.975 19.1203 9.8625C18.8991 10.75 18.6227 11.4656 18.291 12.0094C17.9593 12.5531 17.543 13.1938 17.0422 13.9313C16.5414 14.6688 15.9593 15.3063 15.2959 15.8438C14.6325 16.3813 13.8585 16.9438 12.9739 17.5312C12.0894 18.1188 11.1008 18.675 10.0081 19.2ZM10.0081 2.4C10.0081 2.725 9.64059 3.00625 8.90563 3.24375C8.17067 3.48125 7.28937 3.6 6.26173 3.6C5.55929 3.6 4.86335 3.54375 4.17392 3.43125C3.48449 3.31875 2.93164 3.16875 2.51538 2.98125C2.51538 3.96875 2.52839 4.7625 2.55441 5.3625C2.58042 5.9625 2.64221 6.67813 2.73977 7.50938C2.83734 8.34063 2.98368 9.025 3.1788 9.5625C3.37392 10.1 3.6536 10.7063 4.01782 11.3813C4.38205 12.0563 4.82758 12.6438 5.35441 13.1438C5.88124 13.6438 6.5349 14.1625 7.31538 14.7C8.09587 15.2375 8.99343 15.7375 10.0081 16.2V2.4Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_121_17">
                  <rect width="20" height="19.2" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <span>
              <Link to="#">Security</Link>
            </span>
          </li>
        </ul>
        <div className="mainMenu-signOut">
          <span>Sign-out</span>
        </div>
      </div>
    </>
  );
}

export default HomePage;
