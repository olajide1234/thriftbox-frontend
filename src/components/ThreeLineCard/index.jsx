import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

class ThreeLineCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    const { title, itemOne, itemTwo } = this.props;

    return (
      <Card style={{ width: "100%" }}>
        <Card.Body>
          <Card.Title><h5 className="lighter">{title}</h5></Card.Title>
          <Card.Text>
            <>
              <p className="lighter no-buttom-margin top-margin">{itemOne.title}</p>
              <h4>{itemOne.text}</h4>
            </>
            <>
              <p className="lighter no-buttom-margin top-margin">{itemTwo.title}</p>
              <h3>{itemTwo.text}</h3>
            </>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

ThreeLineCard.propTypes = {
  title: PropTypes.string.isRequired,
  itemOne: PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }),
  itemTwo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  })
};

export default ThreeLineCard;
