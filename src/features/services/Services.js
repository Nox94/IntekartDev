import React from 'react';
import {
  Box,
  // List,
  // ListItem,
  // ListItemIcon,
  // ListItemText,
  Typography,
  Card,
  CardMedia,
  CardActionArea,
  CardContent,
} from '@mui/material';
import {
  servicesBoxStyles,
  servicesSectionBoxStyles,
  servicesSectionHeaderStyles,
  servicesCardStyles,
  servicesCardTextStyles,
  // servicesSectionListBox,
  // servicesSectionPaperStyles,
  // servicesSectionTextStyles,
  // servicesAccordionSummaryStyles,
} from './servicesStyles.js';
// import RoomRoundedIcon from '@mui/icons-material/RoomRounded';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import chinaPanorama from '../../images/china_panorama.png';
import DigModImg from '../../images/digital_model.jpg';
import mapDB from '../../images/map_DB.jpg';
import gisSystem from '../../images/gis-systems.png';

function Services() {
  return (
    <Box sx={servicesBoxStyles}>
      <Typography
        variant={'h3'}
        sx={servicesSectionHeaderStyles}
        id={'services'}
      >
        Наши услуги
      </Typography>
      <Box sx={servicesSectionBoxStyles}>
        {/* <img
          src={chinaPanorama}
          style={{ width: '100%', objectFit: 'contain', margin: '0 0 8% 0' }}
          alt='Изображение Китая.'
        /> */}
        <Card sx={servicesCardStyles}>
          <CardActionArea>
            <CardMedia
              component='img'
              height='160'
              image={DigModImg}
              alt='green iguana'
            />
            <CardContent>
              <Typography
                gutterBottom
                variant='subtitle1'
                component='div'
                sx={servicesCardTextStyles}
              >
                Создание цифровых моделей местности
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={servicesCardStyles}>
          <CardActionArea>
            <CardMedia
              component='img'
              height='160'
              image={mapDB}
              alt='green iguana'
            />
            <CardContent>
              <Typography
                gutterBottom
                variant='subtitle1'
                component='div'
                sx={servicesCardTextStyles}
              >
                Создание картографических баз данных различного назначения
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={servicesCardStyles}>
          <CardActionArea>
            <CardMedia
              component='img'
              height='160'
              image={gisSystem}
              alt='green iguana'
            />
            <CardContent>
              <Typography
                gutterBottom
                variant='subtitle1'
                component='div'
                sx={servicesCardTextStyles}
              >
                Разработка ГИС систем различного назначения
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card sx={servicesCardStyles}>
          <CardActionArea>
            <CardMedia
              component='img'
              height='160'
              image={DigModImg}
              alt='green iguana'
            />
            <CardContent>
              <Typography
                gutterBottom
                variant='subtitle1'
                component='div'
                sx={servicesCardTextStyles}
              >
                Создание цифровых моделей местности
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={servicesCardStyles}>
          <CardActionArea>
            <CardMedia
              component='img'
              height='160'
              image={mapDB}
              alt='green iguana'
            />
            <CardContent>
              <Typography
                gutterBottom
                variant='subtitle1'
                component='div'
                sx={servicesCardTextStyles}
              >
                Создание картографических баз данных различного назначения
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={servicesCardStyles}>
          <CardActionArea>
            <CardMedia
              component='img'
              height='160'
              image={gisSystem}
              alt='green iguana'
            />
            <CardContent>
              <Typography
                gutterBottom
                variant='subtitle1'
                component='div'
                sx={servicesCardTextStyles}
              >
                Разработка ГИС систем различного назначения
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        {/* <Accordion elevation={0}>
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
        </Accordion> */}
      </Box>
    </Box>
  );
}

export default Services;
