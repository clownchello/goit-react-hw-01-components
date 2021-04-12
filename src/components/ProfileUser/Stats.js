import React from 'react';
import style from './Stats.module.scss';

const Stats = ({ followers, views, likes }) => (
  <ul className={style.statsList}>
    <li className={style.statsItem}>
      <span className={style.label}>Followers</span>
      <span className={style.quantity}>{followers}</span>
    </li>
    <li className={style.statsItem}>
      <span className={style.label}>Views</span>
      <span className={style.quantity}>{views}</span>
    </li>
    <li className={style.statsItem}>
      <span className={style.label}>Likes</span>
      <span className={style.quantity}>{likes}</span>
    </li>
  </ul>
);

export default Stats;
