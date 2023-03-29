import {useEffect,useState} from 'react';

import {Link} from 'react-router-dom';

import {Table, TableHead, TableBody, TableRow,TableCell,styled, Button} from '@mui/material';

import {getUsers,deleteUser} from '../service/api';
const StyledTable=styled(Table)`
width:90%;
margin: 50px auto 0 auto;
`
const THead=styled(TableRow)`
background:#000000;
& > th{
  color:#fff;
  font-size:20px;
}
`;

const TBody=styled(TableRow)`
& > td{
 
  font-size:20px;
}
`


const AllUsers = () => {
const [users, setUsers]= useState([]);
  useEffect(()=>{
getAllUsers();
  },[]);


  
const getAllUsers=async()=>{
  let response= await getUsers();
  setUsers(response.data); 
}

const deleteUserData = async (id) => {
  await deleteUser(id);
  getAllUsers();
}
// creating table for customer details

  return (
  <StyledTable>
    <TableHead>
<TableRow>
 
  <TableCell>
    Name 
  </TableCell>
  <TableCell>
    Username
  </TableCell>
  <TableCell>
   Email
  </TableCell>
  <TableCell>
    Phone
  </TableCell>
  <TableCell>
  </TableCell>
</TableRow>
    </TableHead>
    <TableBody>
      {
        users.map(user=>(
          <TBody key={user._id}>
           
            
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.username}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.phone}</TableCell>
            <TableCell>
              <Button variant="contained" style={{marginRight:10}} component={Link} to={`/edit/${user._id}`}>Edit</Button>{/* change it to user.id to use JSON Server */}


              <Button variant="contained" color="secondary" onClick ={()=>deleteUserData(user._id)}>Delete</Button>{/* change it to user.id to use JSON Server */}
             

            </TableCell>

            
          </TBody>

        ))
      }

    </TableBody>
  </StyledTable>
  )
}

export default AllUsers;
