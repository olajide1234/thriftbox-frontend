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
    const { title, subTitle, approval, data } = this.props;

    return (
      <Card style={{ width: "100%" }}>
        <Card.Body>
          <h4>{title}</h4>
          <p>{subTitle}</p>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>S/N</th>
                <th>Date</th>
                <th>Amount</th>
                <th>Is entry voided ?</th>
                <th>Void reason</th>
                {approval ? <th /> : null}
              </tr>
            </thead>
            <tbody>
              {data.map((entry, index) => <tr>
                <td>{index + 1}</td>
                <td>{`${new Date(entry.timestamp)}`}</td>
                <td>{`${entry.currency} ${entry.debit - entry.credit}`}</td>
                <td>{entry.voided ? entry.voided : 'No'}</td>
                <td>{entry.voidReason ? entry.voidReason : 'N/A'}</td>
                {approval ? (
                  <td className="d-flex justify-content-center">
                    <LargeButton text="Edit" classStyle="px-4 greyButton" onClick={f => f} />
                    <LargeButton text="Delete" classStyle="px-4 ml-3 redButton" onClick={f => f} />
                  </td>
                ) : null}
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
