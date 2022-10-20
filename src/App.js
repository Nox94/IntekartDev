import React from 'react';
import Main from './features/main/Main.js';
import Header from './components/Header/index.js';
import { Box } from '@mui/material';
import Services from './features/services/index.js';
// import Projects from './features/projects/index.js';
import About from './features/about/index.js';
import Contacts from './features/contacts/index.js';
import { appBoxStyles } from './AppStyles.js';
import PartnersMonotone from './features/partners/PartnersMonotone';

function App() {
  return (
    <Box sx={appBoxStyles}>
      <Header />
      <Main />
      <PartnersMonotone />
      <About />
      {/* <Partners /> */}
      <Services />
      {/*<Projects />*/}
      <Contacts />
    </Box>
  );
}

export default App;
