

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import MainPage from "../pages/main-page/MainPage";
import SingleArticlePage from "../pages/singleArticlePage/SingleArticlePage";
import Page404 from "../pages/404";


function App() {

  return (
    <Router>
      <div className="App">
        <Routes>

          <Route  path="/:id" element={<SingleArticlePage/>} />
          <Route  path="/" element={<MainPage/>}/>
          <Route path="*" element={<Page404/>} />
        
        </Routes>
      </div>
    </Router>
  );
}

export default App;

