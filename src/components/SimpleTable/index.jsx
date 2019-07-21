import React from 'react';
import PropTypes from 'prop-types';
import { Card, Table } from 'react-bootstrap';
import '../../../node_modules/react-vis/dist/style.css';

class SimpleTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { title, subTitle } = this.props;

    return (
      <Card style={{ width: "100%", border: "none" }}>
        <Card.Body>
          <h4>{title}</h4>
          <p>{subTitle}</p>
          <Table striped borderless hover>
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
                <td>Larry the Bird</td>
                <td>@twitter</td>
                <td>@fat</td>
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
                <td>Larry the Bird</td>
                <td>@twitter</td>
                <td>@fat</td>
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

SimpleTable.defaultProps = {
  title: '',
  subTitle: '',
};

SimpleTable.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string
};

export default SimpleTable;
