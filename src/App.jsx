import c from "./App.module.css";
import Header from "./components/header/header";
import MainComp from "./components/mainComps/mainComp";
import RotatingDiv from "./components/mainComps/RotatingDiv/RotatingDiv";
import Backgound from "./components/backgroud/background";

function App() {
  return (
    <>
      <Backgound />
      <div>
        <Header />
        <div className={c.InfoDiv}>
          <div className={c.parent}>
            <RotatingDiv />
          </div>
          <MainComp />
        </div>
      </div>
    </>
  );
}

export default App;
