import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';
import '../../../node_modules/react-vis/dist/style.css';

class FsTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { title, subTitle } = this.props;

    return (
      <div className="mt-4">
        <h5 className="text-center border-bottom mb-2 pb-2">{title}</h5>
        <p>{subTitle}</p>
        <div className="d-flex justify-content-center">
          <Table style={{ width: "70%" }} borderless hover>
            <thead>
              <tr>
                <th>Income</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Savings income</td>
                <td>200,000</td>
              </tr>
              <tr>
                <td>General income</td>
                <td>300,000</td>
              </tr>
              <tr>
                <td>Other income</td>
                <td>400,000</td>
              </tr>
              <tr>
                <td>Miscellanous Income</td>
                <td>150,000</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}

FsTable.defaultProps = {
  title: '',
  subTitle: '',
};

FsTable.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string
};

export default FsTable;
