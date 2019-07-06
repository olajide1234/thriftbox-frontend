import React from 'react';
import PropTypes from 'prop-types';

class DataHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { subText } = this.props;
    return (
      <div className="az-dashboard-nav">
        <nav className="nav">
          <a className="nav-link" data-toggle="tab" href="#">
            <span>
              <h4>Hi Habib!</h4>
              <p>{subText}</p>
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

DataHeader.defaultProps = {
  subText: '',
};

DataHeader.propTypes = {
  subText: PropTypes.string
};

export default DataHeader;
