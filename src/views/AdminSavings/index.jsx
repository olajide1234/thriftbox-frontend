import React, { useState, useEffect } from 'react';
import { Container, Row, Alert, Col } from 'react-bootstrap';
import { Store } from '../../data/store';
import Header from '../../components/Header';
import DataHeader from '../../components/DataHeader';
import UsefulContacts from '../../components/UsefulContacts';
import Footer from '../../components/Footer';
import SavingsChangeApproval from '../../components/SavingsChangeApproval';
import { userDetails } from '../../data/actions/auth';
import { generalStats } from '../../data/actions/account';
import Loader from '../../components/Loader';


function AdminSavings(props) {
  const { state } = React.useContext(Store);
  const [userDetailsState, setuserDetailsState] = useState([]);
  const [generalStatState, setgeneralStatState] = useState([]);
  const [errors, setErrors] = useState([]);

  function renderErrors(errorsArray) {
    return errorsArray.map(error => <Alert key={error} variant="danger">{error}</Alert>);
  }
  useEffect(() => {
    async function fetchData() {
      const details = await userDetails();
      const coopStats = await generalStats();
      console.log('dea', coopStats);

      if (details.success === true) {
        setuserDetailsState(details.data);
      }
      if (coopStats.success === true) {
        setgeneralStatState(coopStats.data);
      }
    }
    fetchData();
  }, []);

  if (!userDetailsState.id) {
    return <div className='center'><Loader /></div>
  }

  if (!generalStatState.totalLoansBalance) {
    return <div className='center'><Loader /></div>
  }
  return (
    <div>
      <Header props={props} />
      <Container>
        <DataHeader
          name={state.user.firstName}
          memberId={userDetailsState.memberId}
          organization={userDetailsState.organization}
          subText="Welcome to your savings admin dashboard!"
          memberStrenght={generalStatState.memberCount}
          admin />
        <Row><Col md={{ span: 6, offset: 3 }}>{renderErrors(errors)}</Col></Row>
        <Row className="mr-0 ml-0">
          <SavingsChangeApproval classStyle="mt-4 mb-2" setErrors={setErrors} />
          <UsefulContacts classStyle="mt-4 mb-2" />
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

AdminSavings.propTypes = {

};

export default AdminSavings;
