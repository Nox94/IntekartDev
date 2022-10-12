// import earthImage2 from '../../images/earth_2.png';
// import earthImage1 from '../../images/earth_1.png';
// import earthImage3 from '../../images/earth_3.png';
// import earthImage4 from '../../images/earth_4.png';
// import earthImage5 from '../../images/earth_5.png';
import earthImage6 from '../../images/earth_6.png';

export const mainBoxStyles = (theme) => ({
  width: '100%',
  maxWidth: '1440px',
  padding: '8% 0 5% 0',
  alignSelf: 'center',
  // outline: '1px solid red',
  margin: '0 auto',
  backgroundImage: `url(${earthImage6})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'right center',
  backgroundSize: '60%',
  display: 'flex',
  alignItems: 'top',
  boxSizing: 'border-box',
  [theme.breakpoints.up('xxl')]: {
    padding: '10% 0 0 0',
  },
  [theme.breakpoints.down('xxl')]: {
    padding: '10% 0 5% 0',
  },
  [theme.breakpoints.down('xl')]: {
    padding: '10% 0 0 0',
  },
  [theme.breakpoints.down('lg')]: {
    padding: '15% 0 0 0',
  },
});

export const mainHeaderStyles = (theme) => ({
  maxWidth: '700px',
  color: 'rgb(10 77 96)',
  fontWeight: '500',
  textTransform: 'uppercase',
  margin: '0 0 0 10%',
  position: 'relative',
  zIndex: '50',
  [theme.breakpoints.up('xxl')]: {
    margin: '0 0 0 5%',
    padding: '0 0 20% 0',
  },
  [theme.breakpoints.down('xxl')]: {
    margin: '0 0 0 5%',
    padding: '0 0 10% 0',
  },
  [theme.breakpoints.down('xl')]: {
    padding: '0 0 15% 0',
  },
});
