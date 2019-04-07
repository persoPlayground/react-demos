import React from 'react';
import PropTypes from 'prop-types';

const Instructions = ({title, steps}) => 
<section className="instructions">
<h2>{title}</h2>
{
    steps.map((step, index) => <p key={index}>{step}</p>)
}
</section>

Instructions.propTypes = {
    title: PropTypes.string.isRequired,
    steps: PropTypes.array.isRequired
}
export default Instructions;