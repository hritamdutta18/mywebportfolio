import { Route, Switch } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { lightTheme } from "./components/Themes"
import GlobalStyles from "./globalStyles"

// Components Imported
import Main from './components/Main'
import AboutPage from './components/AboutPage'
import ExperiencePage from './components/ExperiencePage'
import ProjectPage from './components/ProjectPage'
import SkillsPage from './components/SkillsPage'


function App() {
  return <>

  < GlobalStyles />

    <ThemeProvider theme= { lightTheme }>
      <Switch>
        <Route exact path= "/" component= { Main } />
        <Route exact path= "/about" component= { AboutPage } />
        <Route exact path= "/experience" component= { ExperiencePage } />
        <Route exact path= "/projects" component= { ProjectPage } />
        <Route exact path= "/skills" component= { SkillsPage } />
      </Switch>
    </ThemeProvider>
    
  </>
    
}

export default App

