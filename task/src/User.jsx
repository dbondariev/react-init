import React from 'react';

import './user.scss';

const User = ({name, age}) => {
  return (
    <li className="user">
      <span className="user__name">{ name }</span>
      <span className="user__age">{ age }</span>
    </li>
  )
}

export default User;