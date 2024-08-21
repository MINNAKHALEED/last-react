
import './App.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";

import LayoutPage from './pages/LayoutPage.jsx';
import CollectionPage from './pages/CollectionPage';
import MenPage from './pages/MenPage';
import WomenPage from './pages/WomenPage';
import AboutPage from './pages/AboutPage.jsx';
import ContactPage from './pages/ContactPage';


import ProductPage from './pages/ProductPage';




function App() {


  return (
    <div className="main">
    







    <BrowserRouter>
   <Routes>

<Route path="/" element={<LayoutPage/>}>
    <Route path="/CollectionPage" element={<CollectionPage/>}  />
   <Route path="/MenPage" element={<MenPage/>} />
   <Route path="/WomenPage" element={<WomenPage/>} />
   <Route path="AboutPage" element={<AboutPage/>} /> 
   <Route path="/ContactPage" element={<ContactPage/>} />
   <Route path="/ProductPage/:id" element={<ProductPage/>} />
</Route>
  </Routes>
  </BrowserRouter>




    </div>
  )
}

export default App
