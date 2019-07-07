import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

class LargeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    const { text, classStyle, onClick } = this.props;

    return (
      <Button onClick={onClick} size="lg" className={`${classStyle} thriftBoxColor`}>
        {text}
      </Button>

    );
  }
}

LargeButton.propTypes = {
  text: PropTypes.string.isRequired,
  classStyle: PropTypes.string.isRequired,
  onClick: PropTypes.string.isRequired

};

export default LargeButton;
