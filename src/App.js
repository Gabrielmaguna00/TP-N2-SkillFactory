import { Routes, Route, BrowserRouter } from "react-router-dom";
import Api from "./components/api";
import Form from "./components/form";
import Home from "./components/home";
import User from "./components/users";
// import "./App.css"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/users" element={<User />} />
          <Route exact path="/rick-morty" element={<Api />} />
          <Route exact path="/form" element={<Form />} />
        </Routes>
      </BrowserRouter>
    </>
  )
};

export default App;
