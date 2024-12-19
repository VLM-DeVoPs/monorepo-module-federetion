import React from "react";
import { shopRoutes } from "@packages/shared/src/Routes/shop";
import { Link } from "react-router-dom";

const Shop = () => {
  return (
    <div>
      <h1>..... SHOP .....</h1>
      <div>Opens since 8:00</div>
      <Link to={shopRoutes.second}>Go to second page</Link>
    </div>
  );
};

export default Shop;
