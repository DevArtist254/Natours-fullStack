import { connect } from 'react-redux';
//import { Icon } from '@iconify/react';
import LeadGuide from './../img/users/user-19.jpg';
import TourGuide from './../img/users/user-18.jpg';
import Intern from './../img/users/user-17.jpg';
// import Logo from './../img/logo-white.png';
import formatDate from './../utils/formatDate';

function Tour({ data }) {
  return (
    <main className="tour">
      <div
        className="tour__intro"
        style={{ backgroundImage: `url(${data.imageCover})` }}
      >
        <div className="tour__intro--bdg">
          <div className="tour__intro--about">
            <h3 className="tour__intro--terHeader">About</h3>
            <p className="tour__intro--decription">{data.description}</p>
          </div>
        </div>
        <div className="tour__intro--footer">
          <h4 className="tour__intro--footerTerHeader">
            {data.duration}
            <strong>days</strong>
          </h4>
          <h2 className="tour__intro--footerSubHeader">
            <strong>Difficulty</strong> : {data.difficulty}
          </h2>
          <h1 className="tour__intro--footerHeader">{data.name}</h1>
        </div>
      </div>

      <div className="tour__booked">
        <div className="tour__booked--bookings">
          <h2 className="tour__booked--header">Bookings</h2>
          <div className="tour__booked--content">
            <div className="tour__booked--list">
              <h3 className="tour__booked--subHeader">Dates</h3>
              <ul className="tour__booked--unlist">
                <li className="tour__booked--items">
                  {formatDate(data.startDates[0])}
                </li>
                <li className="tour__booked--items">
                  {formatDate(data.startDates[0])}
                </li>
                <li className="tour__booked--items">
                  {formatDate(data.startDates[0])}
                </li>
              </ul>
            </div>
            <div className="tour__booked--list">
              <h3 className="tour__booked--subHeader">Participants</h3>
              <ul className="tour__booked--unlist">
                <li className="tour__booked--items">2 / {data.maxGroupSize}</li>
                <li className="tour__booked--items">5 / {data.maxGroupSize}</li>
                <li className="tour__booked--items">4 / {data.maxGroupSize}</li>
              </ul>
            </div>
          </div>
          <button className="pri-btn">Add to cart : $200</button>
        </div>
        <div className="tour__booked--guides">
          <h2 className="tour__booked--header">Your Tour Guides</h2>
          <div className="tour__booked--guider">
            <div className="tour__booked--user">
              <img
                src={LeadGuide}
                alt="Profile"
                className="tour__booked--image"
              />
              <h3 className="tour__booked--profile">Guide 1</h3>
            </div>
            <div className="tour__booked--user">
              <img
                src={TourGuide}
                alt="Profile"
                className="tour__booked--image"
              />
              <h3 className="tour__booked--profile">Guide 1</h3>
            </div>
            <div className="tour__booked--user">
              <img src={Intern} alt="Profile" className="tour__booked--image" />
              <h3 className="tour__booked--profile">Guide 1</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="tour__location">
        <div className="tour__location--map">
          <img
            src="./images/maps.jpg"
            alt="google maps"
            className="tour__location--maped"
          />
        </div>
        <h1 className="tour__location--header">Fanbase</h1>
      </div>

      <div className="tour__memories">
        <h1 className="tour__memories--header">Memories</h1>

        <div className="tour__memories--images">
          <span
            className="iconify tour__memories--arrow"
            data-icon="bx:left-arrow"
            style={{ color: 'black', fontSize: '14.6rem' }}
          ></span>
          <img src={data.images} alt="tour" />
          <span
            className="iconify iconify tour__memories--arrow"
            data-icon="bx:right-arrow"
            style={{ color: 'black', fontSize: '14.6rem' }}
          ></span>
        </div>
      </div>

      <div className="tour__share">
        <h1 className="tour__share--header">Share your experinces</h1>
        <div className="tour__share--btn">
          <button className="pri-btn">Upload Images</button>
          <button className="pri-btn">Reviews</button>
        </div>
      </div>

      <div className="tour__reviews">
        <div className="tour__reviews--header">Reviews</div>

        <div className="tour__reviews--main">
          <div className="tour__reviews--content">
            <img
              src="./images/user-91.jpg"
              alt="user"
              className="tour__reviews--image"
            />
            <div className="tour__reviews--text">
              <h2 className="tour__reviews--subHeader">
                {data.reviews[0].createdBy.fullName}
              </h2>
              <p className="tour__reviews--message">
                {data.reviews[0].reviews}
              </p>
              {/* <div className="tour__reviews--stars">
                <span
                  className="iconify"
                  data-icon="bxs:star"
                  style={{color: "black", fontSize: "14.6rem"}}
                ></span>
                <span
                  className="iconify"
                  data-icon="bxs:star"
                  style="color: #ffd365; font-size: 3rem;"
                ></span>
                <span
                  className="iconify"
                  data-icon="bxs:star"
                  style="color: #ffd365; font-size: 3rem;"
                ></span>
                <span
                  className="iconify"
                  data-icon="bxs:star"
                  style="color: #ffd365; font-size: 3rem;"
                ></span>
                <span
                  className="iconify"
                  data-icon="bxs:star"
                  style="color: #ffd365; font-size: 3rem;"
                ></span>
              </div> */}
            </div>
          </div>
          <div className="tour__reviews--content">
            <img
              src="./images/user-91.jpg"
              alt="user"
              className="tour__reviews--image"
            />
            <div className="tour__reviews--text">
              <h2 className="tour__reviews--subHeader">
                {data.reviews[1].createdBy.fullName}
              </h2>
              <p className="tour__reviews--message">
                {data.reviews[1].reviews}
              </p>
              {/* <div className="tour__reviews--stars">
                <span
                  className="iconify"
                  data-icon="bxs:star"
                  style="color: #ffd365; font-size: 3rem;"
                ></span>
                <span
                  className="iconify"
                  data-icon="bxs:star"
                  style="color: #ffd365; font-size: 3rem;"
                ></span>
                <span
                  className="iconify"
                  data-icon="bxs:star"
                  style="color: #ffd365; font-size: 3rem;"
                ></span>
                <span
                  className="iconify"
                  data-icon="bxs:star"
                  style="color: #ffd365; font-size: 3rem;"
                ></span>
                <span
                  className="iconify"
                  data-icon="bxs:star"
                  style="color: #ffd365; font-size: 3rem;"
                ></span>
              </div> */}
            </div>
          </div>
          <div className="tour__reviews--content">
            <img
              src="./images/user-91.jpg"
              alt="user"
              className="tour__reviews--image"
            />
            <div className="tour__reviews--text">
              <h2 className="tour__reviews--subHeader">User Name</h2>
              <p className="tour__reviews--message">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                aliquam temporibus labore veniam suscipit ipsam eveniet quod
                illo, blanditiis deserunt voluptatibus molestias dicta quia
                repellendus voluptate unde omnis ullam similique.
              </p>
              {/* <div className="tour__reviews--stars">
                <span
                  className="iconify"
                  data-icon="bxs:star"
                  style="color: #ffd365; font-size: 3rem;"
                ></span>
                <span
                  className="iconify"
                  data-icon="bxs:star"
                  style="color: #ffd365; font-size: 3rem;"
                ></span>
                <span
                  className="iconify"
                  data-icon="bxs:star"
                  style="color: #ffd365; font-size: 3rem;"
                ></span>
                <span
                  className="iconify"
                  data-icon="bxs:star"
                  style="color: #ffd365; font-size: 3rem;"
                ></span>
                <span
                  className="iconify"
                  data-icon="bxs:star"
                  style="color: #ffd365; font-size: 3rem;"
                ></span>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

const mapStateToProps = ({ tour }) => ({
  data: tour.tour,
});

export default connect(mapStateToProps)(Tour);
