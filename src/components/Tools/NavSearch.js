import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  OutlinedInput,
  InputAdornment,
  CircularProgress,
  IconButton,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles } from "@material-ui/core/styles";

import api from "../../service/api";
import { setResults } from "../../store/ducks/content";

const useStyles = makeStyles((theme) => ({
  navsearch: {
    padding: theme.spacing(3, 0),
    backgroundColor: theme.palette.common.white,
    display: "flex",
    justifyContent: "center",
  },
  content: {
    width: "800px",
    margin: theme.spacing(0, 1),
  },
  buttonProgress: {
    color: theme.palette.grey[500],
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12,
  },
}));

export default function NavSearch() {
  const classes = useStyles();

  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [redirect, setRedirect] = useState(false);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setRedirect(false);
    try {
      const response = await api.post(`/search?query=${inputValue}`);
      dispatch(setResults(response.data));
      setLoading(false);
      setRedirect(true);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  if (redirect) {
    return <Redirect to="/" />;
  }

  return (
    <div className={classes.navsearch}>
      <div className={classes.content}>
        <form onSubmit={(e) => handleSubmit(e)}>
          <OutlinedInput
            aria-placeholder="Search by answers, keywords, entities or some metadata"
            placeholder="Search by answers, keywords, entities or some metadata"
            fullWidth
            id="input-search"
            value={inputValue}
            onChange={handleChange}
            color="primary"
            autoFocus
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  type="submit"
                  disabled={loading || inputValue === ""}
                >
                  {!loading ? (
                    <SearchIcon />
                  ) : (
                    <CircularProgress
                      size={24}
                      className={classes.buttonProgress}
                    />
                  )}
                </IconButton>
              </InputAdornment>
            }
          />
        </form>
      </div>
    </div>
  );
}
