import { connect } from 'react-redux';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { loadToursAsync } from './redux/tours/tours.actions';
import { loadCurrentUser } from './redux/users/users.actions';
import Spinner from './components/withSpinner.comp';
import Nav from './components/nav.comp';
import Overview from './pages/overview.pg';
import CurrentUser from './pages/user.pg';
import Login from './pages/login.pg';
import Signup from './pages/signup.pg';
import './App.css';
import Google from './pages/google.pg';
import Tour from './components/tour.comp';
import LandingPG from './pages/landing.pg';
import Search from './pages/search.pg';
import SearchByName from './pages/searchPages/searchByPrice.pg';
import SearchByDifficulty from './pages/searchPages/searchByPrice.pg';
import SearchByDuration from './pages/searchPages/searchByPrice.pg';
import SearchByPrice from './pages/searchPages/searchByPrice.pg';
import CheckOut from './pages/checkout.pg';
import Purchases from './pages/userDashboard/purchases.pg';
import Alert from './pages/userDashboard/alerts.pg';
import Profile from './pages/userDashboard/profile.pg';
import Studio from './pages/userDashboard/studio.pg';
import Reviews from './pages/userDashboard/reveiws.pg';

const OverviewWithSpinner = Spinner(Overview);

function App({ isloading, tours, loadItems, loadCurrentUser, token }) {
  useEffect(() => {
    loadItems();
    loadCurrentUser(token);
  }, [loadItems, loadCurrentUser, token]);

  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<LandingPG />} />
        <Route
          path="/overview"
          element={<OverviewWithSpinner isloading={isloading} cards={tours} />}
        />
        <Route path="/tour" element={<Tour />} />
        <Route path="/search" element={<Search />}>
          <Route path="/search/by-name" element={<SearchByName />} />
          <Route
            path="/search/by-difficulty"
            element={<SearchByDifficulty />}
          />
          <Route path="/search/by-duration" element={<SearchByDuration />} />
          <Route path="/search/by-price" element={<SearchByPrice />} />
        </Route>
        <Route path="/me" element={<CurrentUser />}>
          <Route path="/me/purchases" element={<Purchases />} />
          <Route path="/me/studio" element={<Studio />} />
          <Route path="/me/alerts" element={<Alert />} />
          <Route path="/me/profile" element={<Profile />} />
          <Route path="/me/reveiws" element={<Reviews />} />
        </Route>
        <Route path="/login" element={<Login />}>
          <Route path="google" element={<Google />} />
        </Route>
        <Route path="/signup" element={<Signup />} />
        <Route path="/checkout" element={<CheckOut />} />
      </Routes>
    </div>
  );
}

const mapStateToProps = ({ tours, auth }) => ({
  isloading: tours.isLoading,
  tours: tours.tours,
  token: auth.token,
});

const mapDispatchToProps = (dispatch) => ({
  loadItems: () => dispatch(loadToursAsync()),
  loadCurrentUser: (token) => dispatch(loadCurrentUser(token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
