import React from "react";
import RestaurantCard from "./components/RestaurantCard";
import { restaurants } from "./restaurants";

console.log(restaurants[0]);
const App = () => {
  return (
    <div>
      <RestaurantCard restaurant={restaurants[0]} />
    </div>
  );
};

export default App;
