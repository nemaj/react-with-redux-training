import React from 'react';

const Articles = (props) => {
	return (
		<div className="ui items">
	   	{props.articles.map((article, idx) => (
			  <div className="item" key={idx} style={{ marginBottom: '30px' }}>
			    <div className="image">
			      <img src={article.urlToImage} alt="" />
			    </div>
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

export default Articles;
