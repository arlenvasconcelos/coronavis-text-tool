import React from "react";
import { useSelector } from "react-redux";

import Searched from "../components/Home/Searched";
import Topics from "../components/Home/Topics";

export default function Home() {
  const { results } = useSelector((state) => state.content, []);

  return (
    <>{results.papers ? <Searched dataSearched={results} /> : <Topics />}</>
  );
}
