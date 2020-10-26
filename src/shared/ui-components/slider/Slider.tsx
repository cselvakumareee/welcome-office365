import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "70%",
    },
    margin: {
      height: theme.spacing(3),
    },
  })
);

const marks = [
  {
    value: 20,
    label: "Select a plan",
  },
  {
    value: 70,
    label: "Add Number of Licenses",
  },
];

function valuetext(value: number) {
  return `${value}`;
}

export default function MaterialSlider() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Slider
        defaultValue={20}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-custom"
        step={10}
        valueLabelDisplay="auto"
        marks={marks}
      />
    </div>
  );
}
