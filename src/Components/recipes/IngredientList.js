import React from 'react';
import Ingredient from './Ingredient'
import PropTypes from 'prop-types';

const IngredientList = ({list}) => 
<ul className="IngredientList">
{
    list.map((ingredient, index) =>  <Ingredient key={index} {...ingredient} />)
}
</ul>

IngredientList.propTypes = {
    list: PropTypes.array.isRequired,
    
}

IngredientList.defaultProps = {
    list: []
}
export default IngredientList;