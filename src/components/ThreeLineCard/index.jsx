import React from 'react';
import { Card } from 'react-bootstrap';

class ThreeLineCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    return (
      <Card style={{ width: "100%" }}>
        <Card.Body>
          <Card.Title><h5 className="lighter">Next savings details</h5></Card.Title>
          <Card.Text>
            <>
              <p className="lighter no-buttom-margin top-margin">Next savings due date</p>
              <h4>Mar 26, 2019</h4>
            </>
            <>
              <p className="lighter no-buttom-margin top-margin">Next savings amount</p>
              <h3>NGN 50,000</h3>
            </>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default ThreeLineCard;
