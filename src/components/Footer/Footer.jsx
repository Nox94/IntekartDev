import React from 'react';
import { Box, Typography } from '@mui/material';
import { footerContainerStyles } from './footerStyles.js';

function Footer() {
  return (
    <Box sx={footerContainerStyles}>
      <Typography variant='body2'>&#169; Интэкарт 2022</Typography>
    </Box>
  );
}

export default Footer;
