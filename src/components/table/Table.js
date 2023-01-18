
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Head from './Head';
import Row from './Row';
import withLoading from '../../HOCs/withLoading';

function BasicTable({data}) {
    console.log('RENDER: BasicTable');

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <Head titles={Object.keys(data[0] || {})}></Head>
        <TableBody>
          {data.map(item => <Row item={item}></Row>)}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default withLoading(BasicTable);