import React from "react";
import User from "./User";
import Pagination from "./Pagination";

const itemsPerPage = 3;

class UsersList extends React.Component {


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

    const { users } = this.props;
    const { currentPage } = this.state;

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const currentPageUsers = users.slice(startIndex, endIndex);

    return (
      <div>
        <Pagination
          goPrev={() => this.goPrev()}
          goNext={() => this.goNext()}
          currentPage={currentPage}
          totalItems={users.length}
          itemsPerPage={itemsPerPage}
        />
        <ul className="users">
          {currentPageUsers.map((user) => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }

}

export default UsersList;
