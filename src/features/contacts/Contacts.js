import React from 'react';
import { Box, Typography } from '@mui/material';
import {
  contactsHeaderStyles,
  contactsSectionBoxStyles,
  mainInnerBoxStyles,
} from './contactsStyles.js';

function Contacts(props) {
  return (
    <Box sx={contactsSectionBoxStyles}>
      <Typography variant={'h5'} sx={contactsHeaderStyles} id={'contacts'}>
        Контакты
      </Typography>

      <Box sx={mainInnerBoxStyles}>
        <Box>
          <Typography variant={'h6'} sx={contactsHeaderStyles}>
            Телефон
          </Typography>
          <Typography variant={'body2'}>+7 903 682 0431</Typography>
        </Box>

        <Box>
          <Typography variant={'h6'} sx={contactsHeaderStyles}>
            Email
          </Typography>
          <Typography variant={'body2'}>intekart@intekart.ru</Typography>
        </Box>

        <Box>
          <Typography variant={'h6'} sx={contactsHeaderStyles}>
            Адрес
          </Typography>
          <Typography variant={'body2'}>
            141070, Россия, МО, г. Королев, ул. Циолковского 27, офис 3
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Contacts;
