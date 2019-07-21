import React from 'react';
import PropTypes from 'prop-types';
import { Card, Row, Form, Col } from 'react-bootstrap';
import LargeButton from '../LargeButton';
import SimpleTable from '../SimpleTable';

class ViewEntries extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classStyle } = this.props;

    return (
      <Card className={`${classStyle} mt-4`} style={{ width: "100%" }}>
        <Card.Body>
          <div className="border-bottom">
            <span>
              <h3 className="no-buttom-margin">View account entries</h3>
              <p>View all entries in an account</p>
            </span>
          </div>


          <Row className="mr-0 ml-0 mt-3">
            <Form className="mt-2 mb-2" style={{ width: "100%" }}>
              <Row className="d-flex align-items-center">
                <Col md={3}>
                  <label htmlFor="book">Select book</label>
                  <Form.Control as="select" id="book">
                    <option>First book</option>
                    <option>Second book</option>
                  </Form.Control>
                </Col>
                <Col md={3}>
                  <label htmlFor="account"> Select account </label>
                  <Form.Control as="select" id="account">
                    <option>Asset</option>
                    <option>Liability</option>
                  </Form.Control>
                </Col>
                <Col md={3}>
                  <label htmlFor="date"> Pick data range </label>
                  <Form.Control type="date" id="date" />
                </Col>
                <Col md={1.5}>
                  <LargeButton text="View entries" classStyle="ml-4 mt-4" onClick={f => f} />
                </Col>
                <Col md={1.5}>
                  <LargeButton text="Clear" classStyle="ml-4 mt-4" onClick={f => f} />
                </Col>
              </Row>
            </Form>
          </Row>
          <SimpleTable />
        </Card.Body>
      </Card>
    );
  }
}

ViewEntries.defaultProps = {
  classStyle: '',
};

ViewEntries.propTypes = {
  classStyle: PropTypes.string,
};

export default ViewEntries;
