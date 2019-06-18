import React from 'react';

class DataHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="az-dashboard-nav">
        <nav className="nav">
          <a className="nav-link" data-toggle="tab" href="#">
            <span>
              <h4>Hi Habib!</h4>
              <p>Here is a summary of your activities!</p>
            </span>
          </a>
        </nav>

        <nav className="nav">
          <a className="nav-link" href="#">
            <i className="far fa-save" />
            {' '}
            <span>
              <p className="lighter">Join date</p>
              <p>Jan 10, 2019</p>
            </span>
          </a>
          <a className="nav-link" href="#">
            <i className="far fa-file-pdf" />
            {' '}
            <span>
              <p className="lighter">Organisation</p>
              <p>Andela</p>
            </span>
          </a>
          <a className="nav-link" href="#">
            <i className="far fa-envelope" />
            <span>
              <p className="lighter">Member ID</p>
              <p>1234</p>
            </span>
          </a>
          <a className="nav-link" href="#"><i className="fas fa-ellipsis-h" /></a>
        </nav>
      </div>
    );
  }
}

export default DataHeader;
