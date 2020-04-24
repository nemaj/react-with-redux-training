import React from 'react';
import './style.css';
import Articles from '../Articles';
import Toolbar from '../Toolbar';

class App extends React.Component {
	constructor() {
		super();

	  this.state = {
	  	isInvalid: false,
	  	showResult: false,
	  	articles: []
	  };
	}

  toolbarResults = (val) => {
  	const { isInvalid, showResult, articles } = val;
  	this.setState({
			isInvalid,
			showResult,
			articles
		})
  }

  renderResults() {
  	if (this.state.isInvalid) {
  		return (
  			<div className="ui segment" style={{ marginTop: '20px' }}>
  				Please complete the parameters
  			</div>
  		);
  	}

		if (this.state.showResult) {
	  	return (
	  		<div className="ui">
		  		<div className="ui segment" style={{ marginTop: '20px' }}>
		  			<p><b>Search Results</b></p>
		  			Found {this.state.articles.length} articles
		  		</div>

		  		<div style={{ marginTop: '20px' }}>
		  			<Articles articles={this.state.articles} />
		  		</div>
	  		</div>
	  	);
	  }
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '20px' }}>
      	<h3>Jamen News App</h3>
      	<Toolbar onSubmit={this.toolbarResults} />
				{this.renderResults()}
      </div>
    );
  }
}

export default App;
