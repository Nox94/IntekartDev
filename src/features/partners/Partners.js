import React from 'react';
import { Box, Typography } from '@mui/material';
import {
  partnersBoxStyles,
  partnersContainerStyles,
  partnersHeaderStyles,
  partnersInnerContainerStyles,
  partnersLogoStyles,
} from './partnersStyles';
import instKomLogo from '../../images/institut_kom.png';
import konstLogo from '../../images/konst_logo.png';
import kronLogo from '../../images/kron_logo.svg';
import megaLogo from '../../images/megafonLogo.svg';
import naviLogo from '../../images/navikom_logo.png';
import informLogo from '../../images/informatika_logo.png';
import rpkbLogo from '../../images/rpkb_logo.png';
import sukhoiLogo from '../../images/Suchoi_logo.png';

const Partners = () => {
  return (
    <Box sx={partnersContainerStyles}>
      <Typography sx={partnersHeaderStyles} variant={'h3'}>
        Нас выбрали
      </Typography>

      <Box sx={partnersInnerContainerStyles}>
        <Box sx={partnersBoxStyles}>
          <img src={instKomLogo} style={partnersLogoStyles} />
          <Typography variant={'subtitle1'} sx={{ textAlign: 'center' }}>
            ИНСТИТУТ ТЕЛЕКОММУНИКАЦИЙ
          </Typography>
        </Box>

        <Box sx={partnersBoxStyles}>
          <img src={konstLogo} style={partnersLogoStyles} />
          <Typography variant={'subtitle1'}>КОНСТАНТА-ДИЗАЙН</Typography>
        </Box>

        <Box sx={partnersBoxStyles}>
          <img src={kronLogo} style={partnersLogoStyles} />
          <Typography variant={'subtitle1'}>КРОНШТАДТ</Typography>
        </Box>

        <Box sx={partnersBoxStyles}>
          <img src={megaLogo} style={partnersLogoStyles} />
          <Typography variant={'subtitle1'}>МЕГАФОН</Typography>
        </Box>

        <Box sx={partnersBoxStyles}>
          <img src={sukhoiLogo} style={partnersLogoStyles} />
          <Typography variant={'subtitle1'}>СУХОЙ</Typography>
        </Box>

        <Box sx={partnersBoxStyles}>
          <img src={naviLogo} style={partnersLogoStyles} />
          <Typography variant={'subtitle1'}>НАВИКОМ</Typography>
        </Box>

        <Box sx={partnersBoxStyles}>
          <img src={informLogo} style={partnersLogoStyles} />
          <Typography variant={'subtitle1'}>ИНФОРМАТИКА</Typography>
        </Box>

        <Box sx={partnersBoxStyles}>
          <img src={rpkbLogo} style={partnersLogoStyles} />
          <Typography variant={'subtitle1'}>РПКБ</Typography>
        </Box>

        {/*<Box*/}
        {/*  sx={partnersBoxStyles}*/}
        {/*  style={{ justifyContent: 'center', minWidth: 'fit-content' }}*/}
        {/*>*/}
        {/*  <Typography*/}
        {/*    variant={'subtitle1'}*/}
        {/*    style={{*/}
        {/*      textTransform: 'uppercase',*/}
        {/*      fontWeight: 'bold',*/}
        {/*    }}*/}
        {/*  >*/}
        {/*    НКС - Инжиниринг*/}
        {/*  </Typography>*/}
        {/*</Box>*/}
      </Box>
    </Box>
  );
};

export default Partners;
