import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "styled-components";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const theme = {
  colors: {
    primary: {
      "0": "#EEF2FF",
      "100": "#DBE3FD",
      "200": "#C8D4FA",
      "300": "#A2B5F2",
      "400": "#8198E4",
      "500": "#657ED0",
      "600": "#4D65B4",
      "700": "#384C8F",
      "800": "#243363",
      "900": "#121A33"
      
    },
    gray: {
      "0": "#FFFFFF",
      "100": "#F5F7FC",
      "200": "#EBEEFA",
      "300": "#D4DBF0",
      "400": "#BCC5E1",
      "500": "#A2ABCB",
      "600": "#848DAB",
      "700": "#626982",
      "800": "#3B404F",
      "900": "#13141A"
    }
  },
  fontSize: {
    "3xs": "0.512rem",
    "2xs": "0.64rem",
    "xs": "0.8rem",
    "s": "1rem",
    "m": "1.25rem",
    "l": "1.563rem",
    "xl": "1.953rem",
    "2xl": "2.441rem",
    "3xl": "3.052rem"
  }
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
