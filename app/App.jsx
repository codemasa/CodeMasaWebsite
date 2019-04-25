import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { GlobalStyles } from './styles.js';
import importComponent from 'react-imported-component';

import Landing from './pages/Landing.jsx';
import Home from './pages/Home.jsx';
import LoadingComponent from './pages/Loading';
import ErrorComponent from './pages/Error';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

const About = importComponent(() => import("./pages/About"), {
  LoadingComponent,
  ErrorComponent
});
const Projects = importComponent(() => import("./pages/Projects"), {
  LoadingComponent,
  ErrorComponent
});

const App = () => (
  <React.Fragment>
    <GlobalStyles />
    <Header/>
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/home" render={() => <Home />} />
      <Route exact path="/about" render={() => <About />} />
      <Route exact path="/projects" render={() => <Projects />} />
      <Redirect to="/" />
    </Switch>
    <Footer/>
  </React.Fragment>
)
export default App
