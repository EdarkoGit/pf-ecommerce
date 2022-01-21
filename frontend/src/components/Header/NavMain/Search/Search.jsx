import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { SearchStyled } from "./SearchStyled";
import searchIcon from "../../../../utilsStyles/utilsImages/search-iconwhite.png";
import { fetchSearchProducts } from "../../../../redux/reducers/products/actions";

function Search({ data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [inputWord, setInputWord] = useState("");
  const searchInput = useRef();
  const dispatch = useDispatch();

  const handleCleanInput = (f = [], i = "") => {
    setFilteredData(f);
    setInputWord(i);
  };

  const handleFilter = (event) => {
    if (event.target.value === "") {
      handleCleanInput();
    } else {
      const searchWord = event.target.value;
      let newFilter = [];
      let count = 0;
      for (let i = 0; i < data.length; i++) {
        if (count > 5) break;
        const isInclude = data[i].name
          .toLowerCase()
          .includes(searchWord.toLowerCase());
        if (isInclude) {
          count++;
          newFilter.push(data[i]);
        }
      }
      handleCleanInput(newFilter, searchWord);
    }
  };

  const handleSugestionClick = (event) => {
    handleCleanInput([], event.target.innerHTML);
    searchInput.current.focus();
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    dispatch(fetchSearchProducts(inputWord));
    handleCleanInput();
  };

  return (
    <SearchStyled>
      <input
        type="text"
        placeholder="Search our catalog"
        onChange={handleFilter}
        value={inputWord}
        ref={searchInput}
        onKeyDown={(event) => event.key === "Enter" && handleOnSubmit(event)}
      />
      <button onClick={handleOnSubmit}>
        <img src={searchIcon} alt="search icon" />
      </button>

      {filteredData.length !== 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 4).map((value, key) => {
            return (
              <p key={key} onClick={(event) => handleSugestionClick(event)}>
                {value.name}
              </p>
            );
          })}
        </div>
      )}
    </SearchStyled>
  );
}

export default Search;
