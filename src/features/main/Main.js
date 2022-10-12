import React from 'react';
import { Box, Typography } from '@mui/material';
import { mainBoxStyles, mainHeaderStyles } from './MainStyles.js';

const Main = () => {
  return (
    <Box sx={mainBoxStyles}>
      <Typography variant={'h1'} sx={mainHeaderStyles}>
        инновационные технологии электронных карт
      </Typography>
    </Box>
  );
};

export default Main;
