import React from "react";

function BsCard() {
  const details = [
    {
      id: 1,
      img: "",
      name: "sirt1",
      price: "180",
      delivery: "free Delivery",
      rating: "3.5",
      review: "2803"
    },
    {
      id: 2,
      img: "",
      name: "sirt1",
      price: "180",
      delivery: "free Delivery",
      rating: "3.5",
      review: "2803"
    },
    {
      id: 2,
      img: "",
      name: "sirt1",
      price: "180",
      delivery: "free Delivery",
      rating: "3.5",
      review: "2803"
    },
    {
      id: 2,
      img: "",
      name: "sirt1",
      price: "180",
      delivery: "free Delivery",
      rating: "3.5",
      review: "2803"
    },
    {
      id: 2,
      img: "",
      name: "sirt1",
      price: "180",
      delivery: "free Delivery",
      rating: "3.5",
      review: "2803"
    }
  ];
  return (
    <div class="cards">
      <div class="left">
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label class="form-check-label" for="flexCheckDefault">
            Male
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label class="form-check-label" for="flexCheckDefault">
            Female
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label class="form-check-label" for="flexCheckDefault">
            Kids
          </label>
        </div>
      </div>
      <div class="right">
        {details.map((value) => {
          return (
            <div key={value.id}>
              <div class="card">
                <div className="img-align">
                  <img
                    src={require("./shirt1.webp")}
                    class="card-img-top"
                    alt="..."
                  />
                </div>

                <h5 class="card-title">{value.name}</h5>
                <h2 class="card-text">&#8377;{value.price}</h2>
                <div className="btn-rev">
                  <h6 className="btn">{value.rating}</h6>
                  <p className="review">{value.review} reviews</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default BsCard;
