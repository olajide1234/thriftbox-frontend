import React from 'react';
import PropTypes from 'prop-types';
import { join } from 'path';

class DataHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { subText, admin, name, joinDate, memberId, organization, memberStrenght } = this.props;
    return (
      <div className="az-dashboard-nav">
        <nav className="nav">
          <span>
            <h4>Hi {name}!</h4>
            <p>{subText}</p>
          </span>
        </nav>

        <nav className="nav">
          {admin ? (
            <p className="nav-link mb-0" href="#">
              <i className="far fa-save" />
              <span>
                <p className="lighter">Member strength</p>
                <p>{memberStrenght}</p>
              </span>
            </p>
          ) : (
              <p className="nav-link mb-0" href="#">
                <i className="far fa-save" />
                <span>
                  <p className="lighter">Join date</p>
                  <p>{joinDate}</p>
                </span>
              </p>
            )}
          <p className="nav-link mb-0" href="#">
            <i className="far fa-file-pdf" />
            <span>
              <p className="lighter">Organisation</p>
              <p>{organization}</p>
            </span>
          </p>
          <p className="nav-link mb-0" href="#">
            <i className="far fa-envelope" />
            <span>
              <p className="lighter">Member ID</p>
              <p>{memberId}</p>
            </span>
          </p>
          <a className="nav-link" href="#"><i className="fas fa-ellipsis-h" /></a>
        </nav>
      </div>
    );
  }
}

DataHeader.defaultProps = {
  subText: '',
  admin: false
};

DataHeader.propTypes = {
  subText: PropTypes.string,
  admin: PropTypes.string
};

export default DataHeader;
