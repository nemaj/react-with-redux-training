import React from 'react';

class SearchBar extends React.Component {
  state = { email: '' };

  onFormSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state.email);
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Search</label>
            <input
              type="text"
              value={this.state.email}
              onChange={e => this.setState({ email: e.target.value})}
            />
          </div>
        </form>
      </div>
    );
  }
};

export default SearchBar;