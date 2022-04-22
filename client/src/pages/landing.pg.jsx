import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

const videoLink =
  'https://firebasestorage.googleapis.com/v0/b/natours-254.appspot.com/o/A%20couple%20running%20towards%20the%20sea.mp4?alt=media&token=cda13bf3-d296-4c6e-a608-43b644eea87b';

function LandingPG() {
  return (
    <div className="bdgBlack">
      <div className="footer">
        <div className="footer__slogan">
          <Link to="/" className="footer__slogan--link link-primary">
            {' '}
            Top Tours{' '}
          </Link>
          <h2 className="footer__slogan--sub-header sub-header">
            Brighten your days
          </h2>
          <h1 className="footer__slogan--header header">Let's get lost</h1>
        </div>
        <div className="footer__cta">
          <div className="footer__cta--link">
            <Link to="/overview" className="link-primary">
              All tours
            </Link>
            <Icon
              className="iconify"
              icon="akar-icons:arrow-right"
              style={{ color: '#000', fontSize: '3.5rem' }}
            />
          </div>
        </div>
      </div>

      <video className="video" autoPlay loop controls="" muted>
        <source src={videoLink} type="video/mp4" />
      </video>
    </div>
  );
}

export default LandingPG;
