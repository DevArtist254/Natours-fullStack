import { connect } from 'react-redux';
import { useState } from 'react';
import axios from 'axios';
import { selectCurrentUser } from './../../redux/users/user.selector';
import UpLoadImg from './../../components/upLoadImg';

const Profile = ({ currentUser, token }) => {
  const [name, setName] = useState({
    fullName: '',
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setName((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  async function onSubmit(e) {
    e.preventDefault();
    try {
      await axios.patch(
        `http://localhost:2540/natours/v1/users/updateMe`,
        name,
        {
          headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="user-nav__content">
      <div>
        <img src={currentUser.photo} alt="profile" width={'360px'} />
        <UpLoadImg />
      </div>
      <div>
        <h1>{currentUser.fullName}</h1>
        <form onSubmit={onSubmit}>
          <input
            onChange={handleChange}
            name="fullName"
            type="text"
            value={name.fullName}
            placeholder="You can update your username here!"
          />
          <input type="submit" />
        </form>
      </div>
      <div>{currentUser.email}</div>
      <div>
        Created Adventures
        <div>All created tours</div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
  token: state.auth.token,
});

//const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps)(Profile);
