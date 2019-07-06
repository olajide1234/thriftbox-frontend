import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

class TwoLineCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    const { classStyle, width, header, text } = this.props;

    return (
      <Card className={classStyle} style={{ width: `${width}` }}>
        <Card.Body className="pl-1 pr-1">
          <Card.Title><h5 className="lighter text-center">{header}</h5></Card.Title>
          <Card.Text>
            <h4 className="text-center">{text}</h4>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

TwoLineCard.defaultProps = {
  classStyle: '',
  width: '',
  header: '',
  text: ''
};

TwoLineCard.propTypes = {
  classStyle: PropTypes.string,
  width: PropTypes.string,
  header: PropTypes.string,
  text: PropTypes.string
};

export default TwoLineCard;
