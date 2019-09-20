import React from 'react';
import PropTypes from 'prop-types';
import { Card, Table } from 'react-bootstrap';
import '../../../node_modules/react-vis/dist/style.css';

function PromoTable({ title, subTitle, data }) {

  if (data.length < 1) {
    return <div className="mt-5">'There are currently no promo items'</div>
  }
  return (
    <Card style={{ width: "100%", border: "none" }}>
      <Card.Body>
        <h4>{title}</h4>
        <p>{subTitle}</p>
        <Table striped borderless hover>
          <thead>
            <tr>
              <th>S/N</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Description</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((data, index) => <tr>
              <td>{index + 1}</td>
              <td>{data.name}</td>
              <td>{data.quantity}</td>
              <td>{data.price}</td>
              <td>{data.description}</td>
              <td>{data.status}</td>
            </tr>)
            }
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

PromoTable.defaultProps = {
  title: '',
  subTitle: '',
};

PromoTable.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string
};

export default PromoTable;
