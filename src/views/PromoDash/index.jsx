import React, { useState, useEffect } from 'react';
import { Store } from '../../data/store';
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../../components/Header';
import DataHeader from '../../components/DataHeader';
import UsefulContacts from '../../components/UsefulContacts';
import Footer from '../../components/Footer';
import PromoRequest from '../../components/PromoRequest';
import AlertModal from '../../components/Modal';
import PromoTable from '../../components/PromoTable';
import { getAllPromoItems } from '../../data/actions/promo';
import { userDetails } from '../../data/actions/auth';


function PromoDash(props) {
  const { state } = React.useContext(Store);

  const [userDetailsState, setuserDetailsState] = useState([]);
  const [alertMessage, setAlertMessage] = useState({
    message: '',
    visibility: false
  });
  const [promoItemsState, setPromoItemsState] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const allPromoItems = await getAllPromoItems();
      const details = await userDetails();
      if (allPromoItems.success === true) {
        setPromoItemsState(allPromoItems.data);
      }
      if (details.success === true) {
        setuserDetailsState(details.data);
      }
    }
    fetchData();
  }, []);


  return (
    <div>
      {(alertMessage.message) && (
        <AlertModal
          message={alertMessage.message}
          show={alertMessage.visibility}
          closeAlertModal={() => setAlertMessage({ message: '', visibility: false })}
          variant="primary"
        />
      )}
      <Header props={props} />
      <Container>
        <DataHeader
          name={state.user.firstName}
          joinDate={userDetailsState.joinDate}
          subText="Here are promo items available to you as a cooperative member"
          memberId={userDetailsState.memberId}
          organization={userDetailsState.organization} />
        <Row>
          <Col sm={9}>
            <PromoTable title="Promo items" subTitle="List of items available for purchase at discounted prices" data={promoItemsState} />
          </Col>
        </Row>
        <Row className="mr-0 ml-0">
          <PromoRequest classStyle="mt-4 mb-2" data={promoItemsState} />
          <UsefulContacts classStyle="mt-4 mb-2" />
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

PromoDash.propTypes = {

};

export default PromoDash;
