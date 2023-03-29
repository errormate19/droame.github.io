import {AppBar,Toolbar,styled} from '@mui/material';
import {NavLink} from 'react-router-dom';

const Header =styled(AppBar)`background:#111111`;

const Tabs=styled(NavLink)`font-size:20px;
margin-right:20px;
color:inherit;
text-decoration:none;`


//Navigation bar of the form to get All Customers and add Customer.
const NavBar = () => {
  return (
   <Header position ="static">
    <Toolbar>
      
<Tabs to='/all'>All customers</Tabs>
<Tabs to='/add'>Add customer</Tabs>
    </Toolbar>
   </Header>
  )
}

export default NavBar
