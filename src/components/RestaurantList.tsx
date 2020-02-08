import React, { FunctionComponent } from "react";
import { Grid } from "@material-ui/core";
import RestaurantCard from "./RestaurantCard";

type RLProps = {
  restaurants: Restaurant[];
  sortDirection: "asc" | "desc";
};

const RestaurantList: FunctionComponent<RLProps> = ({
  restaurants,
  sortDirection
}) => {
  return (
    <Grid container spacing={4}>
      {restaurants
        .sort((a, b) => {
          if (a.name > b.name) return sortDirection === "asc" ? 1 : -1;
          else return sortDirection === "asc" ? -1 : 1;
        })
        .map(restaurant => {
          return (
            <Grid key={restaurant.name} item>
              <RestaurantCard restaurant={restaurant} />
            </Grid>
          );
        })}
    </Grid>
  );
};

export default RestaurantList;
