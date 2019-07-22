import React from 'react';
import PropTypes from 'prop-types';
import { Card, Table } from 'react-bootstrap';
import '../../../node_modules/react-vis/dist/style.css';
import LargeButton from '../LargeButton';

class MainTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { title, subTitle, approval } = this.props;

    return (
      <Card style={{ width: "100%" }}>
        <Card.Body>
          <h4>{title}</h4>
          <p>{subTitle}</p>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
                {approval ? <th /> : null}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                {approval ? (
                  <td className="d-flex justify-content-center">
                    <LargeButton text="Edit" classStyle="px-4 greyButton" onClick={f => f} />
                    <LargeButton text="Delete" classStyle="px-4 ml-3 redButton" onClick={f => f} />
                  </td>
                ) : null}
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                {approval ? (
                  <td className="d-flex justify-content-center">
                    <LargeButton text="Edit" classStyle="px-4 greyButton" onClick={f => f} />
                    <LargeButton text="Delete" classStyle="px-4 ml-3 redButton" onClick={f => f} />
                  </td>
                ) : null}
              </tr>
              <tr>
                <td>3</td>
                <td>Larry the Bird</td>
                <td>@twitter</td>
                <td>@fat</td>
                {approval ? (
                  <td className="d-flex justify-content-center">
                    <LargeButton text="Edit" classStyle="px-4 greyButton" onClick={f => f} />
                    <LargeButton text="Delete" classStyle="px-4 ml-3 redButton" onClick={f => f} />
                  </td>
                ) : null}
              </tr>
              <tr>
                <td>4</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                {approval ? (
                  <td className="d-flex justify-content-center">
                    <LargeButton text="Edit" classStyle="px-4 greyButton" onClick={f => f} />
                    <LargeButton text="Delete" classStyle="px-4 ml-3 redButton" onClick={f => f} />
                  </td>
                ) : null}
              </tr>
              <tr>
                <td>5</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                {approval ? (
                  <td className="d-flex justify-content-center">
                    <LargeButton text="Edit" classStyle="px-4 greyButton" onClick={f => f} />
                    <LargeButton text="Delete" classStyle="px-4 ml-3 redButton" onClick={f => f} />
                  </td>
                ) : null}
              </tr>
              <tr>
                <td>6</td>
                <td>Larry the Bird</td>
                <td>@twitter</td>
                <td>@fat</td>
                {approval ? (
                  <td className="d-flex justify-content-center">
                    <LargeButton text="Edit" classStyle="px-4 greyButton" onClick={f => f} />
                    <LargeButton text="Delete" classStyle="px-4 ml-3 redButton" onClick={f => f} />
                  </td>
                ) : null}
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
  subTitle: '',
};

MainTable.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  approval: PropTypes.bool.isRequired
};

export default MainTable;
