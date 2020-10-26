import React from "react";
import {
  makeStyles,
  withStyles,
  Theme,
  createStyles,
} from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const AntTabs = withStyles({
  root: {
    borderBottom: "1px solid #e8e8e8",
  },
  indicator: {
    backgroundColor: "#1890ff",
  },
})(Tabs);

const AntTab = withStyles((theme: Theme) =>
  createStyles({
    root: {
      textTransform: "none",
      minWidth: 72,
      fontWeight: theme.typography.fontWeightBold,
      marginRight: theme.spacing(4),
      color: "#1175b5",
      fontFamily: ['"Segoe UI"', "Roboto", "Arial", "sans-serif"].join(","),
      "&:hover": {
        color: "#40a9ff",
        opacity: 1,
      },
      "&$selected": {
        color: "#231F20",
        fontWeight: theme.typography.fontWeightMedium,
      },
      "&:focus": {
        color: "#231F20",
      },
    },
    selected: {},
  })
)((props: StyledTabProps) => <Tab disableRipple {...props} />);

interface StyledTabProps {
  label: string;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
  },
  padding: {
    padding: theme.spacing(3),
  },
  demo1: {
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    justifyContent: "center",
  },
}));
export default function MaterialTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  return (
    <div className={classes.demo1}>
      <AntTabs value={value} onChange={handleChange} aria-label="ant example">
        <AntTab label="Communicate Effectively" />
        <AntTab label="Collaborate Seamlessly" />
        <AntTab label="Stay Secure" />
      </AntTabs>
    </div>
  );
}
