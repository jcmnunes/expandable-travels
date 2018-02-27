import React from 'react';
import { Grid, Table, Button } from 'react-bootstrap';

const data = [
  {
    name: 'Sergio',
    startDate: '2018-04-01',
    endDate: '2018-04-10',
    from: 'Coimbra',
    to: 'Porto',
    status: 'Cancelled'
  },
  {
    name: 'Sergio',
    startDate: '2018-04-01',
    endDate: '2018-04-10',
    from: 'Coimbra',
    to: 'Porto',
    status: 'Cancelled'
  },
  {
    name: 'Sergio',
    startDate: '2018-04-01',
    endDate: '2018-04-10',
    from: 'Coimbra',
    to: 'Porto',
    status: 'Booked'
  },
  {
    name: 'Sergio',
    startDate: '2018-04-01',
    endDate: '2018-04-10',
    from: 'Coimbra',
    to: 'Porto',
    status: 'Cancelled'
  }
];

const Actions = ({ status }) => {
  if (status === 'Booked') {
    return (
      <td>
        <Button bsStyle="link" bsSize="xsmall">
          CANCEL
        </Button>
        <Button bsStyle="link" bsSize="xsmall">
          EDIT
        </Button>
      </td>
    );
  }
  return <td />;
};

const TableRow = ({ data }) => (
  <tr>
    {Object.keys(data).map(key => <td key={key}>{data[key]}</td>)}
    <Actions status={data.status} />
  </tr>
);

const List = () => {
  return (
    <Grid>
      <Table striped bordered condensed hover responsive>
        <thead>
          <tr>
            <th>Name</th>
            <th>Start date</th>
            <th>End date</th>
            <th>From</th>
            <th>To</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <TableRow key={`key${index}`} data={row} />
          ))}
        </tbody>
      </Table>
    </Grid>
  );
};

export default List;
