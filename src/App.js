import "./App.css";
import Random from "./Containers/Random/Random";
import Search from "./Containers/Search/Search";
import Trending from "./Containers/Trending/Trending";

function App() {
  return (
    <div className="App">
      <Random />
      <Trending />
      <Search />
    </div>
  );
}

export default App;
