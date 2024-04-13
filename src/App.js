import React from 'react';
import AllRoute from './Layouts/router'

import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
    <AllRoute/>
          <ToastContainer/>
    </div>
  );
}

export default App;
