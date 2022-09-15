import s from './Statistics.module.css'
import PropTypes from 'prop-types';



function Statistics({good, neutral, bad, total, positive}) {
    return(
        <>
        <ul className={s.list}>
          <li className={s.item}>Good: {good}</li>
          <li className={s.item}>Neutral: {neutral}</li>
          <li className={s.item}>Bad: {bad}</li>
          <li className={s.item}>Total: { total }</li>
          <li className={s.item}>Positive feedbsck: {positive}%</li>
        </ul>
        </>
    )
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positive:PropTypes.number.isRequired,
};

export default Statistics