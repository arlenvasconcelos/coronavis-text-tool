import React from "react";
import { useSelector } from "react-redux";

import CustomExpansionPanel from "../Topics/CustomExpasionPanel";
import ErrorCustom from "../utils/ErrorCustom";

export default function Topics() {
  const { data, errorStatus, errorMessage } = useSelector(
    (state) => state.topics
  );

  if (errorStatus) {
    return <ErrorCustom text={errorMessage} />;
  }

  return <CustomExpansionPanel topics={data} />;
}
