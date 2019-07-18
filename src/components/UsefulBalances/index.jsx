import React from 'react';
import PropTypes from 'prop-types';
import { Card, Row, Col } from 'react-bootstrap';

function Data(props) {
  const { title, amount } = props.contact;

  return (
    <Card.Body>
      <Card.Text>
        <>
          <h5 className="lighter no-buttom-margin top-margin">{title}</h5>
          <h5>{amount}</h5>
        </>
      </Card.Text>
    </Card.Body>
  );
}


class UsefulBalances extends React.Component {
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
              <h3 className="no-buttom-margin">Useful balances</h3>
              <p>Here is a summary of useful account balances for quick reference</p>
            </span>
          </div>
          <Row className="mr-0 ml-0 d-flex justify-content-between">
            <Col>
              <Data contact={{ title: 'Total assets', amount: 'NGN 50,000' }} />
              <Data contact={{ title: 'Total liabilities', amount: 'NGN 550,000' }} />
            </Col>
            <Col>
              <Data contact={{ title: 'Equity/Member Savings', amount: 'NGN 560,000' }} />
              <Data contact={{ title: 'Revenue year till date', amount: 'NGN 200,000' }} />
            </Col>
            <Col>
              <Data contact={{ title: 'Expenses year till date', amount: 'NGN 150,000' }} />
              <Data contact={{ title: 'Current profit year till date', amount: 'NGN 70,000' }} />
            </Col>
          </Row>
        </Card.Body>
      </Card>
    );
  }
}

UsefulBalances.defaultProps = {
  classStyle: '',
};

UsefulBalances.propTypes = {
  classStyle: PropTypes.string,
};

Data.propTypes = {
  contact: PropTypes.shape({
    title: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
  })
};

export default UsefulBalances;
