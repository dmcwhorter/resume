# David McWhorter's Professional Website

This project is built using [Create React App](https://github.com/facebook/create-react-app).  

The website itself is contructed by wrapping and customizing the [react-ulitimate-resume](https://github.com/welovedevs/react-ultimate-resume) project built by [WeLoveDevs.com](https://welovedevs.com/).

My resume is maintained in [JSON Resume](https://jsonresume.org/) format at [src/data/resume.json](./src/data/resume.json).  

The build for the project uses this source file both to create a static .pdf of the resume and to populate the content of the website.

# Available Scripts

These are mostly Create React App defaults.

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

The build script is overridden to compile an html verison of my resume using the [Resumed](https://github.com/rbardini/resumed) project with a forked version of the [Spartan theme for Json Resume](https://github.com/phoinixi/jsonresume-theme-spartan).  It then renders it to .pdf using [Puppeteer](https://github.com/puppeteer/puppeteer).

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn test`

(I don't currently have any tests.)

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn eject`

(I don't forsee using this.)

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.