import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Card, Row, Form, Col, Table } from 'react-bootstrap';
import { requestPromoLoan } from '../../data/actions/account';
import LargeButton from '../LargeButton';


function PromoRequest({ classStyle, data }) {


  const [cartState, setCartState] = useState([]);
  const [formState, setFormState] = useState({});

  function updateFormState(event) {
    if (event.target.name == 'item') {
      return setFormState({ ...formState, [event.target.name]: event.target.value, price: event.target.selectedOptions[0].getAttribute("price") });
    }
    if (event.target.name == 'quantity') {
      return setFormState({ ...formState, [event.target.name]: event.target.value, amount: formState.price * event.target.value });
    }
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
    const response = await requestPromoLoan({ items: cartState });

    if (response.success === true) {
      alert(response.message);
      return window.location.reload();
    }
    return alert(response.message);
  }

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
                <Form.Control as="select" id="itemSelect" name="item" onChange={updateFormState}>
                  <option>Select promo item</option>
                  {data.map(data =>
                    <option price={data.price} value={data.name}>{data.name}</option>
                  )}
                </Form.Control>
              </Col>
              <Col sm={2}>
                <label htmlFor="quantity"> Quantity </label>
                <Form.Control type="number" id="quantity" name="quantity" onChange={updateFormState} />
              </Col>
              <Col sm={6}>
                <label htmlFor="comments"> Enter any additional comments </label>
                <Form.Control type="text" id="comments" name="comments" onChange={updateFormState} />
              </Col>
              <Col sm={1}>
                <LargeButton type="submit" text="Add to cart" classStyle="pl-3 pr-3 mt-4" onClick={() => updateCart(formState)} />
              </Col>
            </Row>
          </Form>
        </Row>
        <Row className="mr-0 ml-0" />
        {cartState.length >= 1 ? <Row>
          <div className="ml-5 mt-5"><p>Items currently added to cart for purchase</p></div>
          <Table striped bordered hover className="mr-5 ml-5 justify-content-center">
            <thead>
              <tr>
                <th>#</th>
                <th>Item</th>
                <th>Quantity</th>
                <th>Unit price</th>
                <th>Amount</th>
                <th>Comments</th>
              </tr>
            </thead>
            <tbody>
              {cartState.map((data, index) => <tr>
                <td>{index + 1}</td>
                <td>{data.item}</td>
                <td>{data.quantity}</td>
                <td>{data.price}</td>
                <td>{data.amount}</td>
                <td>{data.comments}</td>
              </tr>)
              }
            </tbody>
          </Table>
        </Row> : <div className="d-flex justify-content-center mt-4">There are currently no items selected for purchase</div>}
        {cartState.length >= 1 ? <Row className="d-flex justify-content-end mr-4">
          <LargeButton type="submit" text="Clear cart" classStyle="pl-3 pr-3 mt-4 mr-1" onClick={clearCart} />
          <LargeButton type="submit" text="Purchase items" classStyle="pl-3 pr-3 mt-4 ml-1" onClick={onSubmit} />
        </Row> : null}
      </Card.Body>
    </Card>
  );
}

PromoRequest.defaultProps = {
  classStyle: '',
};

PromoRequest.propTypes = {
  classStyle: PropTypes.string,
};

export default PromoRequest;
