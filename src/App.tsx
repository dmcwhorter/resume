import React, { useCallback } from "react";
import "./App.css";

import { Button } from "@welovedevs/ui";
import { GrMail as EmailIcon } from "react-icons/gr";
import { GrLinkedinOption as LinkedInIcon } from "react-icons/gr";
import { GrTwitter as TwitterIcon } from "react-icons/gr";
import { GrGithub as GithubIcon } from "react-icons/gr";
import download from "downloadjs";
import resume from "./data/resume.json";

import { DeveloperProfile } from "@welovedevs/react-ultimate-resume";

function handleExternalLink(url: string) {
  return () => {
    window.open(url, "_blank");
  };
}

function App() {

  const handleResumeDownload = useCallback(async () => {
    return await fetch("./DavidMcWhorterResume.pdf")
      .then((e) => e.blob())
      .then((blob) => {
        download(blob as File, "DavidMcWhorterResume.pdf", "application/pdf; charset=utf-8");
      });
  }, []);

  return (
    <DeveloperProfile
      data={resume}
      onEdit={{}}
      onCustomizationChanged={{}}
      onIsEditingChanged={{}}
      options={{
        locale: "en",
        // side: 'back',
        // apiKeys: {
        //   giphy: process.env.REACT_APP_GIPHY,
        // },
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
      mode={"view"}
      additionalNodes={{
        banner: {
          actionsButtons: [
            <Button
              key="github"
              variant="outlined"
              onClick={handleExternalLink("https://github.com/dmcwhorter")}
              color="light"
            >
              <GithubIcon
                color="white"
                size="20px"
              />
            </Button>,
            <Button
              key="linkedin"
              variant="outlined"
              onClick={handleExternalLink(
                "https://www.linkedin.com/in/davidmcwhorter05"
              )}
              color="light"
            >
              <LinkedInIcon
                color="white"
                size="20px"
              />
            </Button>,
            <Button
              key="twitter"
              variant="outlined"
              onClick={handleExternalLink("https://twitter.com/DavidMcWhorter")}
              color="light"
            >
              <TwitterIcon
                color="white"
                size="20px"
              />
            </Button>,
            <Button
              key="email"
              variant="outlined"
              onClick={() => window.open("mailto:david@mcwhorter.io")}
              color="light"
            >
              <EmailIcon
                color="white"
                size="20px"
              />
            </Button>,
            <Button
              key="resumedownload"
              variant="outlined"
              onClick={handleResumeDownload}
              color="light"
            >
              Resume
            </Button>,
          ],
        },
      }}
      classes={{}}
      onFilesUpload={{}}
    />
  );
}

export default App;
