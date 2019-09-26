import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Card, Row, Form, Col, Alert } from 'react-bootstrap';
import LargeButton from '../LargeButton';
import { getPromoItem, editPromoItem } from '../../data/actions/promo';

function EditPromo({ classStyle }) {

  const [errors, setErrors] = useState([]);
  const [currentDetails, setCurrentDetails] = useState('');
  const [promoItemDetails, setpromoItemDetails] = useState({
    name: null,
    quantity: null,
    price: null,
    description: null,
    status: null,
  });

  function updateLocalState(event) {
    setpromoItemDetails({ ...promoItemDetails, [event.target.name]: event.target.value });
  }

  function updateUserToEditState(event) {
    setCurrentDetails(event.target.value);
  }

  function renderErrors(errorsArray) {
    return errorsArray.map(error => <Alert key={error} variant="danger">{error}</Alert>);
  }

  async function onSubmit(event) {
    event.preventDefault();
    const response = await editPromoItem(currentDetails, promoItemDetails);

    if (response.success === true) {
      alert('Promo item updated successfully')
      return window.location.reload();
    }
    return setErrors([response.message]);
  }
  

  async function onRequest(event) {
    event.preventDefault();
    const response = await getPromoItem(currentDetails);
    if (response.success === true) {
      setErrors([])
      return setpromoItemDetails(response.data);
    }
    return setErrors([response.message]);
  }

  return (
    <Card className={`${classStyle} mt-4 mb-4`} style={{ width: "100%" }}>
      <Card.Body>
        <div className="border-bottom">
          <span>
            <h3 className="no-buttom-margin">Edit promo item</h3>
            <p>Edit an existing promo item details</p>
          </span>
        </div>

        <Row><Col md={{ span: 6, offset: 3 }}>{renderErrors(errors)}</Col></Row>


        <Row className="justify-content-center">
          <Form>
            <Row>
              <Col className="mt-4">
                <label htmlFor="cmemberId">Enter promo item ID</label>
              </Col>
              <Col className="mt-3">
                <Form.Control type="text" id="cmemberId" name="memberId" onChange={updateUserToEditState} />
              </Col>
              <Col className="mt-1">
                <LargeButton text="Edit" classStyle="my-2 mr-3 px-3 greenButton" onClick={onRequest} />
              </Col>
            </Row>
          </Form>
        </Row>

        {promoItemDetails.name ? <Row className="mr-0 ml-0 mt-3">

          <Form className="mt-2 mb-2" style={{ width: "100%" }}>
            <Row className="d-flex align-items-center">
              <Col md={4}>
                <label htmlFor="promoitemname">Enter promo item name</label>
                <Form.Control type="text" defaultValue={promoItemDetails.name} id="promoitemname" name="name" onChange={updateLocalState} />
              </Col>
              <Col md={4}>
                <label htmlFor="promoitemquantity"> Enter new quantity </label>
                <Form.Control type="number" defaultValue={promoItemDetails.quantity} id="promoitemquantity" name="quantity" onChange={updateLocalState} />
              </Col>
              <Col md={4}>
                <label htmlFor="promoitemprice"> Enter new price</label>
                <Form.Control type="number" defaultValue={promoItemDetails.price} id="promoitemprice" name="price" onChange={updateLocalState} />
              </Col>
            </Row>

            <Row className="d-flex align-items-center mt-4">
              <Col md={4}>
                <label htmlFor="promoitemdescription">Enter description</label>
                <Form.Control type="text" defaultValue={promoItemDetails.description} id="promoitemdescription" name="description" onChange={updateLocalState} />
              </Col>
              <Col md={4}>
                <label htmlFor="promoitemstatus">Status</label>
                <Form.Control as="select" defaultValue={promoItemDetails.status} id="promoitemstatus" name="status" onChange={updateLocalState} >
                  <option>Select active or inactive</option>
                  <option>active</option>
                  <option>inactive</option>
                </ Form.Control>
              </Col>
            </Row>
            <Row className="mt-3 d-flex justify-content-end">
              <LargeButton text="Submit" classStyle="my-2 mr-3 px-3 greenButton" onClick={onSubmit} />
            </Row>

          </Form>
        </Row> : null}

      </Card.Body>
    </Card>
  );
}

EditPromo.defaultProps = {
  classStyle: '',
};

EditPromo.propTypes = {
  classStyle: PropTypes.string,
};

export default EditPromo;
