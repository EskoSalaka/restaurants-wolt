import React, { FunctionComponent } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { BlurhashCanvas } from "react-blurhash";
import LazyLoad from "react-lazyload";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: { width: "100%" },
    media: {
      display: "block",
      backgroundSize: "cover",
      backgroundRepeat: "no - repeat",
      backgroundPosition: "center",
      paddingTop: "57%",
      width: "100%",
      position: "absolute",
      top: 0,
      left: 0
    }
  })
);

type RCIProps = {
  restaurantImage?: string;
  restaurantBlurhash: string;
};

const RestaurantCardImage: FunctionComponent<RCIProps> = ({
  restaurantImage,
  restaurantBlurhash
}) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <LazyLoad>
        <div
          className={classes.media}
          style={{ backgroundImage: `url(${restaurantImage})` }}
        />
      </LazyLoad>

      <BlurhashCanvas
        hash={restaurantBlurhash}
        width={350}
        height={200}
        punch={1}
      />
    </div>
  );
};

export default RestaurantCardImage;
