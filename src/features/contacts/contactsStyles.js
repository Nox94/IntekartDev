import pic from '../../images/pic1.png';

export const contactsSectionBoxStyles = {
  width: '100%',
  flexGrow: '1',
  padding: '5% 0 0 0',
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
  background:
    'linear-gradient(0deg, rgba(255,255,255,0) 80%, rgba(187,191,192,1) 100%)',
  boxSizing: 'border-box',
  overflow: 'hidden',
};

export const contactsInnerBoxStyles = {
  display: 'flex',
  width: '100%',
  maxWidth: '50%',
  justifyContent: 'space-between',
  flexDirection: 'column',
  // outline: '2px solid blue',
  backgroundImage: `url(${pic})`,
  backgroundSize: '70%',
  backgroundRepeat: 'no-repeat',
  backgroundColor: 'transparent',
  backgroundPosition: '100% 95%',
};

export const contactsHeaderStyles = {
  margin: '1em 0 2% 0',
  fontWeight: '800',
  color: 'secondary.dark',
};

export const contactsMapStyles = {
  width: '100%',
  flexBasis: '60%',
  outline: '2px solid green',
};

export const contactsTextStyles = { fontWeight: '600', color: 'primary.dark' };
