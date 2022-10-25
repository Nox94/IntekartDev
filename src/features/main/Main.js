import React from 'react';
import { Box, Typography } from '@mui/material';
import { mainBoxStyles, mainHeaderStyles } from './MainStyles.js';
import PartnersMonotone from '../partners/PartnersMonotone.jsx';
import About from '../about/About.jsx';
import Services from '../services/index.js';

function Main() {
  return (
    <>
      <Box sx={mainBoxStyles}>
        <Typography variant={'h1'} sx={mainHeaderStyles}>
          инновационные технологии электронных карт
        </Typography>
      </Box>
      <PartnersMonotone />
      <About />
      <Services />
    </>
  );
}

export default Main;
