import React from 'react';
import PropTypes from 'prop-types';
import { Card, Table } from 'react-bootstrap';
import '../../../node_modules/react-vis/dist/style.css';

function MemberTable({ title, subTitle, data }) {


  return (
    <Card style={{ width: "100%" }}>
      <Card.Body>
        <h4>{title}</h4>
        <p>{subTitle}</p>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>S/N</th>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Email</th>
              <th>Member ID</th>
              <th>Join date</th>
              <th>Next savings day</th>
              <th>Next savings amount</th>
              <th>Position</th>
              <th>Phone</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((entry, index) => <tr key={entry.id}>
              <td>{index + 1}</td>
              <td>{entry.firstName}</td>
              <td>{entry.lastName}</td>
              <td>{entry.email}</td>
              <td>{entry.memberId}</td>
              <td>{entry.joinDate}</td>
              <td>{entry.nextSavingsDate}</td>
              <td>{entry.nextSavingsAmount}</td>
              <td>{entry.position}</td>
              <td>{entry.phone}</td>
              <td>{entry.status}</td>
            </tr>)}
          </tbody>
        </Table>
        {/* <div className="d-flex justify-content-end">
            <button>Previous</button>
            <button>Next</button>
          </div> */}
      </Card.Body>
    </Card>
  );
}

MemberTable.defaultProps = {
  title: '',
  subTitle: '',
};

MemberTable.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  approval: PropTypes.bool.isRequired
};

export default MemberTable;
