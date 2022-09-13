import React from "react";

import User from "./User.jsx";
import Pagination from "./Pagination.jsx";

import "./usersList.scss";

class UsersList extends React.Component {
  state = {
    currentPage: 1,
  };

  itemsPerPage = 3;

  goPrev = () => {
    this.setState({
      currentPage: this.state.currentPage - 1,
    });
  };

  goNext = () => {
    this.setState({
      currentPage: this.state.currentPage + 1,
    });
  };

  render() {
    const totalItems = this.props.users.length;
    const startItem = (this.state.currentPage - 1) * this.itemsPerPage;
    const endItem = startItem + this.itemsPerPage;
    const usersList = this.props.users.slice(startItem, endItem);

    return (
      <div>
        <Pagination
          goPrev={this.goPrev}
          goNext={this.goNext}
          currentPage={this.state.currentPage}
          totalItems={totalItems}
          itemsPerPage={this.props.itemsPerPage}
        />

        <ul className="users">
          {usersList.map((user) => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
