import React, { ReactChild, ReactChildren } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../styles/GlobalStyles";
import { defaultTheme } from "../styles/theme";
import Header from "./Header";

interface LayoutProps {
  children: ReactChild | ReactChildren;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <div id="wrapper">
        <GlobalStyles />
        <main>{children}</main>
        <footer></footer>
      </div>
    </ThemeProvider>
  );
}
