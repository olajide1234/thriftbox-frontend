import React from 'react';
import PropTypes from 'prop-types';
import { Card, Row } from 'react-bootstrap';
import LargeButton from '../LargeButton';


class QuickActions extends React.Component {
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
              <h3 className="no-buttom-margin">Quick actions</h3>
              <p>Please select any of these buttons to carry out a quick action</p>
            </span>
          </div>
          <Row className="mr-0 ml-0 d-flex justify-content-between">
            <LargeButton text="Request quick loan" classStyle="mt-4 mb-3 p-3" />
            <LargeButton text="Buy promo item" classStyle="mt-4 mb-3 p-3" />
            <LargeButton text="Increase savings" classStyle="mt-4 mb-3 p-3" />
            <LargeButton text="Make a complaint" classStyle="mt-4 mb-3 p-3" />
          </Row>
        </Card.Body>
      </Card>
    );
  }
}

QuickActions.defaultProps = {
  classStyle: '',
};

QuickActions.propTypes = {
  classStyle: PropTypes.string,
};

export default QuickActions;
