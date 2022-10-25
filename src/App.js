import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './features/main/Main.js';
import Header from './components/Header/index.js';
import { Box } from '@mui/material';
import Footer from './components/Footer/index.js';
import Contacts from './features/contacts/Contacts.js';
import { appBoxStyles } from './AppStyles.js';

function App() {
  return (
    <Box sx={appBoxStyles}>
      <Header />
      <Routes>
        <Route path='/IntekartDev' element={<Main />} />
        <Route path='/IntekartDev/contacts' element={<Contacts />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
