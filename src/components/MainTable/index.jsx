import React from 'react';
import PropTypes from 'prop-types';
import { Card, Table } from 'react-bootstrap';
import '../../../node_modules/react-vis/dist/style.css';

class MainTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { title } = this.props;

    return (
      <Card style={{ width: "100%" }}>
        <Card.Body>
          <Card.Title><h4>{title}</h4></Card.Title>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <td>3</td>
                <td colSpan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <td>6</td>
                <td colSpan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </Table>
          <div className="d-flex justify-content-end">
            <button>Previous</button>
            <button>Next</button>
          </div>
        </Card.Body>
      </Card>
    );
  }
}

MainTable.defaultProps = {
  title: '',
};

MainTable.propTypes = {
  title: PropTypes.string
};

export default MainTable;
