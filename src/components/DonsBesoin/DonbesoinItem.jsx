import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'

const DonbesoinItem = ({ item }) => {
  const { badge, user, description } = item;

  return (
    <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
      <div style={{ width: '1200px', display: 'flex' }} className="card border-0 bg-light rounded shadow">
        <div className="card-body p-4">
          <span style={{ color: 'white' }} className="badge rounded-pill bg-primary float-md-end mb-3 mb-sm-0">
            {badge}
          </span>
          <div className="mt-3">
            <span style={{ fontWeight: 'bold' }} className="text-muted d-block">
              <i className="fa fa-user" aria-hidden="true" />{' '}
              <Link to="" target="_blank" className="text-muted">
                {user}
              </Link>
            </span>
            <span className="text-muted d-block">{description}</span>
          </div>
          <div className="mt-3">
            <Link to="/prop-don" className="btn btn-primary">
              Proposer un don
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonbesoinItem;
