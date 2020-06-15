import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { useSelector } from "react-redux";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  navigation: {},
}));

export default function NavTabs({ tabs }) {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const { results } = useSelector((state) => state.content);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    console.log(results);
    if (results.papers) {
      setValue(1);
    } else {
      setValue(0);
    }
  }, [results]);

  return (
    <section className={classes.root}>
      <Container>
        <div className={classes.navigation}>
          <Tabs
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            value={value}
            onChange={handleChange}
            aria-label="tab-home-navigation"
          >
            {tabs.map((item, key) => (
              <Tab label={item.title} {...a11yProps(key)} />
            ))}
          </Tabs>
        </div>
        {tabs.map((item, key) => (
          <TabPanel value={value} index={key}>
            {item.body}
          </TabPanel>
        ))}
      </Container>
    </section>
  );
}
