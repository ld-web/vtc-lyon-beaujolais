import React, { ReactChild, ReactChildren } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../styles/GlobalStyles";
import { defaultTheme } from "../styles/theme";
import Footer from "./Footer";
import Header from "./Header";
import Seo from "./Seo";

interface LayoutProps {
  children: ReactChild | ReactChildren;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Seo />
      <ThemeProvider theme={defaultTheme}>
        <Header />
        <div id="wrapper">
          <GlobalStyles />
          <main>{children}</main>
          <Footer />
        </div>
      </ThemeProvider>
    </>
  );
}
