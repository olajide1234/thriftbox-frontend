import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

class TwoLineCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    const { classStyle } = this.props;

    return (
      <Card className={classStyle} style={{ width: "48%" }}>
        <Card.Body className="pl-1 pr-1">
          <Card.Title><h5 className="lighter text-center">Total savings amount</h5></Card.Title>
          <Card.Text>
            <h4 className="text-center">NGN 225,000</h4>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

TwoLineCard.propTypes = {
  classStyle: PropTypes.string.isRequired
};

export default TwoLineCard;
