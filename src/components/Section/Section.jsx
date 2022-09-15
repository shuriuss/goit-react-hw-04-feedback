import s from "./Section.module.css";
import PropTypes from 'prop-types';

function Section ({title, children}) {
    return (
        <>
            <h1 className={s.title}>{title}</h1>
            { children }
        </>
    )
    
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
}

export default Section