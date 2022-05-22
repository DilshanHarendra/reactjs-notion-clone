import './App.css';
import './assets/main.css';
import DefaultLayout from "./layout/DefaultLayout";
import {Routes, Route, } from "react-router-dom";
import Home from "./pages/home/Home";
function App() {
  return (<Routes>
          <Route path="/" element={<DefaultLayout />}>
              <Route index element={<Home />} />
          </Route>
      </Routes>


  );
}

export default App;
