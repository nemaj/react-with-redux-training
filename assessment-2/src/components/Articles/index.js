import React from 'react';

class Articles extends React.Component {
	renderImage(urlToImage) {
		if (urlToImage) {
			return (
				<div className="image">
		      <img src={urlToImage} alt="" />
		    </div>
			);
		}
	}

	render() {
		return (
			<div className="ui items">
		   	{this.props.articles.map((article, idx) => (
				  <div className="item" key={idx} style={{ marginBottom: '30px' }}>
				    {this.renderImage(article.urlToImage)}
				    <div className="content">
				      <a
				      	className="header"
				      	rel="noopener noreferrer"
				      	target="_blank"
				      	href={article.url}
				      >
				      	{article.title}
				      </a>
				      <div className="description">
				        <p>
									{article.description}
				        </p>
				      </div>
				    </div>
				  </div>
		    ))}
			</div>
		);
	}
}

export default Articles;
