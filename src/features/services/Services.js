import React from 'react';
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import {
  servicesBoxStyles,
  serviceSectionBoxStyles,
  servicesSectionHeaderStyles,
  // servicesSectionListBox,
  // servicesSectionPaperStyles,
  servicesSectionTextStyles,
} from './servicesStyles.js';
import RoomRoundedIcon from '@mui/icons-material/RoomRounded';
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
      <Box sx={serviceSectionBoxStyles}>
        <Typography
          variant={'h3'}
          sx={servicesSectionHeaderStyles}
          id={'services'}
        >
          Цифровые модели местности
        </Typography>
        <img
          src={chinaPanorama}
          style={{ width: '100%', objectFit: 'contain', margin: '0 0 8% 0' }}
        />
        <Typography variant={'h4'} sx={servicesSectionHeaderStyles}>
          Мы предлагаем свои услуги по созданию:
        </Typography>
        <List variant={'body1'} sx={servicesSectionTextStyles}>
          <ListItem>
            <ListItemIcon>
              <RoomRoundedIcon fontSize={'large'} />
            </ListItemIcon>
            <ListItemText>
              2D и 3D региональных и городских моделей для планирования и
              оптимизации беспроводных сетей связи, использующих технологии GSM,
              CDMA, UMTS/WCDMA, WiMAX;
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <RoomRoundedIcon fontSize={'large'} />
            </ListItemIcon>
            <ListItemText>
              3D цифровых моделей местности для тренажёрных комплексов
              различного назначения;
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <RoomRoundedIcon fontSize={'large'} />
            </ListItemIcon>
            <ListItemText>
              Картографической базы данных различного назначения.
            </ListItemText>
          </ListItem>
        </List>
        {/*  <Typography variant={'body1'} sx={servicesSectionTextStyles}>*/}
        {/*    Существующие технические и программные средства позволяют*/}
        {/*    просматривать и манипулировать с данными на экране дисплея, выполнять*/}
        {/*    расчеты для решения различных задач. Компактность хранения информации,*/}
        {/*    оперативность ее обновления эти качества обеспечивают широкий набор*/}
        {/*    возможностей применения цифровой карты. Компания &#34;Интэкарт&#34;*/}
        {/*    предлагает свои услуги для создания и обновления:*/}
        {/*  </Typography>*/}
        {/*  <List sx={servicesSectionListBox}>*/}
        {/*    {listItemsData.map((data, index) => (*/}
        {/*      <ListItem key={index}>*/}
        {/*        <ListItemIcon>*/}
        {/*          <FiberManualRecordIcon color={'primary'} />*/}
        {/*        </ListItemIcon>*/}
        {/*        <ListItemText primary={data} />*/}
        {/*      </ListItem>*/}
        {/*    ))}*/}
        {/*  </List>*/}
        {/*</Box>*/}
        {/*<Box sx={serviceSectionBoxStyles}>*/}
        {/*  <Typography variant={'h3'} sx={servicesSectionHeaderStyles}>*/}
        {/*    Цифровые модели местности*/}
        {/*  </Typography>*/}
        {/*  <List sx={servicesSectionListBox}>*/}
        {/*    {digitalModelTextData.map((data, index) => (*/}
        {/*      <ListItem key={index}>*/}
        {/*        <ListItemIcon>*/}
        {/*          <FiberManualRecordIcon color={'primary'} />*/}
        {/*        </ListItemIcon>*/}
        {/*        <ListItemText primary={data} />*/}
        {/*      </ListItem>*/}
        {/*    ))}*/}
        {/*  </List>*/}
        {/*</Box>*/}
        {/*<Box sx={serviceSectionBoxStyles()}>*/}
        {/*  <Typography variant={'h3'} sx={servicesSectionHeaderStyles}>*/}
        {/*    Подготовка цифровых карт к изданию{' '}*/}
        {/*  </Typography>*/}
        {/*  <Box sx={servicesSectionPaperStyles}>*/}
        {/*    <Paper variant={'outlined'} square sx={servicesSectionPaperStyles}>*/}
        {/*      <ApartmentIcon fontSize={'large'} sx={{ mb: '20px' }} />*/}
        {/*      <Typography variant={'body1'}>*/}
        {/*        {*/}
        {/*          'Создание и обновление адресных планов городов для навигационных карт'*/}
        {/*        }*/}
        {/*      </Typography>*/}
        {/*    </Paper>*/}
        {/*    <Paper variant={'outlined'} square sx={servicesSectionPaperStyles}>*/}
        {/*      <AddLocationAltIcon fontSize={'large'} sx={{ mb: '20px' }} />*/}
        {/*      <Typography variant={'body1'}>*/}
        {/*        {*/}
        {/*          'Создание и обновление адресных планов городов для различных поисковых географических систем и геопорталов'*/}
        {/*        }*/}
        {/*      </Typography>*/}
        {/*    </Paper>*/}
        {/*  </Box>*/}
      </Box>
    </Box>
  );
}

//
//   <Box
//   sx={{
//     width: '100%',
//     height: '100%',
//     padding: '5%',
//     boxSizing: 'border-box',
//     backgroundColor: (theme) =>
//       theme.palette.mode === 'dark' ? 'background.default' : '',
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'flex-start',
//   }}
// >
//   <Grid
//     container
//     columns={2}
//     spacing={2}
//     direction='row'
//     justifyContent='center'
//     alignItems='top'
//     sx={{
//       backgroundColor: (theme) =>
//         theme.palette.mode === 'dark' ? 'background.paper' : '',
//       borderRadius: '6px',
//       padding: '10px',
//       // maxWidth: '90%',
//     }}
//   >
//     <Grid item sm>
//       {/*<Img src={MapImage1} alt={'Изображение карты.'} />*/}
//     </Grid>
//     <Grid item sm container direction={'column'} justifyContent={'top'}>
//       <Typography variant={'body1'}>
//         Цифровая топографическая карта – замечательное средство
//         представления видимой информации о состояния местности, это набор
//         метрических, семантических и логических данных об участке земной
//         поверхности, хранящийся в файле определенного формата, доступном для
//         компьютера. Существующие технические и программные средства
//         позволяют просматривать и манипулировать с данными на экране
//         дисплея, выполнять расчеты для решения различных задач. Компактность
//         хранения информации, оперативность ее обновления эти качества
//         обеспечивают широкий набор возможностей применения цифровой карты.
//         Компания &apos;Интэкарт&apos; предлагает свои услуги для создания и
//         обновления:
//       </Typography>
//       <List dense>
//         {listItemsData.map((data, index) => (
//           <ListItem key={index}>
//             <ListItemIcon>
//               <ArrowRightIcon />
//             </ListItemIcon>
//             <ListItemText primary={data} />
//           </ListItem>
//         ))}
//       </List>
//     </Grid>
//   </Grid>
// </Box>
export default Services;
