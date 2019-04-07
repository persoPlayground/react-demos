import React from 'react';
import PropTypes from 'prop-types';

import IngredientList from './IngredientList';
import Instructions from './Instructions';

const Recipe = ({name, ingredients, steps}) => 
<section className="recipe">
<h1>{name}</h1>
<IngredientList list={ingredients} />
<Instructions title="Cooking Instruction" steps={steps} />
</section>

Recipe.propTypes = {
    name: PropTypes.string.isRequired,
    ingredients: PropTypes.array.isRequired,
    steps: PropTypes.array.isRequired
}

export default Recipe;