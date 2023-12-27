import React from 'react'
import { Route,  Routes } from 'react-router-dom';
import Navbar from './component/navbar';
import Deshbord from './component/Deshbord';
import PriviewId from './component/PriviewId';
import Forsage1 from './page/Forsage1';
import Forsage2 from './page/Forsage2';
import Forsage3 from './page/Forsage3';


const App = () => {
  return (
    <div>
      <React.Fragment>
        <PriviewId/>
        <Navbar />
        <Routes>
          <Route path="/" element={<Deshbord />} />
          <Route path="/Forsage_xxx" element={<Forsage1 />} />
          <Route path="/Forsage_xxx2" element={<Forsage2 />} />
          <Route path="/Forsage_xxx3" element={<Forsage3 />} />

        </Routes>
      </React.Fragment>
    </div>
  )
}

export default App
