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

function handleExternalLink(url: string) {
  return () => {
    window.open(url, "_blank");
  };
}

function App() {

  const handleResumeDownload = useCallback(async () => {
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
          actionsButtons: [
            <Button
              key="github"
              variant="outlined"
              onClick={handleExternalLink("https://github.com/dmcwhorter")}
              color="light"
            >
              <GithubIcon
                fill="white"
                stroke="white"
                width="24px"
                height="24px"
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
                fill="white"
                stroke="white"
                width="24px"
                height="24px"
              />
            </Button>,
            <Button
              key="twitter"
              variant="outlined"
              onClick={handleExternalLink("https://twitter.com/DavidMcWhorter")}
              color="light"
            >
              <TwitterIcon
                fill="white"
                stroke="white"
                width="24px"
                height="24px"
              />
            </Button>,
            <Button
              key="email"
              variant="outlined"
              onClick={() => window.open("mailto:david@mcwhorter.io")}
              color="light"
            >
              <EmailIcon
                fill="white"
                stroke="white"
                width="24px"
                height="24px"
              />
            </Button>,
            <Button
              key="resumedownload"
              variant="outlined"
              onClick={handleResumeDownload}
              color="light"
            >
              Resume&nbsp;&nbsp;
              <DownloadIcon
                fill="white"
                stroke="white"
                width="24px"
                height="24px"
              />
            </Button>,
          ],
        },
      }}
    />
  );
}

export default App;
