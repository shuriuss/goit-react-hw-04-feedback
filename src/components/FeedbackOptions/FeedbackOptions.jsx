// import s from "./Section.module.css";
import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css'

function FeedbackOptions({ onClick, options }) {
  return (
    <>
      <ul className={s.list}>
        {options.map(option => (
          <li key={option} className ={s.item}>
            <button
              name={option}
              type="button"
              onClick={() => onClick(option)}
              className={s.button}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
     
    </>
  );
}

FeedbackOptions.propTypes = {
  onClick: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default FeedbackOptions;
