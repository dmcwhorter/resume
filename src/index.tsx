import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import "@welovedevs/react-ultimate-resume/styles/global.css";
import { StylesProvider as MuiStylesProvider, } from "@material-ui/core/styles";
import { create } from "jss";
import { JssProvider } from "react-jss";
import jssDefaultPreset from "jss-preset-default";

const muiInstance = create(jssDefaultPreset());
muiInstance.setup({ insertionPoint: "mui-insertion-point" });
const jssinstance = create(jssDefaultPreset());
jssinstance.setup({ insertionPoint: "jss-insertion-point" });

const jssStyleNode = document.createComment("jss-insertion-point");
const muiStyleNode = document.createComment("mui-insertion-point");
document.head.insertBefore(jssStyleNode, document.head.firstChild);
document.head.insertBefore(muiStyleNode, document.head.firstChild);

ReactDOM.render(
  <React.StrictMode>
    <MuiStylesProvider jss={muiInstance}>
      <JssProvider jss={jssinstance}>
            <App />
      </JssProvider>
    </MuiStylesProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();