import React from 'react';
import Proptypes from 'prop-types';

import Star from './Star';

class StarRating extends React.Component{

    constructor(){
        super();
        this.state = {starSelected: 0 }
    }
    render(){
        const { totalStar } = this.props;
        const { starSelected } = this.state;
        return(
            <div className="rating">
                {
                  [ ...Array(totalStar)].map((n,k) => 
                  <Star key={k}  selected={k< starSelected ? true : false} />
                  )
                }
            </div>
        );
    }
}
StarRating.propTypes = {
    totalStar: Proptypes.number
}
StarRating.defaultProps ={
    totalStar: 5
}

export default StarRating;