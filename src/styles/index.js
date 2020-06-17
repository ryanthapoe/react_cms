
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
    width: '20%',
    maxWidth: '20%',
    overflowY: 'scroll',
    marginBottom: '0.5rem',
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
  },

}));

export default useStyles;