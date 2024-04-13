import React from 'react';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Home from '../Home/Home'
import Introduction from '../Introduction'
import ApplicationForm from '../ApplicationForm'

const AllRoute = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/application-form' element={<ApplicationForm />} />
          <Route path='/introduction' element={<Introduction />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default AllRoute;
