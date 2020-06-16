import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
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
}));

export default function NavTabs({ tabs }) {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // useEffect(() => {
  //   console.log(results);
  //   if (results.data.papers) {
  //     setValue(1);
  //   } else {
  //     setValue(0);
  //   }
  // }, [results]);

  return (
    <section className={classes.root}>
      <Container>
        <div>
          <Tabs
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            value={value}
            onChange={handleChange}
            aria-label="tab-home-navigation"
          >
            {tabs.map((item, key) => (
              <Tab key={item.title} label={item.title} {...a11yProps(key)} />
            ))}
          </Tabs>
        </div>
        {tabs.map((item, key) => (
          <TabPanel key={item.title} value={value} index={key}>
            {item.body}
          </TabPanel>
        ))}
      </Container>
    </section>
  );
}
