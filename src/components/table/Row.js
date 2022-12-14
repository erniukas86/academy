
import * as React from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { Button } from '@mui/material';
import { useContext } from 'react';
import { AuthContext } from '../../App';

export default function Row({item}) {
console.log('RENDER: ROW');

const {userName, setUserName} = useContext(AuthContext);
  return (
        <TableRow
            key={item.id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            {Object.values(item).map(value => <TableCell>{value}</TableCell>)}
            {userName && <TableCell><Button onClick={() => setUserName(null)}>Log Out</Button></TableCell>}
        </TableRow>
  );
}