import './App.css';
import './assets/main.css';
import DefaultLayout from "./layout/DefaultLayout";
import {Routes, Route, } from "react-router-dom";
import Home from "./pages/home/Home";
function App() {
  return (<DefaultLayout>
          <Routes>
              <Route path="/" element={<Home />} />
          </Routes>
           </DefaultLayout>

  );
}

export default App;
