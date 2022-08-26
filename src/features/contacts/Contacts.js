import React from 'react';
import { Box, Link, Typography } from '@mui/material';
import {
  contactsHeaderStyles,
  contactsSectionBoxStyles,
  contactsTextStyles,
  mainInnerBoxStyles,
} from './contactsStyles.js';

function Contacts(props) {
  return (
    <Box sx={contactsSectionBoxStyles}>
      <Typography variant={'h4'} sx={contactsHeaderStyles} id={'contacts'}>
        Контакты
      </Typography>

      <Box sx={mainInnerBoxStyles}>
        <Box>
          <Typography variant={'h5'} sx={contactsHeaderStyles}>
            Телефон
          </Typography>
          <Typography variant={'body1'}>+7 903 682 0431</Typography>
        </Box>

        <Box>
          <Typography variant={'h5'} sx={contactsHeaderStyles}>
            Email
          </Typography>
          <Typography variant={'body1'}>intekart@intekart.ru</Typography>
        </Box>

        <Box>
          <Typography variant={'h5'} sx={contactsHeaderStyles}>
            Адрес
          </Typography>
          <Typography variant={'body1'}>
            141070, Россия, МО, г. Королев, Циолковского 27, офис 3
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Contacts;

{
  /*<Typography variant={'body1'} sx={contactsTextStyles}>*/
}
{
  /*  +7 (496) 514-29-56*/
}
{
  /*</Typography>*/
}
