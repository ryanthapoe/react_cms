
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
  
  content: {
    marginTop: '5rem',
    marginLeft: '0.5rem',
    width: '78vw'
  },

  table: {
    marginTop: '0.5rem'
  },

  nested: {
    paddingLeft: '4px',
  },

  linkChild: {
    paddingLeft : '1rem'
  },

  loginForm: {
    margin: 0,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)'
  }

}));

export default useStyles;