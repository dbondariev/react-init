import React from 'react';
import User from './User.jsx';
import Pagination from './Pagination.jsx';

const numberPerPage = 3;

let from = 0;
let to = numberPerPage;

class UsersList extends React.Component {
  state = {
    itemsPerPage: 3,
    currentPage: 1,
    usersPerPage: this.props.users.slice(from, to),
  };

  goPrev = () => {
    from -= numberPerPage;
    to = from + numberPerPage;

    this.setState({
      currentPage: this.state.currentPage - 1,
      usersPerPage: this.props.users.slice(from, to),
    });
  };

  goNext = () => {
    from = to;
    to += numberPerPage;

    this.setState({
      currentPage: this.state.currentPage + 1,
      usersPerPage: this.props.users.slice(from, to),
    });
  };

  render() {
    return (
      <div>
        <Pagination
          goPrev={this.goPrev}
          goNext={this.goNext}
          currentPage={this.state.currentPage}
          totalItems={this.props.users.length}
          itemsPerPage={this.state.itemsPerPage}
        />
        <ul className="users">
          {this.state.usersPerPage.map(user => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
