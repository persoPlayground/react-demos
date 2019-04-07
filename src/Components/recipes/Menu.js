import React from 'react';
import Recipe from './Recipe';
import axios from 'axios';
import '../styles.css';

class Menu extends React.Component {
   constructor() {
      super();
      this.state = {
         recipes: []
      }
   }

   async componentDidMount(){
     const resp = await axios('http://localhost:3001/recipes');
     this.setState({
        recipes: resp.data
     })

   }

   render() {
      const {recipes} = this.state;
      return (
         <article className="menu">
<header>
    <h1> Delicious Recipes </h1>
     </header> 
     <div className = "recipes" >
      {
          recipes . map (( recipe , i ) => < Recipe key = { i } {... recipe } /> ) 
          } 
</div>
         </article>
      )
   }
}

export default Menu;



///ToDO   react router separate component