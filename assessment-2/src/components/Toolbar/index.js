import React from 'react';
import SearchBar from '../SearchBar';
import Select from '../Select';
import axios from 'axios';

class Toolbar extends React.Component {
	constructor(props) {
		super(props);

	  this.state = {
	  	countries: [
	  		{
	  			label: 'Philippines',
	  			value: 'ph'
	  		},
	  		{
	  			label: 'United States',
	  			value: 'us'
	  		},
	  		{
	  			label: 'Russia',
	  			value: 'ru'
	  		},
	  		{
	  			label: 'China',
	  			value: 'cn'
	  		},
	  		{
	  			label: 'Australia',
	  			value: 'au'
	  		},
	  		{
	  			label: 'Canada',
	  			value: 'ca'
	  		},
	  		{
	  			label: 'Germany',
	  			value: 'de'
	  		},
	  		{
	  			label: 'India',
	  			value: 'in'
	  		},
	  		{
	  			label: 'New Zealand',
	  			value: 'nz'
	  		},
	  		{
	  			label: 'Switzerland',
	  			value: 'ch'
	  		}
	  	],
	  	types: [
	  		{
	  			label: 'Everything',
	  			value: 'everything'
	  		},
	  		{
	  			label: 'Top Headlines',
	  			value: 'top-headlines'
	  		}
	  	],
	  	countryValue: '',
	  	typeValue: 'top-headlines'
	  };
	}

  onChangeCountry = (val) => {
  	this.setState({ countryValue: val });
  }

  onChangeTypes = (val) => {
  	this.setState({ typeValue: val });
  }

  onSearchSubmit = (text) => {
  	if (!this.state.countryValue || !text) {
			this.props.onSubmit({
				isInvalid: true,
				showResult: false,
				articles: []
			})
  		return;
  	}
  	this.getNews(text);
  }

  getNews = (keyword) => {
  	const APIKey = 'c63a93d0e35d4428b7fb8ec9cb3f2a65';
		axios.get(`http://newsapi.org/v2/${this.state.typeValue}`,
			{
				params: {
					q: keyword,
					country: this.state.countryValue,
					sortBy: 'publishedAt',
					apiKey: APIKey
				}
			})
			.then(res => {
				if (res && res.data && res.data.articles) {
					this.props.onSubmit({
						isInvalid: false,
						showResult: true,
						articles: res.data.articles
					})
				}
			});
  }

	render() {
		return (
			<div className="ui grid">
  			<div className="three column row">
    			<div className="column">
	    			<Select
	    				label="Select a country"
	    				defaultValue={this.state.countryValue}
	    				options={this.state.countries}
	    				onChange={this.onChangeCountry}
	    			/>
    			</div>
    			<div className="column">
    				<Select
	    				defaultValue={this.state.typeValue}
    					options={this.state.types}
	    				onChange={this.onChangeTypes}
	    			/>
    			</div>
    			<div className="column">
    				<SearchBar onSubmit={this.onSearchSubmit} />
    			</div>
				</div>
			</div>
		);
	}
}

export default Toolbar;
