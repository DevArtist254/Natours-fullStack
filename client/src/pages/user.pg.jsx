import { connect } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';

const CurrentUser = ({ currentUser }) => {
  return (
    <div className="user-main">
      <div className="user-main__nav">
        <Link className="user-main__nav--link" to="/me/profile">
          Profile
        </Link>
        <Link className="user-main__nav--link" to="/me/studio">
          Studio
        </Link>
        <Link className="user-main__nav--link" to="/me/purchases">
          Purchases
        </Link>
        <Link className="user-main__nav--link" to="/me/alerts">
          Alerts
        </Link>
        <Link className="user-main__nav--link" to="/me/reveiws">
          Reviews
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

const mapStateToProps = () => ({});

export default connect(mapStateToProps)(CurrentUser);
