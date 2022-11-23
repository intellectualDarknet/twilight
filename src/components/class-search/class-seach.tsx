import React from "react";
import "./class-search.scss";

interface IClassSearchState {
  search: string;
}

class ClassSearch extends React.Component<Record<string, unknown>, IClassSearchState> {
  state = { search: "" };

  setSearch = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState(() => {
      return {
        search: event.target.value,
      };
    });
  };

  render() {
    return (
      <form className="сlass-search">
        <input
          className="сlass-search__search"
          placeholder="What do you want to watch?"
          onChange={(e) => this.setSearch(e)}
        />
        <button className="сlass-search__button">Search</button>
      </form>
    );
  }
}

export default ClassSearch;
