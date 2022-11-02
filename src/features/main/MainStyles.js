// import draft1 from '../../images/draft_1.jpg';
// import draft2 from '../../images/draft2.jpg';
// import draft3 from '../../images/draft3.jpg';
import draft4 from '../../images/draft4.png';
// import draft5 from '../../images/draft5.jpg';

export const mainBoxStyles = (theme) => ({
  width: '100%',
  maxWidth: '1280px',
  padding: '8% 0 5% 0',
  alignSelf: 'center',
  // outline: '1px solid red',
  margin: '0 auto',
  backgroundImage: `url(${draft4})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: '150% 45%',
  backgroundSize: '75%',
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
  fontWeight: '600',
  textTransform: 'uppercase',
  // margin: '0 0 0 10%',
  position: 'relative',
  zIndex: '50',
  fontFamily: 'Arimo, sans-serif',
  [theme.breakpoints.up('xxl')]: {
    // margin: '0 0 0 5%',
    padding: '0 0 20% 0',
  },
  [theme.breakpoints.down('xxl')]: {
    // margin: '0 0 0 5%',
    padding: '0 0 10% 0',
  },
  [theme.breakpoints.down('xl')]: {
    padding: '0 0 15% 0',
  },
  [theme.breakpoints.down('md')]: {
    padding: '0 0 15% 5%',
  },
});
