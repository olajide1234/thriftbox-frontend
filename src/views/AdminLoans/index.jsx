import React, { useState, useEffect } from 'react';
import { Container, Row, Card, Col, Table, Alert } from 'react-bootstrap';
import { Store } from '../../data/store';
import Header from '../../components/Header';
import DataHeader from '../../components/DataHeader';
import Footer from '../../components/Footer';
import LargeButton from '../../components/LargeButton';
import { userDetails } from '../../data/actions/auth';
import LoansApprovalGuide from '../../components/LoansApprovalGuide';
import { generalStats, getLoans, loansApproval } from '../../data/actions/account';
import Loader from '../../components/Loader';


function Request({ pendingLoans, onApprove }) {
  return (
    pendingLoans.map(data => (<Card className="mx-2 my-2" style={{ width: '48%' }}>
      <Card.Body>
        <Table className="table-borderless">
          <tbody>
            <tr>
              <td className="pl-0">
                <p className="lighter no-buttom-margin">Member ID</p>
                <p className="no-buttom-margin">{data.debtor.memberId}</p>
              </td>
              <td className="pl-0">
                <p className="lighter no-buttom-margin">Guarantor 1</p>
                <p className="no-buttom-margin">{`${data.guarantor1.firstName} ${data.guarantor1.lastName}`}</p>
              </td>
            </tr>
            <tr>
              <td className="pl-0">
                <p className="lighter no-buttom-margin">Member name</p>
                <p className="no-buttom-margin">{`${data.debtor.firstName} ${data.debtor.lastName}`}</p>
              </td>
              <td className="pl-0">
                <p className="lighter no-buttom-margin">Guarantor 2</p>
                <p className="no-buttom-margin">{`${data.guarantor2.firstName} ${data.guarantor2.lastName}`}</p>
              </td>
            </tr>
            <tr>
              <td className="pl-0">
                <p className="lighter no-buttom-margin">Loan request amount</p>
                <p className="no-buttom-margin">{`NGN ${data.loanAmount.toLocaleString()}`}</p>
              </td>
              {data.guarantor3 ? <td className="pl-0">
                <p className="lighter no-buttom-margin">Guarantor 3</p>
                <p className="no-buttom-margin">{`${data.guarantor3.firstName} ${data.guarantor3.lastName}`}</p>
              </td> : null}
            </tr>
          </tbody>
        </Table>
        <div>
          <h5 className="lighter no-buttom-margin">Comments</h5>
          <p>{data.comments}</p>
        </div>
        <div className="my-4">
          <h5 className="lighter no-buttom-margin">Approvals</h5>
          {data.approver1 ? <p className="no-buttom-margin">{`${data.approver1.firstName} ${data.approver1.lastName}`} approved </p> : null}
          {data.approver2 ? <p className="no-buttom-margin">{`${data.approver2.firstName} ${data.approver2.lastName}`} approved </p> : null}
          {data.approver3 ? <p className="no-buttom-margin">{`${data.approver3.firstName} ${data.approver3.lastName}`} approved </p> : null}
        </div>
        <div>
          <h5 className="lighter no-buttom-margin">Rejections</h5>
          {data.rejecter1 ? <p className="no-buttom-margin">{`${data.rejecter1.firstName} ${data.rejecter1.lastName}`} rejected </p> : null}
          {data.rejecter2 ? <p className="no-buttom-margin">{`${data.rejecter2.firstName} ${data.rejecter2.lastName}`} rejected </p> : null}
          {data.rejecter3 ? <p className="no-buttom-margin">{`${data.rejecter3.firstName} ${data.rejecter3.lastName}`} rejected </p> : null}
        </div>
        <Row className="mt-3">
          <Col className="d-flex justify-content-center"><LargeButton text="Approve" classStyle="mt-2 mb-2 px-3 greenButton" onClick={() => onApprove(data.id, 'approved')} /></Col>
          <Col className="d-flex justify-content-center"><LargeButton text="Reject" classStyle="mt-2 mb-2 px-4 redButton" onClick={() => onApprove(data.id, 'rejected')} /></Col>
        </Row>
      </Card.Body>
    </Card>
    ))
  )
};

function PreviousRequest({ approvedLoans }) {
  return (
    approvedLoans.map(data => (<Card className="mx-2 my-2" style={{ width: '48%' }}>
      <Card.Body>
        <Table className="table-borderless">
          <tbody>
            <tr>
              <td className="pl-0">
                <p className="lighter no-buttom-margin">Member ID</p>
                <p className="no-buttom-margin">{data.debtor.memberId}</p>
              </td>
              <td className="pl-0">
                <p className="lighter no-buttom-margin">Guarantor 1</p>
                <p className="no-buttom-margin">{`${data.guarantor1.firstName} ${data.guarantor1.lastName}`}</p>
              </td>
            </tr>
            <tr>
              <td className="pl-0">
                <p className="lighter no-buttom-margin">Member name</p>
                <p className="no-buttom-margin">{`${data.debtor.firstName} ${data.debtor.lastName}`}</p>
              </td>
              <td className="pl-0">
                <p className="lighter no-buttom-margin">Guarantor 2</p>
                <p className="no-buttom-margin">{`${data.guarantor2.firstName} ${data.guarantor2.lastName}`}</p>
              </td>
            </tr>
            <tr>
              <td className="pl-0">
                <p className="lighter no-buttom-margin">Loan request amount</p>
                <p className="no-buttom-margin">{`NGN ${data.loanAmount.toLocaleString()}`}</p>
              </td>
              {data.guarantor3 ? <td className="pl-0">
                <p className="lighter no-buttom-margin">Guarantor 3</p>
                <p className="no-buttom-margin">{`${data.guarantor3.firstName} ${data.guarantor3.lastName}`}</p>
              </td> : null}
            </tr>
          </tbody>
        </Table>
        <div>
          <h5 className="lighter no-buttom-margin">Comments</h5>
          <p>{data.comments}</p>
        </div>
        <div className="my-4">
          <h5 className="lighter no-buttom-margin">Approvals</h5>
          {data.approver1 ? <p className="no-buttom-margin">{`${data.approver1.firstName} ${data.approver1.lastName}`} approved </p> : null}
          {data.approver2 ? <p className="no-buttom-margin">{`${data.approver2.firstName} ${data.approver2.lastName}`} approved </p> : null}
          {data.approver3 ? <p className="no-buttom-margin">{`${data.approver3.firstName} ${data.approver3.lastName}`} approved </p> : null}
        </div>
        <div>
          <h5 className="lighter no-buttom-margin">Rejections</h5>
          {data.rejecter1 ? <p className="no-buttom-margin">{`${data.rejecter1.firstName} ${data.rejecter1.lastName}`} rejected </p> : null}
          {data.rejecter2 ? <p className="no-buttom-margin">{`${data.rejecter2.firstName} ${data.rejecter2.lastName}`} rejected </p> : null}
          {data.rejecter3 ? <p className="no-buttom-margin">{`${data.rejecter3.firstName} ${data.rejecter3.lastName}`} rejected </p> : null}
        </div>
      </Card.Body>
    </Card>
    ))
  )
};

function AdminLoans(props) {

  const { state } = React.useContext(Store);
  const [userDetailsState, setuserDetailsState] = useState([]);
  const [generalStatState, setgeneralStatState] = useState([]);
  const [allPendingLoansState, setAllPendingLoansState] = useState([]);
  const [allApprovedLoansState, setAllApprovedLoansState] = useState([]);
  const [errors, setErrors] = useState([]);

  function renderErrors(errorsArray) {
    return errorsArray.map(error => <Alert key={error} variant="danger">{error}</Alert>);
  }


  useEffect(() => {
    async function fetchData() {
      const details = await userDetails();
      const coopStats = await generalStats();
      const allLoans = await getLoans();
      if (details.success === true) {
        setuserDetailsState(details.data);
      }
      if (coopStats.success === true) {
        setgeneralStatState(coopStats.data);
      }
      if (allLoans.success === true) {
        const approvedLoans = allLoans.data.filter(loan => loan.status !== 'pending');
        const pendingLoans = allLoans.data.filter(loan => loan.status == 'pending');
        setAllApprovedLoansState(approvedLoans);
        setAllPendingLoansState(pendingLoans);
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

  async function onApprove(id, approval) {
    const result = await loansApproval(id, approval);

    if (result.success === true) {
      return window.location.reload();
    }

    return setErrors([result.message]);
  }

  return (
    <div>
      <Header props={props} />
      <Container>
        <DataHeader
          name={state.user.firstName}
          memberId={userDetailsState.memberId}
          organization={userDetailsState.organization}
          subText="Welcome to your loans admin dashboard!"
          memberStrenght={generalStatState.memberCount}
          admin />
        <Row><Col md={{ span: 6, offset: 3 }}>{renderErrors(errors)}</Col></Row>
        <h5 className="ml-2">Pending loans request</h5>
        <Row className="mr-0 ml-0 mb-5">
          <Request pendingLoans={allPendingLoansState} onApprove={onApprove} />
        </Row>
        <h5 className="ml-2">Previous loans requests</h5>
        <Row className="mr-0 ml-0">
          <PreviousRequest approvedLoans={allApprovedLoansState} />
        </Row>
        <LoansApprovalGuide classStyle="mt-4 mb-2" />
      </Container>
      <Footer />
    </div>
  );
}

AdminLoans.propTypes = {

};

export default AdminLoans;
