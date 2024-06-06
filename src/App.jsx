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

/*
STA JOS TREBA 
--> 

FEATURE --> i mali problem je sto kada sam na telefonu i kliknem na neki od 
linkova "skills" ako je useru ekran skroz gore nece se nista desiti ako ne scroluje sam
tako da to treba da se uradi da scroll bude kada klikne na nesto

ikonica kad ides nazad sa projekta na listu je na telefonu u textu

kada bro scroll na telefonu imam neku crni div kao nzm sta je mozda onaj shadow div koji sam stavio!!! proveri
*/
