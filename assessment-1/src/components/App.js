import React from 'react';
import faker from 'faker';
import SearchBar from './SearchBar';
import Spinner from './Spinner';
import FlagCard from './FlagCard';

class App extends React.Component {
  constructor(props) {
    super(props);

    // Generate Users
    let tempList = [];
    for (let index = 0; index < 10; index++) {
      const user = {
        email: faker.internet.email(),
        jobTitle: faker.name.jobTitle(),
        avatar: faker.image.avatar(),
        content: faker.lorem.sentence(),
        countryCode: faker.address.countryCode().toLowerCase()
      };
      tempList.push(user);
    }

    this.state = {
      users: [],
      originalList: tempList,
      isDoneSearch: false,
      inProgress: false
    };
    console.log('User List', this.state.originalList);
  }
  
  onSearchSubmit = (email) => {
    this.setState({
      users: [],
      isDoneSearch: false,
      inProgress: true
    });

    console.log(email);
    const newList = this.state.originalList.filter(item => item.email === email);

    setTimeout(() => {
      this.setState({
        users: newList,
        isDoneSearch: true,
        inProgress: false
      });
      console.log('Results', this.state.users);
    }, 1000);
  }

  renderDetails() {
    if (this.state.isDoneSearch && !this.state.inProgress && !this.state.users.length) {
      return <div>No Results</div>;
    }

    if (!this.state.isDoneSearch && this.state.inProgress && !this.state.users.length) {
      return <Spinner />;
    }

    if (this.state.isDoneSearch && !this.state.inProgress && this.state.users.length) {
      return (
        <div className="ui cards">
          {this.state.users.map((item, idx) => (
            <FlagCard details={item} key={idx} />
          ))}
        </div>
      );
    }
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '20px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        {this.renderDetails()}
      </div>
    );
  }
};

export default App;