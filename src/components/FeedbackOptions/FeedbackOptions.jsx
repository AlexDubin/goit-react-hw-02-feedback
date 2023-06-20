import React from 'react';
import css from './FeedbackOptions.module.css';
import { Emojione } from 'react-emoji-render';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={css['btn-list']}>
      {options.map(option => (
        <li key={option} className={css['btn-item']}>
          <button
            onClick={() => onLeaveFeedback(option)}
            type="button"
            className={css['fdb-btn']}
          >
            {option.charAt(0).toUpperCase() + option.slice(1)}
            {option === 'good' && <Emojione text="😊" />}
            {option === 'neutral' && <Emojione text="😐" />}
            {option === 'bad' && <Emojione text="😞" />}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default FeedbackOptions;
