import React from 'react';
import './UserDetails.css';

const UserDetail = props => {
  console.log('details', props);

  return (
    <div className="details">
      <div className="email">
        {props.details.email}
      </div>
      <div className="job-title">
        {props.details.jobTitle}
      </div>
      <img src={props.details.avatar} alt="" />
    </div>
  );
}

export default UserDetail;