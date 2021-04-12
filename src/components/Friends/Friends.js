import React from 'react';
import s from './Friends.module.scss';

const FriendListItem = ({ avatar, name, isOnline, id }) => {
  const statusClassName = isOnline ? s.online : s.offline;
  return (
    <li key={id} className={s.item}>
      <span className={statusClassName}></span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
};

const FriendList = ({ friends }) => {
  return <ul className={s.friendList}>{friends.map(FriendListItem)} </ul>;
};

export default FriendList;
