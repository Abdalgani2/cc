import Typography from '@mui/material/Typography';
import GavelIcon from '@mui/icons-material/Gavel';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import './styles.css'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../admin/logo.svg';



const theme = createTheme({
  palette: {
    primary: {
      main: '#8D8DAA',
    }
  },

});



function Nav(props) {

  let token = localStorage.getItem("auth-token");
  const navigate = useNavigate();
  const logout = () => {
    localStorage.setItem("auth-token", "");
    window.location.reload();
  };
  const redirect = () => {
    navigate('/signIn')
  };
  const addItem = () =>{
    navigate('/addItem');
  };


  return (
    <ThemeProvider theme={theme}>
      <nav className={'nav-v1'}>

        <Box className={'classes.dis'}
        >
          <Box className='navLogo' >
            <Logo className='logo'/>
            {/* <Typography variant='h6' component="h3" className='logo-title'>CIRCLE CONNECT</Typography> */}
          </Box>
          {token && (
                        <Box className={'classes.addItem'}> <Button variant="contained" onClick={addItem}>Add Item</Button>
                        </Box>
                    )}
          <Box className={'classes.navButton'}>
            {token ? <Button variant="contained" onClick={logout}><Link to="/" style={{ textDecoration: 'none' ,color:'white'}}>Sign Out</Link></Button> : " "}
          </Box>
        </Box>


      </nav>
    </ThemeProvider>
  );
}

export default Nav;
