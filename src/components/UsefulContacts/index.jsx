import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Card, Row } from 'react-bootstrap';
import { contactDetails } from '../../data/actions/users';
import Loader from '../Loader';

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
          <h5 style={{ textTransform: 'capitalize' }}>{position}</h5>
        </>
        <>
          <h5 className="lighter no-buttom-margin top-margin">Details</h5>
          <h5>{details}</h5>
        </>
      </Card.Text>
    </Card.Body>
  );
}


function UsefulContacts(props) {

  const { classStyle } = props;
  const [contactsState, setContactsState] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const details = await contactDetails();
      if (details.success === true) {
        setContactsState(details.data);
      }
    }
    fetchData();
  }, []);

  if (contactsState.length < 1) {
    return <div className='center-width'><Loader /></div>
  }
  return (
    <Card className={classStyle} style={{ width: "100%" }}>
      <Card.Body>
        <div className="border-bottom">
          <span>
            <h3 className="no-buttom-margin">Useful contacts</h3>
            <p>Feel free to reach out using any of the following contacts</p>
          </span>
        </div>
        <Row className="mr-0 ml-0 d-flex justify-content-between">
          {contactsState.map(info =>
            info && <ContactDetails key={info.position} contact={{ name: `${info.firstName} ${info.lastName}`, position: `${info.position}`, details: `${info.phone}` }} />
          )}
        </Row>
      </Card.Body>
    </Card>
  );
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
