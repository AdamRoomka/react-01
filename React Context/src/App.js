import './App.css';
import Navigation from './components/Navigation';
import { Section } from './components/Section';
import Main from './components/Main';
import Footer from './components/Footer';
import { Route, Switch } from "react-router-dom";

function App() {

  return (
    <div>
      <Navigation />
      <Section />
      <Switch>
        <Route exact path="/" component={Main} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

