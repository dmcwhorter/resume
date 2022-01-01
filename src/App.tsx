import React, { useCallback } from "react";
import "./App.css";

import { Button } from "@welovedevs/ui";
import { ReactComponent as DownloadIcon } from "@welovedevs/react-ultimate-resume/assets/icons/download.svg";
import { ReactComponent as EmailIcon } from "@welovedevs/react-ultimate-resume/assets/icons/email.svg";
import { ReactComponent as LinkedInIcon } from "@welovedevs/react-ultimate-resume/assets/icons/brands/linkedin.svg";
import { ReactComponent as TwitterIcon } from "@welovedevs/react-ultimate-resume/assets/icons/brands/twitter.svg";
import { ReactComponent as GithubIcon } from "@welovedevs/react-ultimate-resume/assets/icons/brands/github.svg";
import download from "downloadjs";
import resume from "./data/resume.json";

import DeveloperProfile from "@welovedevs/react-ultimate-resume";

function App() {
  const handleClick = useCallback(async () => {
    return await fetch("./resume.pdf")
      .then((e) => e.blob())
      .then((blob) => {
        download(blob as File, "Resume.pdf", "application/pdf; charset=utf-8");
      });
  }, []);

  return (
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
        // showContactInfos: true,
        customization: resume.resumeCustomization,
        disableSortableExperience: false,
        maxCardsPerRow: 4,
        maxSkills: 30,
        dismissFooter: true,
      }}
      additionalNodes={{
        banner: {
          actionsButtons: (
            <Button variant="outlined" onClick={handleClick} color={"light"}>
              Resume&nbsp;&nbsp;
              <DownloadIcon
                fill="white"
                stroke="white"
                width="24px"
                height="24px"
              />
            </Button>
          ),
          userInformations: [
            <div>
              <br />
              <a
                href="https://github.com/dmcwhorter"
                target="_blank"
                rel="noreferrer"
              >
                <GithubIcon
                  fill="white"
                  stroke="white"
                  width="24px"
                  height="24px"
                />
              </a>
              &nbsp;&nbsp;
              <a
                href="http://www.linkedin.com/in/davidmcwhorter05"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedInIcon
                  fill="white"
                  stroke="white"
                  width="24px"
                  height="24px"
                />
              </a>
              &nbsp;&nbsp;
              <a
                href="http://twitter.com/DavidMcWhorter"
                target="_blank"
                rel="noreferrer"
              >
                <TwitterIcon
                  fill="white"
                  stroke="white"
                  width="24px"
                  height="24px"
                />
              </a>
              &nbsp;&nbsp;
              <a
                href="mailto:david@mcwhorter.io"
                target="_blank"
                rel="noreferrer"
              >
                <EmailIcon
                  fill="white"
                  stroke="white"
                  width="24px"
                  height="24px"
                />
              </a>
            </div>,
          ],
        },
      }}
    />
  );
}

export default App;
