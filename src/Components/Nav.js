import React from 'react'
import { Link } from 'react-router-dom'

export default () => 
<div className="nav">
<ul>
    <li><Link to="/">Home</Link></li>
    <li><Link data-test-id="recipes-link" to="/recipes">recipes</Link></li>
    <li><Link to="/color"> color</Link></li>
    <li><Link to="/rating">rating</Link></li>
</ul>
</div>