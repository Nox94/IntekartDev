import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import {
  mainBoxStyles,
  mainHeaderStyles,
  mainImageStyles,
} from './MainStyles.js';
import mainImg from '../../images/earth_2.png';

const Main = () => {
  return (
    <Box sx={mainBoxStyles}>
      <Typography variant={'h1'} sx={mainHeaderStyles}>
        инновационные технологии электронных карт
      </Typography>
      <img src={mainImg} style={mainImageStyles} />
    </Box>
  );
};

export default Main;
