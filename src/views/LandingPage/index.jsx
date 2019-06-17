import React from 'react'

const LandingPage = () => {

  return (

    <div>
      <body className="az-body">

        <div className="az-signup-wrapper">
          <div className="az-column-signup-left">
            <div>
              <i className="typcn typcn-chart-bar-outline"></i>
              <h1 className="az-logo">ThriftB<span>o</span>x</h1>
              <h5>A simple cooperative and thrift management application</h5>
              <p>ThriftBox is a simple cooperative and thrift management application built with the user in mind. ThriftBox
                allows you to automate management, administration and accounting of cooperative and thrift societies. Users can signin
                to view their savings and carry our multiple actions.
              </p>
              <p>Signin at the right to get started.</p>
              <a href="/" className="btn btn-outline-indigo">Learn More</a>
            </div>
          </div>
          <div className="az-column-signup">
            <h1 className="az-logo">ThriftB<span>o</span>x</h1>
            <div className="az-signup-header">
              <h2>Get Started</h2>
              <h4>Signin with your email and password</h4>

              <form action="page-profile.html">
                <div className="form-group">
                  <label>Email</label>
                  <input type="text" className="form-control" placeholder="Enter your email" />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input type="password" className="form-control" placeholder="Enter your password" />
                </div>
                <button className="btn btn-az-primary btn-block">Sign in</button>
              </form>

            </div>
            <div className="az-signup-footer">
              <p>Don't have an account? <a href="/">Sign Up</a></p>
            </div>
          </div>
        </div>

      </body>
    </div>

  )
}

export default LandingPage; 
