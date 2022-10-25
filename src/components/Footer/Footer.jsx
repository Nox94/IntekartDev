import React from 'react';
import { Box, Typography } from '@mui/material';
import {
  footerContainerStyles,
  footerCopyrightStyles,
} from './footerStyles.js';

function Footer() {
  return (
    <Box sx={footerContainerStyles}>
      <Typography variant='body2' sx={footerCopyrightStyles}>
        &#169;Интэкарт 2005-2022
      </Typography>
    </Box>
  );
}

export default Footer;
