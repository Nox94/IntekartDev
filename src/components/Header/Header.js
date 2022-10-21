import React from 'react';
import {
  AppBar,
  Box,
  Container,
  Link,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';
// import { NavLink } from 'react-router-dom';
import {
  headerAppBarStyles,
  headerCompanyNameStyles,
  headerToolbarBoxStyles,
  headerToolbarStyles,
  navLinkStyles,
  headerLogoStyles,
} from './HeaderStyles.js';
import { useLocation } from 'react-router';
import logo from '../../images/intekart_logo.png';

const Header = () => {
  const location = useLocation();
  return (
    <AppBar
      position={'static'}
      color='transparent'
      enableColorOnDark
      elevation={0}
      sx={headerAppBarStyles}
    >
      <Container maxWidth={'xl'}>
        <Toolbar sx={headerToolbarStyles}>
          <Box sx={headerToolbarBoxStyles}>
            <Box component={'img'} src={logo} sx={headerLogoStyles} />
            <Typography
              variant='h6'
              noWrap
              component='a'
              href='/'
              sx={headerCompanyNameStyles}
            >
              ИНТЭ<span style={{ color: '#035973' }}>КАРТ</span>
            </Typography>
          </Box>
          <Stack
            spacing={{ xs: 6, sm: 8, md: 10, xl: 12 }}
            direction={'row'}
            alignItems={'center'}
            alignSelf={'center'}
          >
            <Typography textAlign='center'>
              <Link href={'#about'} style={navLinkStyles}>
                {'о нас'}
              </Link>
            </Typography>
            <Typography textAlign='center'>
              <Link href={'#services'} style={navLinkStyles}>
                {'услуги'}
              </Link>
            </Typography>
            {/*<Typography textAlign='center'>*/}
            {/*  <NavLink to={'/projects'} style={navLinkStyles}>*/}
            {/*    {'проекты'}*/}
            {/*  </NavLink>*/}
            {/*</Typography>*/}
            <Typography textAlign='center'>
              <Link href={'#contacts'} style={navLinkStyles}>
                {'контакты'}
              </Link>
            </Typography>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
