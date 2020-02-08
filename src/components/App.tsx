import React, { useState } from "react";
import { restaurants } from "../restaurants";
import RestaurantList from "./RestaurantList";
import { Container, Button, Box } from "@material-ui/core";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mainContainer: { padding: 30 },
    largeButton: { margin: 20 }
  })
);

const App = () => {
  const [ordering, setOrdering] = useState<"asc" | "desc">("asc");
  const classes = useStyles();

  const handleSort = (event: React.MouseEvent) => {
    event.preventDefault();
    setOrdering(ordering === "asc" ? "desc" : "asc");

    // This just makes the lazyloader start loading the images
    window.scroll(0, 1);
    window.scroll(0, -1);
  };

  return (
    <Container className={classes.mainContainer} maxWidth="xl">
      <Button
        className={classes.largeButton}
        variant="contained"
        color="primary"
        endIcon={
          ordering === "asc" ? <ArrowDownwardIcon /> : <ArrowUpwardIcon />
        }
        size="large"
        onClick={handleSort}
      >
        Sort the restaurants
      </Button>
      <Box pt={3}>
        <RestaurantList restaurants={restaurants} sortDirection={ordering} />
      </Box>
    </Container>
  );
};

export default App;
