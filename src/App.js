import { useState } from 'react';
import { data } from './data';
import './App.css';

function App() {

const [restaurants, setRestaurants] = useState(data);
const [showText, setShowText] = useState(false);

const removeRestaurant = (id) => {
  let newRestaurants = restaurants.filter(restaurant=>restaurant.id !== id);
  setRestaurants(newRestaurants)
}

const showTextClick = (item) => {
  item.showMore = !item.showMore;
  setShowText(!showText)
}



  return (
    <div>

  <div className='container'>
        <h2>Top {restaurants.length} best restaurants in Chicago</h2>
      </div>

      {restaurants.map((element => {
        const {id, place, picture, about, showMore} = element;
    return (
     <div key={id}>
        <div className='container'>
          <img src={picture} width="500px" alt="restaurant"/>
        </div>

        <div className='container'>
          <h2>{id} - {place}</h2>
        </div>

        <div className='container'>
          <p>{showMore ? about : about.substring(0, 220) + "..."};
          <button className='btn' onClick={ () => showTextClick(element)}>{showMore ? "Show less" : "Show more"}</button>
          </p>
        </div>

        <div className='container'>
          <button onClick={ () =>removeRestaurant(id)}>Remove</button>
        </div>
        </div>
    )
      }))}

      <div className='container'>
        <button onClick={ () => setRestaurants ([])}>Delete All</button>
      </div>
      </div>

  );
}

export default App;
