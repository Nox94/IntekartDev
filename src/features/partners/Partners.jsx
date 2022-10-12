import React from 'react';
import { Box, Typography } from '@mui/material';
import {
  partnersBoxStyles,
  partnersContainerStyles,
  partnersHeaderStyles,
  partnersInnerContainerStyles,
  partnersLogoStyles,
  partnersSubtitleStyles,
} from './partnersStyles';
import instKomLogo from '../../images/institut_kom.png';
import konstLogo from '../../images/konst_logo.png';
import kronLogo from '../../images/kron_logo.svg';
import megaLogo from '../../images/megafonLogo.svg';
import naviLogo from '../../images/navikom_logo.png';
import informLogo from '../../images/informatika_logo.png';
import rpkbLogo from '../../images/rpkb_logo.png';
import sukhoiLogo from '../../images/Suchoi_logo.png';
import panoramaLogo from '../../images/panorama_logo.png';

const Partners = () => {
  return (
    <Box sx={partnersContainerStyles}>
      <Typography sx={partnersHeaderStyles} variant={'h3'}>
        Нас выбрали
      </Typography>

      <Box sx={partnersInnerContainerStyles}>
        <Box sx={partnersBoxStyles}>
          <img
            src={instKomLogo}
            style={partnersLogoStyles}
            alt='Логотип Институт телекоммуникаций.'
          />
          <Typography variant={'subtitle1'} sx={partnersSubtitleStyles}>
            ИНСТИТУТ ТЕЛЕКОММУНИКАЦИЙ
          </Typography>
        </Box>

        <Box sx={partnersBoxStyles}>
          <img
            src={konstLogo}
            style={partnersLogoStyles}
            alt='Логотип Константа-дизайн.'
          />
          <Typography variant={'subtitle1'} sx={partnersSubtitleStyles}>
            КОНСТАНТА-ДИЗАЙН
          </Typography>
        </Box>

        <Box sx={partnersBoxStyles}>
          <img
            src={kronLogo}
            style={partnersLogoStyles}
            alt='Логотип Кронштадт.'
          />
          <Typography variant={'subtitle1'} sx={partnersSubtitleStyles}>
            КРОНШТАДТ
          </Typography>
        </Box>

        <Box sx={partnersBoxStyles}>
          <img
            src={megaLogo}
            style={partnersLogoStyles}
            alt='Логотип Мегафон.'
          />
          <Typography variant={'subtitle1'} sx={partnersSubtitleStyles}>
            МЕГАФОН
          </Typography>
        </Box>

        <Box sx={partnersBoxStyles}>
          <img
            src={sukhoiLogo}
            style={partnersLogoStyles}
            alt='Логотип Сухой.'
          />
          <Typography variant={'subtitle1'} sx={partnersSubtitleStyles}>
            СУХОЙ
          </Typography>
        </Box>

        <Box sx={partnersBoxStyles}>
          <img
            src={naviLogo}
            style={partnersLogoStyles}
            alt='Логотип Навиком.'
          />
          <Typography variant={'subtitle1'} sx={partnersSubtitleStyles}>
            НАВИКОМ
          </Typography>
        </Box>

        <Box sx={partnersBoxStyles}>
          <img
            src={informLogo}
            style={partnersLogoStyles}
            alt='Логотип Информатика.'
          />
          <Typography variant={'subtitle1'} sx={partnersSubtitleStyles}>
            ИНФОРМАТИКА
          </Typography>
        </Box>

        <Box sx={partnersBoxStyles}>
          <img src={rpkbLogo} style={partnersLogoStyles} alt='Логотип РПКБ.' />
          <Typography variant={'subtitle1'} sx={partnersSubtitleStyles}>
            РПКБ
          </Typography>
        </Box>

        <Box sx={partnersBoxStyles}>
          <img
            src={panoramaLogo}
            style={partnersLogoStyles}
            alt='Логотип Панорама.'
          />
          <Typography variant={'subtitle1'} sx={partnersSubtitleStyles}>
            ПАНОРАМА
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Partners;
