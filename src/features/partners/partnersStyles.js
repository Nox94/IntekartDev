export const partnersContainerStyles = {
  display: 'flex',
  width: '100%',
  // maxWidth: '1280px',
  // margin: '5% auto 0 auto',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  // outline: '1px solid blue',
  // padding: '0.5em 10em',
  boxSizing: 'border-box',
  // backgroundColor: 'primary.dark',
  background:
    'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(119,122,123,1) 30%, rgba(119,122,123,1) 70%, rgba(255,255,255,0) 100%)',
  color: 'primary.main',
};

export const partnersHeaderStyles = {
  mb: '2%',
};

export const partnersInnerContainerStyles = (theme) => ({
  display: 'flex',
  margin: '0 auto',
  width: '70%',
  justifyContent: 'space-between',
  // outline: '1px solid blue',
  [theme.breakpoints.up('xxl')]: {
    width: '1440px',
  },
});

export const partnersBoxStyles = (theme) => ({
  display: 'flex',
  width: '10%',
  justifyContent: 'center',
  alignItems: 'center',
  // outline: '1px solid blue',
  [theme.breakpoints.down('lg')]: {
    width: '15%',
  },
});

export const partnersLogoStyles = (theme) => ({
  width: '50%',
  height: '50%',
  objectFit: 'contain',
  [theme.breakpoints.up('xxl')]: {
    width: '65%',
    height: '65%',
  },
  [theme.breakpoints.down('lg')]: {
    width: '80%',
    height: '80%',
  },
});

export const partnersSmallerLogoStyles = (theme) => ({
  width: '40%',
  height: '40%',
  objectFit: 'contain',
  [theme.breakpoints.up('xxl')]: {
    width: '50%',
    height: '50%',
  },
});

export const partnersSubtitleStyles = (theme) => ({
  textAlign: 'center',
  fontWeight: '600',
  color: 'primary.light',
  fontSize: '1.5em',
  [theme.breakpoints.down('lg')]: {
    fontSize: '1em',
  },
});

export const partnersTradeMarkStyles = {
  verticalAlign: 'super',
  fontSize: '0.5em',
};
