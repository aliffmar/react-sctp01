import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Products from "./pages/Products"
import Create from "./pages/Create";
import Update from "./pages/Update";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <h1>Welcome to MamaShop</h1>
        <nav className="navbar navbar-expand-sm bg-light">

          <div className="container-fluid">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">Products</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">Add Products</Link>
              </li>
            </ul>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Products/>}/>
          <Route path="/products/" element={<Create/>}/>
          <Route path="/update/:id" element={<Update/>}/>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
