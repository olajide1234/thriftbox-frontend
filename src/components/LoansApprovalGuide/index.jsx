import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';


class LoansApprovalGuide extends React.Component {
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
              <h3 className="no-buttom-margin">Loans approval guide</h3>
              <p>Refer to the following instructions on how to approve loans</p>
            </span>
          </div>

          <h5 className="lighter mt-3">Color code</h5>
          <p>
Guarantors with code red on the name means they have either guaranteed more than three other
Individuals or do not have up to the required one third in their account.
            {' '}
          </p>
          <h5 className="lighter mt-3">More guidance here</h5>
          <p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
            {' '}
          </p>
          <h5 className="lighter mt-3">Even more guidance here</h5>
          <p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
            {' '}
          </p>
        </Card.Body>
      </Card>
    );
  }
}

LoansApprovalGuide.defaultProps = {
  classStyle: '',
};

LoansApprovalGuide.propTypes = {
  classStyle: PropTypes.string,
};


export default LoansApprovalGuide;
