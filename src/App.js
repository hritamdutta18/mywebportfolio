import { Route, Switch, useLocation } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { lightTheme } from "./components/Themes"
import GlobalStyles from "./globalStyles"
import { lazy, Suspense } from "react"
import { AnimatePresence } from "framer-motion"
import PreLoader from "./subComponents/PreLoader"
import Helmet from "react-helmet"

// Page Components Imported
const Main = lazy(() => import("./components/Main"));
const AboutPage = lazy(() => import("./components/AboutPage"));
const ExpEduPage = lazy(() => import("./components/ExpEduPage"));
const SkillsPage = lazy(() => import("./components/SkillsPage"));
const ProjectPage = lazy(() => import("./components/ProjectPage"));
const SoundBar = lazy(() => import("./subComponents/SoundBar"));

function App() {

  const location= useLocation ();

  return(
    <>
      <GlobalStyles />
      <Helmet>
        <title>Hritam Dutta</title>
        <meta name= 'description' content= 'Welcome to my web portfolio !' />
        <meta property= "og:title" content="Hritam Dutta" />
        <meta
          property="og:description"
          content="Welcome to my web portfolio !"
        />
      </Helmet>
      <ThemeProvider theme= { lightTheme }>
        <Suspense fallback= {<PreLoader />}>
          <SoundBar />

          {/* For framer-motion animation on page change */}
          <AnimatePresence exitBeforeEnter>
            <Switch location= {location} key= {location.pathname}>
              <Route exact path= "/" component= { Main } />
              <Route exact path= "/about" component= { AboutPage } />
              <Route exact path= "/education-experience" component= { ExpEduPage } />
              <Route exact path= "/projects" component= { ProjectPage } />
              <Route exact path= "/skills" component= { SkillsPage } />
            </Switch>
          </AnimatePresence>  
          
        </Suspense>
      </ThemeProvider>      
    </>
  )
}

export default App

