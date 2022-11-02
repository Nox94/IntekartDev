export const aboutSectionBoxStyles = (theme) => ({
  width: '100%',
  maxWidth: '1280px',
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'stretch',
  alignItems: 'center',
  margin: '5% auto 0 auto',
  // padding: '0 5%',
  // outline: '1px solid blue',
  [theme.breakpoints.down('md')]: {
    padding: '0 5%',
    margin: '10% auto 0 auto',
  },
});

export const aboutContentBoxStyles = {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
};

export const aboutCardHeaderStyles = (theme) => ({
  mb: '10%',
  [theme.breakpoints.down('md')]: {
    margin: '0 0 5% 0',
  },
});
export const aboutCardTextStyles = { marginBottom: '20px' };
