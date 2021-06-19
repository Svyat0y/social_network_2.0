import './App.css';
// import Login from "./Components/Login";
import Header from "./Components/Header/Header";
import Aside from "./Components/Aside/Aside";
import MainPage from "./Components/MainPage/MainPage";

const App = () => {

    // return (
    //     <Login/>
    // )

  return (
    <div className="App">
        <Header />
        <main className="main_wrapper">
            <Aside />
            <MainPage />
        </main>
    </div>
  );
}

export default App;
