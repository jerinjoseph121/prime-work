import Header from "./components/Header/Header";
import SidePanel from "./components/SidePanel/SidePanel";
import Body from "./components/Body/Body";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="row no-gutters main-body">
        <div className="col-4">
          <SidePanel />
        </div>
        <div className="col-8">
          <Body />
        </div>
      </div>
    </div>
  );
}

export default App;
