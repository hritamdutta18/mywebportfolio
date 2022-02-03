import { Route, Switch, useLocation } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { lightTheme } from "./components/Themes"
import GlobalStyles from "./globalStyles"
import { lazy, Suspense, useEffect, useState } from "react"
import { AnimatePresence } from "framer-motion"
import PreLoader from "./subComponents/PreLoader"

// Page Components Imported
const Main = lazy(() => import("./components/Main"));
const AboutPage = lazy(() => import("./components/AboutPage"));
const ExpEduPage = lazy(() => import("./components/ExpEduPage"));
const SkillsPage = lazy(() => import("./components/SkillsPage"));
const ProjectPage = lazy(() => import("./components/ProjectPage"));
const NotFound404 = lazy(() => import("./components/NotFound404"));
const SoundBar = lazy(() => import("./subComponents/SoundBar"));

function App() {

  const [display, setDisplay]= useState(true);
  const location= useLocation ();

  useEffect(() => {
    const path= location.pathname;
    const pathArray= ["/", "/about", "/education-experience", "/projects", "/skills"];
    const error404 = route => { return route === path };

    setDisplay(!(pathArray.find(error404) === undefined));
  }, [display, location]);
  

  return(
    <>
      <GlobalStyles />
      <ThemeProvider theme= { lightTheme }>
        <Suspense fallback= {<PreLoader />}>
          {
            display ? 
            <SoundBar />
            :
            <></>
          }          

          {/* For framer-motion animation on page change */}
          <AnimatePresence exitBeforeEnter>

            <Switch location= {location} key= {location.pathname}>
              <Route exact path= "/" component= { Main } />
              <Route exact path= "/about" component= { AboutPage } />
              <Route exact path= "/education-experience" component= { ExpEduPage } />
              <Route exact path= "/projects" component= { ProjectPage } />
              <Route exact path= "/skills" component= { SkillsPage } />

              <Route component= { NotFound404 } />
              {/* <Redirect to="/404" /> */}
            </Switch>

          </AnimatePresence>  
          
        </Suspense>
      </ThemeProvider>      
    </>
  )
}

export default App