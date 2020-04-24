import React from 'react';

class SearchBar extends React.Component {
  state = { email: '' };

  onFormSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state.email);
  }

  render() {
    return (
      <div className="ui">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="ui icon input" style={{ width: '100%' }}>
            <input
              type="text"
              value={this.state.email}
              onChange={e => this.setState({ email: e.target.value})}
              placeholder="Search..."
            />
            <i className="search icon"></i>
          </div>
        </form>
      </div>
    );
  }
};

export default SearchBar;