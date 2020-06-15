import React from "react";
import { useSelector } from "react-redux";

import CustomExpansionPanel from "../Topics/CustomExpasionPanel";
import ErrorCustom from "../utils/ErrorCustom";

export default function Topics() {
  const { topics, errorStatus, errorMessage } = useSelector(
    (state) => state.content
  );

  if (errorStatus) {
    return <ErrorCustom text={errorMessage} />;
  }

  return <CustomExpansionPanel topics={topics} />;
}
