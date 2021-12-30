import React, { useCallback } from "react";
import logo from "./logo.svg";
import "./App.css";

import { Button } from "@welovedevs/ui";
import { FormattedMessage } from "react-intl";
import { ReactComponent as SaveIcon } from "@welovedevs/react-ultimate-resume/assets/icons/drop_file.svg";
import download from "downloadjs";
import resume from "./data/resume.json"

import DeveloperProfile from "@welovedevs/react-ultimate-resume";

const saveIconStyle = {
  marginRight: 8,
  width: 16,
  "& g": {
    stroke: "white"
  },
};

function App() {
  const handleClick = useCallback(
    async () => {
    return await fetch("./resume.pdf")
    .then(e => e.blob())
  .then(blob => {
    download(
      blob as File,
      "Resume.pdf",
      "application/pdf; charset=utf-8"
    );
  })
},
  []
  );

  return (
    /*<div className="App">
      { <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> *
    </div>*/

    <DeveloperProfile
      data={resume}
      options={{
        locale: "en",
        // side: 'back',
        apiKeys: {
          giphy: process.env.REACT_APP_GIPHY,
        },
        endpoints: {
          devicons:
            "https://firebasestorage.googleapis.com/v0/b/jechercheundev.appspot.com/o/technologies%2Ftechnologies_list.json?alt=media&token=459028ba-d9bc-4480-a3c4-88633afab7e2",
        },
        // dismissFooter : true
        // showContactInfos: true,
        // maxSkills: 6,
        //customization,
        disableSortableExperience: false,
        maxCardsPerRow: 4,
        dismissFooter: true,
      }}
      additionalNodes={{
        banner: {
          actionsButtons: (
            <Button variant="outlined" onClick={handleClick} color={"light"}>
              <SaveIcon style={saveIconStyle} />
              <FormattedMessage
                id="Profile.header.jsonResume.download"
                values={["Download Resume"]}
              />
            </Button>
          ),
        },
      }}
    />
  );
}

export default App;
