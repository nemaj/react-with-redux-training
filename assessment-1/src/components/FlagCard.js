import React from 'react';
import UserDetail from './UserDetail';
import './FlagCard.css';

const FlagCard = props => {
  return (
    <div className="card">
      <UserDetail details={props.details} />
      <div className="extra content">
        <div className="image">
          <img src={`https://www.countryflags.io/${props.details.countryCode}/flat/64.png`} alt="" />
        </div>
        <div className="description">
          <p className="text">
            {props.details.content}
          </p>
        </div>
      </div>
    </div>
  );
}

export default FlagCard;