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
import {
  headerAppBarStyles,
  headerCompanyNameStyles,
  headerToolbarBoxStyles,
  headerToolbarStyles,
  navLinkStyles,
  headerLogoStyles,
} from './HeaderStyles.js';
// import { useLocation } from 'react-router';
import logo from '../../images/intekart_logo.png';

const Header = () => {
  // const location = useLocation();
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
              href='/intekart'
              sx={headerCompanyNameStyles}
            >
              ИНТЭ<span style={{ color: '#035973' }}>КАРТ</span>
            </Typography>
          </Box>
          <Stack
            spacing={{ xxs: 2, xs: 4, sm: 6, md: 8, xl: 10, xxl: 12 }}
            direction={'row'}
            alignItems={'center'}
            alignSelf={'center'}
          >
            <Typography textAlign='center'>
              <Link href={'/intekart/#about'} style={navLinkStyles}>
                {'о нас'}
              </Link>
            </Typography>
            <Typography textAlign='center'>
              <Link href={'/intekart/#services'} style={navLinkStyles}>
                {'услуги'}
              </Link>
            </Typography>
            {/*<Typography textAlign='center'>*/}
            {/*  <NavLink to={'/projects'} style={navLinkStyles}>*/}
            {/*    {'проекты'}*/}
            {/*  </NavLink>*/}
            {/*</Typography>*/}
            <Typography textAlign='center'>
              <Link href={'/intekart/contacts'} style={navLinkStyles}>
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
