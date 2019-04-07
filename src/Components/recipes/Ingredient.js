import React from 'react';
import PropTypes from 'prop-types';

const Ingredient = ({amount, mesurement, name}) => 
<li>
    <span className="amount">{amount}</span>
    <span className="mesurement">{mesurement}</span>
    <span className="name">{name}</span>
</li>

Ingredient.propTypes = {
    amount: PropTypes.number.isRequired,
    mesurement: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}

Ingredient.defaultProps ={
    amount: 0,
    mesurement: 'n/a',
    name: 'n/a'
}
export default Ingredient;