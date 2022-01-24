import { Route, Switch, useLocation } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { lightTheme } from "./components/Themes"
import GlobalStyles from "./globalStyles"

// Page Components Imported
import Main from './components/Main'
import AboutPage from './components/AboutPage'
import ExpEduPage from './components/ExpEduPage'
import ProjectPage from './components/ProjectPage'
import SkillsPage from './components/SkillsPage'
import { AnimatePresence } from "framer-motion"
import SoundBar from "./subComponents/SoundBar"


function App() {

  const location= useLocation ();

  return(
    <>
      <GlobalStyles />

      <ThemeProvider theme= { lightTheme }>

        <SoundBar />

        {/* For framer-motion animation on page change */}
        <AnimatePresence exitBeforeEnter>
          <Switch location= {location} key= {location.pathname}>
            <Route exact path= "/" component= { Main } />
            <Route exact path= "/about" component= { AboutPage } />
            <Route exact path= "/experience-experience" component= { ExpEduPage } />
            <Route exact path= "/projects" component= { ProjectPage } />
            <Route exact path= "/skills" component= { SkillsPage } />
          </Switch>
        </AnimatePresence>  

      </ThemeProvider>      
    </>
  )
}

export default App

