import React from 'react';
import Proptypes from 'prop-types';

const Star = ({selected=false, onClick=f=>f}) =>
<div className={selected ? 'star selected': 'star'}
onClick={onClick}>
</div>

Star.propTypes = {
    selected: Proptypes.bool,
    onClick: Proptypes.func,
}
export default Star;