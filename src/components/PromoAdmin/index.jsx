import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Card, Row, Form, Col, Table } from 'react-bootstrap';
import { createPromoItem } from '../../data/actions/account';
import LargeButton from '../LargeButton';


function PromoAdmin({ classStyle }) {


  const [cartState, setCartState] = useState([]);
  const [formState, setFormState] = useState({});

  function updateFormState(event) {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  }

  function updateCart(formState) {
    setCartState([...cartState, formState]);
  }

  function clearCart() {
    setCartState([]);
    window.location.reload();
  }

  async function onSubmit(event) {
    event.preventDefault();
    const response = await createPromoItem({ items: cartState });

    if (response.success === true) {
      alert(response.message);
      return window.location.reload();
    }
    return alert(response.message);
  }


  console.log('fs', formState);


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
                <Form.Control type="text" id="itemName" name="name" onChange={updateFormState} />
              </Col>
              <Col sm={2}>
                <label htmlFor="quantity"> Quantity available </label>
                <Form.Control type="number" id="quantity" name="quantity" onChange={updateFormState} />
              </Col>
              <Col sm={2}>
                <label htmlFor="price"> Unit price </label>
                <Form.Control type="number" id="price" name="price" onChange={updateFormState} />
              </Col>
              <Col sm={5}>
                <label htmlFor="description"> Enter description </label>
                <Form.Control type="text" id="description" name="description" onChange={updateFormState} />
              </Col>
              <Col sm={1}>
                <LargeButton type="submit" text="Add item" classStyle="pl-3 pr-3 mt-4" onClick={() => updateCart(formState)} />
              </Col>
            </Row>
          </Form>
        </Row>
        <Row className="mr-0 ml-0" />
        {cartState.length >= 1 ? <Row>
          <div className="ml-5 mt-5"><p>Preview items about to be published here</p></div>
          <Table striped bordered hover className="mr-5 ml-5 justify-content-center">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {
                cartState.map((data, index) => <tr>
                  <td>{index + 1}</td>
                  <td>{data.name}</td>
                  <td>{data.price}</td>
                  <td>{data.quantity}</td>
                  <td>{data.description}</td>
                </tr>)
              }
            </tbody>
          </Table>
        </Row> : <div className="d-flex justify-content-center mt-4">There are currently no draft items to be added</div>}
        {cartState.length >= 1 ? <Row className="d-flex justify-content-end mr-4">
          <LargeButton type="submit" text="Clear list" classStyle="pl-3 pr-3 mt-4 mr-1 greyButton" onClick={clearCart} />
          <LargeButton type="submit" text="Publish items" classStyle="pl-3 pr-3 mt-4 ml-1" onClick={onSubmit} />
        </Row> : null}
      </Card.Body>
    </Card>
  );
}


PromoAdmin.defaultProps = {
  classStyle: '',
};

PromoAdmin.propTypes = {
  classStyle: PropTypes.string,
};

export default PromoAdmin;
