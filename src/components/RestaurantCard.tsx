import React, { FunctionComponent } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { CardActionArea, Divider } from "@material-ui/core";

import RestaurantCardImage from "./RestaurantCardImage";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: { width: 350 },
    tightContent: { paddingTop: 5, paddingBottom: 5 },
    tags: { paddingTop: 5, paddingBottom: 5 }
  })
);

type rcProps = {
  restaurant: Restaurant;
};

const RestaurantCard: FunctionComponent<rcProps> = ({ restaurant }) => {
  const classes = useStyles();
  const parseDeliveryPrice = (deliveryPrice: number): string => {
    const parsedPrice: string = deliveryPrice.toString();

    if (parsedPrice.length === 1) return parsedPrice + "€";
    else
      return (
        parsedPrice.slice(0, 1) +
        "," +
        parsedPrice.slice(1, parsedPrice.length) +
        "€"
      );
  };

  return (
    <div>
      <Card className={classes.root}>
        <CardActionArea>
          <RestaurantCardImage
            restaurantImage={restaurant.image}
            restaurantBlurhash={restaurant.blurhash}
          />
          <CardHeader
            className={classes.tightContent}
            title={restaurant.name}
            subheader={
              restaurant.city +
              " • " +
              parseDeliveryPrice(restaurant.delivery_price)
            }
          />

          <CardContent className={classes.tightContent}>
            <Typography
              className={classes.tightContent}
              variant="body1"
              color="textSecondary"
              component="p"
            >
              {restaurant.description}
            </Typography>

            <Divider />

            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              className={classes.tags}
            >
              {restaurant.tags.map((tag, i) => {
                if (i + 1 === restaurant.tags.length) return tag;
                else return tag + " • ";
              })}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default RestaurantCard;
