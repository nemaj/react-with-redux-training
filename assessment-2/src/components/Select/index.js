import React from 'react';

class Select extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			value: props.defaultValue
		}
	}

  handleChange = (event) => {
  	this.setState({ value: event.target.value });
    this.props.onChange(event.target.value);
  }

  renderPlaceholder() {
  	if (this.props.label) {
  		return <option value="">{this.props.label}</option>;
  	}
  }

	render() {
		return (
			<form className="ui form">
		    <div className="field">
		      <select
		      	className="ui fluid dropdown"
		      	value={this.state.value}
		      	onChange={this.handleChange}
		      >
		        {this.renderPlaceholder()}
	          {this.props.options.map((item, idx) => (
		        	<option
		        		value={item.value}
		        		key={idx}
		        	>
		        		{item.label}
		        	</option>
	          ))}
		      </select>
		    </div>
		  </form>
		);
	}
}

export default Select;
