import React from 'react';
import { Box, Typography } from '@mui/material';
import {
  contactsHeaderStyles,
  contactsSectionBoxStyles,
  contactsInnerBoxStyles,
  contactsTextStyles,
} from './contactsStyles.js';

function Contacts() {
  return (
    <Box sx={contactsSectionBoxStyles}>
      <Box sx={contactsInnerBoxStyles}>
        <Typography variant={'h3'} sx={contactsHeaderStyles} id={'contacts'}>
          Контакты
        </Typography>
        <Box>
          <Typography variant={'h4'} sx={contactsHeaderStyles}>
            Телефон
          </Typography>
          <Typography variant={'h6'} sx={contactsTextStyles}>
            +7 903 682 0431
          </Typography>
        </Box>

        <Box>
          <Typography variant={'h4'} sx={contactsHeaderStyles}>
            Email
          </Typography>
          <Typography variant={'h6'} sx={contactsTextStyles}>
            intekart@intekart.ru
          </Typography>
        </Box>

        <Box>
          <Typography variant={'h4'} sx={contactsHeaderStyles}>
            Адрес
          </Typography>
          <Typography variant={'h6'} sx={contactsTextStyles}>
            141070, Россия, МО, г. Королев, ул. Циолковского 27, офис 3
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Contacts;
