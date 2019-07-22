import React from 'react';
import PropTypes from 'prop-types';
import { Card, Row, Form, Col, Table } from 'react-bootstrap';
import LargeButton from '../LargeButton';


class PromoAdmin extends React.Component {
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
              <h3 className="no-buttom-margin">Promo items list</h3>
              <p>Use the options below to offer more items for promo sales</p>
            </span>
          </div>
          <Row className="mr-0 ml-0 d-flex justify-content-center">
            <Form className="mt-4 mb-3">
              <Row className="d-flex align-items-center">
                <Col sm={2}>
                  <label htmlFor="itemSelect">Item name</label>
                  <Form.Control type="text" id="itemName" />
                </Col>
                <Col sm={2}>
                  <label htmlFor="quantity"> Quantity available </label>
                  <Form.Control type="text" id="quantity" />
                </Col>
                <Col sm={2}>
                  <label htmlFor="price"> Unit price </label>
                  <Form.Control type="text" id="price" />
                </Col>
                <Col sm={5}>
                  <label htmlFor="description"> Enter description </label>
                  <Form.Control type="text" id="description" />
                </Col>
                <Col sm={1}>
                  <LargeButton type="submit" text="Add item" classStyle="pl-3 pr-3 mt-4" />
                </Col>
              </Row>
            </Form>
          </Row>
          <Row className="mr-0 ml-0" />
          <Row>
            <div className="ml-5 mt-5"><p>Preview items about to be published here</p></div>
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
            <LargeButton type="submit" text="Clear list" classStyle="pl-3 pr-3 mt-4 mr-1 greyButton" />
            <LargeButton type="submit" text="Publish items" classStyle="pl-3 pr-3 mt-4 ml-1" />
          </Row>
        </Card.Body>
      </Card>
    );
  }
}

PromoAdmin.defaultProps = {
  classStyle: '',
};

PromoAdmin.propTypes = {
  classStyle: PropTypes.string,
};

export default PromoAdmin;
