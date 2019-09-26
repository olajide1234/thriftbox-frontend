import React from 'react';
import PropTypes from 'prop-types';
import { Card, Row } from 'react-bootstrap';
import LargeButton from '../LargeButton';


class AdminQuickActions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    const { classStyle, history } = this.props;

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
            <LargeButton text="Post account entry" classStyle="mt-4 mb-3 p-3" onClick={() => history.push('/adminaccounting')} />
            <LargeButton text="Approve a loan" classStyle="mt-4 mb-3 p-3" onClick={() => history.push('/adminloans')} />
            <LargeButton text="Manage members" classStyle="mt-4 mb-3 p-3" onClick={() => history.push('/adminmembers')} />
            <LargeButton text="View financials" classStyle="mt-4 mb-3 p-3" onClick={() => history.push('/adminaccounting')} />
          </Row>
        </Card.Body>
      </Card>
    );
  }
}

AdminQuickActions.defaultProps = {
  classStyle: '',
};

AdminQuickActions.propTypes = {
  classStyle: PropTypes.string,
  history: PropTypes.object.isRequired,

};

export default AdminQuickActions;
