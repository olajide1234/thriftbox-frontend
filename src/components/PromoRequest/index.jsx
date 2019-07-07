import React from 'react';
import PropTypes from 'prop-types';
import { Card, Row, Form, Col, Table } from 'react-bootstrap';
import LargeButton from '../LargeButton';


class PromoRequest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    const { classStyle } = this.props;

    return (
      <Card className={classStyle} style={{ width: "100%" }}>
        <Card.Body>
          <div className="border-bottom">
            <span>
              <h3 className="no-buttom-margin">Promo items purchase</h3>
              <p>Use the options below to purchase promo items on loan</p>
            </span>
          </div>
          <Row className="mr-0 ml-0 d-flex justify-content-center">
            <Form className="mt-4 mb-3">
              <Row className="d-flex align-items-center">
                <Col sm={3}>
                  <label htmlFor="itemSelect">Select item</label>
                  <Form.Control as="select" id="itemSelect">
                    <option>Milo</option>
                    <option>Groundnut</option>
                  </Form.Control>
                </Col>
                <Col sm={2}>
                  <label htmlFor="quantity"> Quantity </label>
                  <Form.Control type="text" id="quantity" />
                </Col>
                <Col sm={6}>
                  <label htmlFor="comments"> Enter any additional comments </label>
                  <Form.Control type="text" id="comments" />
                </Col>
                <Col sm={1}>
                  <LargeButton type="submit" text="Add to cart" classStyle="pl-3 pr-3 mt-4" />
                </Col>
              </Row>
            </Form>
          </Row>
          <Row className="mr-0 ml-0" />
          <Row>
            <div className="ml-5 mt-5"><p>Items currently added to cart for purchase</p></div>
            <Table striped bordered hover className="mr-5 ml-5 justify-content-center">
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
          </Row>
          <Row className="d-flex justify-content-end mr-4">
            <LargeButton type="submit" text="Clear cart" classStyle="pl-3 pr-3 mt-4 mr-1" />
            <LargeButton type="submit" text="Purchase items" classStyle="pl-3 pr-3 mt-4 ml-1" />
          </Row>
        </Card.Body>
      </Card>
    );
  }
}

PromoRequest.defaultProps = {
  classStyle: '',
};

PromoRequest.propTypes = {
  classStyle: PropTypes.string,
};

export default PromoRequest;
