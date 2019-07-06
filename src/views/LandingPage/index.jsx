import React, { useState } from 'react';
import {
  Container, Row, Col, Alert
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import Loader from '../../components/Loader';
import { Store } from '../../data/store';
import { loginUser } from '../../data/actions/auth';

const LandingPage = ({ history, loading }) => {
  const { state, dispatch } = React.useContext(Store);

  React.useEffect(() => {
    state.episodes.length === 0
  && loginUser(dispatch);
  });

  const [userCredentials, setUserCredentials] = useState({
    email: null,
    password: null
  });

  // const [errors, setErrors] = useState([]);

  function updateLocalState(event) {
    setUserCredentials({ ...userCredentials, [event.target.name]: event.target.value });
  }

  function renderErrors(errorsArray) {
    return errorsArray.map(error => <Alert key={error} variant="danger">{error}</Alert>);
  }

  async function onSubmit(event) {
    event.preventDefault();
    // const loginRes = await loginUser(dispatch, userCredentials);
    return history.push('/dashboard');

    // if (!Array.isArray(loginRes)) {
    //   return history.push('/');
    // }
    // return setErrors(loginRes);
  }

  return (
    <div>
      {loading && <Loader />}
      <Container>
        <Row><Col md={{ span: 6, offset: 3 }}>{renderErrors(errors)}</Col></Row>
      </Container>
      <body className="az-body">
        <div className="az-signup-wrapper">
          <div className="az-column-signup-left">
            <div>
              <i className="typcn typcn-chart-bar-outline" />
              <h1 className="az-logo">
                ThriftB
                <span>o</span>
                x
              </h1>
              <h5>A simple cooperative and thrift management application</h5>
              <p>
                ThriftBox is a simple cooperative and thrift management application
                built with the user in mind. ThriftBox
                allows you to automate management, administration and accounting of
                cooperative and thrift societies. Users can signin
                to view their savings and carry our multiple actions.
              </p>
              <p>Signin at the right to get started.</p>
              <a href="/" className="btn btn-outline-indigo">Learn More</a>
            </div>
          </div>
          <div className="az-column-signup">
            <h1 className="az-logo">
              ThriftB
              <span>o</span>
              x
            </h1>
            <div className="az-signup-header">
              <h2>Get Started</h2>
              <h4>Signin with your email and password</h4>

              <form onSubmit={onSubmit}>
                <div className="form-group">
                  <label style={{ display: 'block' }}>
                    Email
                    <input type="text" className="form-control" placeholder="Enter your email" onChange={updateLocalState} />
                  </label>
                </div>
                <div className="form-group">
                  <label style={{ display: 'block' }}>
                    Password
                    <input type="password" className="form-control" placeholder="Enter your password" onChange={updateLocalState} />
                  </label>
                </div>
                <button className="btn btn-az-primary btn-block">Sign in</button>
              </form>

            </div>
            <div className="az-signup-footer" />
          </div>
        </div>

      </body>
    </div>
  );
};

LandingPage.propTypes = {
  history: PropTypes.object.isRequired,
  loading: PropTypes.object.isRequired
};

export default LandingPage;
