import React from 'react';
import { Box, Typography } from '@mui/material';
import {
  partnersBoxStyles,
  partnersContainerStyles,
  // partnersHeaderStyles,
  partnersInnerContainerStyles,
  partnersLogoStyles,
  partnersSubtitleStyles,
  partnersTradeMarkStyles,
  partnersSmallerLogoStyles,
} from './partnersStyles';
import instKomLogo from '../../images/mono-logo/institut_kom.png';
import konstLogo from '../../images/mono-logo/konst_logo.png';
import kronLogo from '../../images/mono-logo/kron_mono.png';
import megaLogo from '../../images/mono-logo/mega_logo_mono.png';
// import naviLogo from '../../images/mono-logo/navikom_logo.png';
import informLogo from '../../images/mono-logo/informatika_logo.png';
import rpkbLogo from '../../images/mono-logo/rpkb_logo.png';
import sukhoiLogo from '../../images/mono-logo/Suchoi_logo.png';
import panoramaLogo from '../../images/mono-logo/panorama_logo.png';

function PartnersMonotone() {
  return (
    <Box sx={partnersContainerStyles}>
      <Box sx={partnersInnerContainerStyles}>
        <Box sx={partnersBoxStyles}>
          <Box
            component={'img'}
            src={instKomLogo}
            sx={partnersLogoStyles}
            alt='Логотип Институт телекоммуникаций.'
          />
        </Box>

        <Box sx={partnersBoxStyles}>
          <Box
            component={'img'}
            src={kronLogo}
            sx={partnersLogoStyles}
            alt='Логотип Кронштадт.'
          />
        </Box>

        <Box sx={partnersBoxStyles}>
          <Box
            component={'img'}
            src={konstLogo}
            sx={partnersLogoStyles}
            alt='Логотип Константа-дизайн.'
          />
        </Box>

        <Box sx={partnersBoxStyles}>
          <Box
            component={'img'}
            src={megaLogo}
            sx={partnersLogoStyles}
            alt='Логотип Мегафон.'
          />
        </Box>

        <Box sx={partnersBoxStyles}>
          <Box
            component={'img'}
            src={sukhoiLogo}
            sx={partnersSmallerLogoStyles}
            alt='Логотип Сухой.'
          />
        </Box>

        <Box sx={partnersBoxStyles}>
          {/* <img src={naviLogo} style={partnersLogoStyles} alt='Логотип Навиком.' /> */}
          <Typography variant={'subtitle1'} sx={partnersSubtitleStyles}>
            НАВИКОМ <span style={partnersTradeMarkStyles}>&#174;</span>
          </Typography>
        </Box>

        <Box sx={partnersBoxStyles}>
          <Box
            component={'img'}
            src={informLogo}
            sx={partnersSmallerLogoStyles}
            alt='Логотип Информатика.'
          />
        </Box>

        <Box sx={partnersBoxStyles}>
          <Box
            component={'img'}
            src={rpkbLogo}
            sx={partnersLogoStyles}
            alt='Логотип РПКБ.'
          />
        </Box>

        <Box sx={partnersBoxStyles}>
          <Box
            component={'img'}
            src={panoramaLogo}
            sx={partnersLogoStyles}
            alt='Логотип Панорама.'
          />
        </Box>
      </Box>
    </Box>
  );
}

export default PartnersMonotone;
