import React from "react";
import { GatsbyBrowser } from "gatsby";
import Layout from "./src/components/Layout";
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/600.css";
import "react-slideshow-image/dist/styles.css";

export const wrapPageElement: GatsbyBrowser["wrapPageElement"] = ({
  element,
  props,
}) => {
  return <Layout {...props}>{element}</Layout>;
};
