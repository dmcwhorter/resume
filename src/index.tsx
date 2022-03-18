import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { StylesProvider as MuiStylesProvider } from "@material-ui/core/styles";
import { JssProvider } from "react-jss";
import { create } from "jss";
import preset from "jss-preset-default";

import messages from "./data/i18n.json";
import { IntlProvider } from "react-intl";

const muiInstance = create(preset());
muiInstance.setup({ insertionPoint: "mui-insertion-point" });
const jssinstance = create(preset());
jssinstance.setup({ insertionPoint: "jss-insertion-point" });

const jssStyleNode = document.createComment("jss-insertion-point");
const muiStyleNode = document.createComment("mui-insertion-point");
document.head.insertBefore(jssStyleNode, document.head.firstChild);
document.head.insertBefore(muiStyleNode, document.head.firstChild);

ReactDOM.render(
  <React.StrictMode>
    <MuiStylesProvider jss={muiInstance}>
      <JssProvider jss={jssinstance}>
        <IntlProvider locale={"en"} messages={messages}>
          <App />
        </IntlProvider>
      </JssProvider>
    </MuiStylesProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();