import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
   return (
      <>
         <BrowserRouter>
            <NavBar />
            <Routes>
               <Route path="/" element={<ItemListContainer />} />
               <Route path="/test" element={<p>Este es un test</p>} />
               <Route path="/algo" element={<p>Aca va algo</p>} />
               <Route path="*" element={<p>404</p>} />
            </Routes>
         </BrowserRouter>
      </>
   );
}

export default App;
