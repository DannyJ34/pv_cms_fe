import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/signin" element={<Signin />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;