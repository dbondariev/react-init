import React from "react";
import User from "./User";
import Pagination from "./Pagination";

class UsersList extends React.Component {
  constructor(props) {
    super(props);
    this.users = props.users
      .slice()
      .map((element, index) => ({ ...element, id: index }));
    this.itemsPerPage = 3;
  }
  state = {
    currentPage: 1,
  };

  goNext() {
    this.setState({
      currentPage: (this.state.currentPage += 1),
    });
  }
  goPrev() {
    this.setState({
      currentPage: (this.state.currentPage -= 1),
    });
  }

  render() {
    return (
      <div>
        <Pagination
          goPrev={() => this.goPrev()}
          goNext={() => this.goNext()}
          currentPage={this.state.currentPage}
          totalItems={this.users.length}
          itemsPerPage={this.itemsPerPage}
        />
        <ul>
          {this.users
            .slice(
              (this.state.currentPage - 1) * this.itemsPerPage,
              this.state.currentPage * this.itemsPerPage
            )
            .map((user) => (
              <User key={user.id} {...user} />
            ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
