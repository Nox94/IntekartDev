import React from 'react';
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import {
  servicesBoxStyles,
  servicesSectionBoxStyles,
  servicesSectionHeaderStyles,
  // servicesSectionListBox,
  // servicesSectionPaperStyles,
  servicesSectionTextStyles,
  servicesAccordionSummaryStyles,
} from './servicesStyles.js';
import RoomRoundedIcon from '@mui/icons-material/RoomRounded';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import chinaPanorama from '../../images/china_panorama.png';
// import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
// import ApartmentIcon from '@mui/icons-material/Apartment';
// import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
// import {
//   digitalModelTextData,
//   listItemsData,
// } from '../../constants/constants.js';

function Services(props) {
  return (
    <Box sx={servicesBoxStyles}>
      <Box sx={servicesSectionBoxStyles}>
        <Typography
          variant={'h3'}
          sx={servicesSectionHeaderStyles}
          id={'services'}
        >
          Наши услуги:
        </Typography>
        {/* <img
          src={chinaPanorama}
          style={{ width: '100%', objectFit: 'contain', margin: '0 0 8% 0' }}
          alt='Изображение Китая.'
        /> */}
        <Accordion elevation={0}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='1'
            id='1'
            sx={servicesAccordionSummaryStyles}
          >
            <Typography>Создание цифровых моделей местности</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List variant={'body1'} sx={servicesSectionTextStyles}>
              <ListItem>
                <ListItemIcon>
                  <RoomRoundedIcon fontSize={'large'} />
                </ListItemIcon>
                <ListItemText>
                  2D и 3D региональных и городских моделей для планирования и
                  оптимизации беспроводных сетей связи, использующих технологии
                  GSM, CDMA, UMTS/WCDMA, WiMAX;
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <RoomRoundedIcon fontSize={'large'} />
                </ListItemIcon>
                <ListItemText>
                  3D цифровых моделей местности для тренажёрных комплексов
                  различного назначения.
                </ListItemText>
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>
        <Accordion elevation={0}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='2'
            id='2'
            sx={servicesAccordionSummaryStyles}
          >
            <Typography>
              Создание картографических баз данных различного назначения
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion elevation={0}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='3'
            id='3'
            sx={servicesAccordionSummaryStyles}
          >
            <Typography>Разработка ГИС систем различного назначения</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
}

export default Services;
