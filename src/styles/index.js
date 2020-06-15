
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root : {
    display:'flex',
    height: '100vh'
  },

  a : {
    textDecoration: 'none',
  },

  sideNavList: {
    maxWidth: '20%',
    backgroundColor: theme.palette.background.paper,
    overflowY: 'scroll',
    marginBottom: '0.5rem',
  },
  sideNavSubHeader: {
    display:'flex'
  },
  subNav: {
    width: '80%',
    maxHeight: '17vh'
  },
  
  content: {
    marginTop: '5rem',
    marginLeft: '0.5rem'
  },

  table: {
    marginTop: '0.5rem'
  }
}));

export default useStyles;