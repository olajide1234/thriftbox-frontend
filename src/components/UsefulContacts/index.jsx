import React from 'react';
import PropTypes from 'prop-types';
import { Card, Row } from 'react-bootstrap';

function ContactDetails(props) {
  const { name, position, details } = props.contact;

  return (
    <Card.Body>
      <Card.Text>
        <>
          <h5 className="lighter no-buttom-margin top-margin">Contact name</h5>
          <h5>{name}</h5>
        </>
        <>
          <h5 className="lighter no-buttom-margin top-margin">Position</h5>
          <h5>{position}</h5>
        </>
        <>
          <h5 className="lighter no-buttom-margin top-margin">Details</h5>
          <h5>{details}</h5>
        </>
      </Card.Text>
    </Card.Body>
  );
}


class UsefulContacts extends React.Component {
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
              <h3 className="lighter no-buttom-margin">Useful contacts</h3>
              <p>Feel free to reach out using any of the following contacts</p>
            </span>
          </div>
          <Row className="mr-0 ml-0 d-flex justify-content-between">
            <ContactDetails contact={{ name: 'Akinwale habib', position: 'Financial Secretary', details: '08185334912' }} />
            <ContactDetails contact={{ name: 'Muhammadu Buhari', position: 'President', details: '08185334922' }} />
            <ContactDetails contact={{ name: 'Nnamdi Kanu', position: 'Treasurer', details: '08185334956' }} />
          </Row>
        </Card.Body>
      </Card>
    );
  }
}

UsefulContacts.defaultProps = {
  classStyle: '',
};

UsefulContacts.propTypes = {
  classStyle: PropTypes.string,
};

ContactDetails.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default UsefulContacts;
