import React from 'react';
import './App.css';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';

const business = {
  imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
}

const businesses = [ business, business, business, business, business, business];

/*
class Business extends React.Component {
   render(){
        return(
          <div className="Business">
            <div className="image-container">
                <img src={this.imageSrc} alt=''/>
            </div>
            <h2>{this.name}</h2>
            <div className="Business-information">
                <div className="Business-address">
                  <p>{this.address}</p>
                  <p>{this.city}</p>
                  <p>{this.state} {this.zipCode}</p>
                </div>
                <div className="Business-reviews">
                  <h3>{this.category}</h3>
                  <h3 className="rating">{this.rating}</h3>
                  <p>{this.reviewCount}</p>
                </div>
           </div>
        </div>
     );
   }
}
*/

class App extends React.Component {
	searchYelp(term, location, sortBy) {
		console.log(`Searching Yelp with ${term}, ${location}, ${sortBy}`);
	}
	render() {
	return (
		<div className="App">
			<h1>ravenous</h1>
			<SearchBar searchYelp={this.searchYelp}/>
			<BusinessList businesses={businesses}/>
		</div>
	);
	}
}

export default App;
