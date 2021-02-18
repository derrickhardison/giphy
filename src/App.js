import "./App.css";
import Random from "./Containers/Random/Random";
import Search from "./Containers/Search/Search";
import Trending from "./Containers/Trending/Trending";
import { HashRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Random} />
        <Route path="/trending" component={Trending} />
        <Route path="/search" component={Search} />
      </Router>
    </div>
  );
}

export default App;
