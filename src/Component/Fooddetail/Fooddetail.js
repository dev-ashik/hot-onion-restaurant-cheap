import React, { useState } from "react";
import { useParams } from "react-router-dom";
import fakefoodMenu from "../../fakedata/Fakefood";
import Food from "../Food/Food";

const Fooddetail = () => {
  let { foodId } = useParams();
  const foundFood = fakefoodMenu.find((fd) => fd.id === foodId);
  // console.log(foundFood);

  return (
    <div>
      <Food food={foundFood}></Food>
    </div>
  );
};

export default Fooddetail;
