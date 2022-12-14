
import * as React from 'react';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

export default function Head({titles}) {
  return (
        <TableHead>
          <TableRow>
            {titles.map(title => <TableCell>{title}</TableCell>)}
          </TableRow>
        </TableHead>
  );
}