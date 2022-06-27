import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { HomePage } from "./pages/home-page/home-page";
import { Header } from "./components/header";
import { GamePage } from "./pages/game-page";
import { store } from "./redux";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/app/:title" element={<GamePage />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
