import React, { useState, useEffect } from 'react';
import { Store } from '../../data/store';
import { Container, Row, Col, } from 'react-bootstrap';
import Header from '../../components/Header';
import DataHeader from '../../components/DataHeader';
import Footer from '../../components/Footer';
import MainTable from '../../components/MainTable';
import PromoAdmin from '../../components/PromoAdmin';
import UsefulContacts from '../../components/UsefulContacts';
import { userDetails } from '../../data/actions/auth';
import { generalStats } from '../../data/actions/account';
import { getAllPromoItems } from '../../data/actions/promo';
import PromoTable from '../../components/PromoTable';
import Loader from '../../components/Loader';
import EditPromo from '../../components/EditPromo';

function AdminPromo(props) {
  const { state } = React.useContext(Store);
  const [userDetailsState, setuserDetailsState] = useState([]);
  const [generalStatState, setgeneralStatState] = useState([]);
  const [promoItemsState, setPromoItemsState] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const details = await userDetails();
      const coopStats = await generalStats();
      const allPromoItems = await getAllPromoItems();
      if (details.success === true) {
        setuserDetailsState(details.data);
      }
      if (coopStats.success === true) {
        setgeneralStatState(coopStats.data);
      }
      if (allPromoItems.success === true) {
        setPromoItemsState(allPromoItems.data);
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
          subText="Welcome to your promo items dashboard!"
          memberStrenght={generalStatState.memberCount}
          admin />
        <Row>
          <Col>
            <PromoTable title="Promo items" subTitle="List of items available for purchase at discounted prices" data={promoItemsState} />
          </Col>
        </Row>
        <Row className="mr-0 ml-0">
          <PromoAdmin classStyle="mt-4 mb-2" />
          <EditPromo />
          <UsefulContacts classStyle="mt-4 mb-2" />
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

AdminPromo.propTypes = {

};

export default AdminPromo;
