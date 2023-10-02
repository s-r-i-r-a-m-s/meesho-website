import react from "react";

function Images() {
  return (
    <div>
      <div class="img-group">
        <div class="imgb">
          <img src={require("./first.png")} alt="" />
        </div>
        <div class="imgb">
          <img src={require("./2nd.png")} alt="" />
        </div>
        <div class="imgb">
          <img src={require("./3rd.png")} alt="" />
        </div>
        <div class="imgb">
          <img src={require("./4th.png")} alt="" />
        </div>
        <div class="imgb">
          <img src={require("./5th.png")} alt="" />
        </div>
        <div class="imgb" id="img6">
          <img src={require("./6th.png")} alt="" />
        </div>
      </div>
    </div>
  );
}
export default Images;
