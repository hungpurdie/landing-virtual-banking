import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages";
import SigninPage from "./pages/signin";
import { GlobalStyle } from "../styles/global-styles";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={SigninPage} exact />
      </Switch>
      <GlobalStyle />
    </Router>
  );
}

export default App;
