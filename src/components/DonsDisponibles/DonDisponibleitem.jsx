import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
const DondisponibleItem = ({ donation }) => {
  const { type, title, description, condition } = donation;

  return (
    <>
      <div className="ibox-content">
        <div className="table-responsive">
          <table className="table shoping-cart-table">
            <tbody>
              <tr>
                <td width={30}></td>
                <td className="desc">
                  <span style={{ color: 'white' }} className="badge rounded-pill bg-primary float-md-end mb-3 mb-sm-0">
                    {type}
                  </span>
                  <h4 style={{ fontWeight: "bold" }} href="#" className="text-navy">
                    {title}
                  </h4>
                  <p className="small">
                    {description}
                  </p>
                  <dl className="small m-b-none">
                    <dt>Etat</dt>
                    <dd>{condition}</dd>
                  </dl>
                  <div className="m-t-sm"></div>
                </td>
                <td>
                  <s className="small text-muted" />
                </td>
                <td width={65}>
                  <Link to={'/demande-don'} style={{ backgroundColor: "#1181b2", color: "white" }} className="btn pull-right">
                    Demander
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default DondisponibleItem;
