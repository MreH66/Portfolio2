import c from "./App.module.css";
import Header from "./components/header/header";
import MainComp from "./components/mainComps/mainComp";
import RotatingDiv from "./components/mainComps/RotatingDiv/RotatingDiv";

function App() {
  return (
    <>
      <div className={c.MainAppDiv}>
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
