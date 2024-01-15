import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import FoodView from "../components/FoodView";
import { useNavigate } from "react-router-dom";
import { searchFetch } from "../redux/searchSlice";
import Loader from "../components/Loader";

function SearchPage() {
  const { name } = useParams();
  const token = localStorage.getItem("token");
  const search = useSelector((state) => state.search);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const data = { token, name };
    dispatch(searchFetch(data));
  }, []);

  return (
    <>
      <div className="searchPage">
        <div className="searchPage-header">
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

          <h3>{name}</h3>
        </div>

        {search.search.total === 0 ? (
          <div className="searchPage-content">
            <svg
              width="122"
              height="122"
              viewBox="0 0 122 122"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M55.9167 96.5833C78.3763 96.5833 96.5833 78.3763 96.5833 55.9167C96.5833 33.4571 78.3763 15.25 55.9167 15.25C33.4571 15.25 15.25 33.4571 15.25 55.9167C15.25 78.3763 33.4571 96.5833 55.9167 96.5833Z"
                stroke="#C7C7C7"
                stroke-width="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M106.75 106.75L84.6375 84.6375"
                stroke="#C7C7C7"
                stroke-width="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <h3>Item not found</h3>
            <p>Try searching the item with a different keyword.</p>
          </div>
        ) : (
          <div className="searchPage-content">
            {search.search.data ?
             search.search.data.map((food) => {
              return (
                <Link
                  to={`../foodDetails/${food.name}`}
                  className={"linkStyle"}
                >
                  <FoodView key={food._id} food={food} />
                </Link>
              );
            }):
            <Loader />
            }
          </div>
        )}
      </div>
    </>
  );
}

export default SearchPage;
