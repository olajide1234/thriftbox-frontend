import React from 'react';
import PropTypes from 'prop-types';
import { Card, Row, Form, Col } from 'react-bootstrap';
import LargeButton from '../LargeButton';

class EditMember extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classStyle } = this.props;

    return (
      <Card className={`${classStyle} mt-4 mb-4`} style={{ width: "100%" }}>
        <Card.Body>
          <div className="border-bottom">
            <span>
              <h3 className="no-buttom-margin">Edit existing member</h3>
              <p>Edit an existing member details</p>
            </span>
          </div>

          <Row className="justify-content-center">
            <Form>
              <Row>
                <Col className="mt-4">
                  <label htmlFor="email">Enter member ID</label>
                </Col>
                <Col className="mt-3">
                  <Form.Control type="email" id="email" />
                </Col>
                <Col className="mt-1">
                  <LargeButton text="Edit" classStyle="my-2 mr-3 px-3 greenButton" onClick={f => f} />
                </Col>
              </Row>
            </Form>
          </Row>

          <Row className="mr-0 ml-0 mt-3">
            <Form className="mt-2 mb-2" style={{ width: "100%" }}>
              <Row className="d-flex align-items-center">
                <Col md={4}>
                  <label htmlFor="email">Enter member email</label>
                  <Form.Control type="email" id="email" />
                </Col>
                <Col md={4}>
                  <label htmlFor="firstName"> Enter member first name </label>
                  <Form.Control type="name" id="firstName" />
                </Col>
                <Col md={4}>
                  <label htmlFor="lastName"> Enter member last name </label>
                  <Form.Control type="name" id="lastName" />
                </Col>
              </Row>

              <Row className="d-flex align-items-center mt-4">
                <Col md={4}>
                  <label htmlFor="username">Enter member username</label>
                  <Form.Control type="username" id="username" />
                </Col>
                <Col md={4}>
                  <label htmlFor="role">Enter member role (if any)</label>
                  <Form.Control type="text" id="role" />
                </Col>
                <Col md={4}>
                  <label htmlFor="showOnDash"> Should member contact be on dash ? </label>
                  <Form.Control as="select" id="showOnDash">
                    <option>Yes</option>
                    <option>No</option>
                  </Form.Control>
                </Col>
              </Row>
              <Row className="mt-3 d-flex justify-content-end">
                <LargeButton text="Update" classStyle="my-2 mr-3 px-3 greenButton" onClick={f => f} />
                <LargeButton text="Reset" classStyle="my-2 mx-3 px-4 greyButton" onClick={f => f} />
              </Row>
            </Form>
          </Row>

        </Card.Body>
      </Card>
    );
  }
}

EditMember.defaultProps = {
  classStyle: '',
};

EditMember.propTypes = {
  classStyle: PropTypes.string,
};

export default EditMember;
