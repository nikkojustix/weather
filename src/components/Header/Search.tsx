import React, { useEffect, useState } from "react";
import cities from "../../assets/json/city-list.json";

interface Props {}

const Search = (props: Props) => {
  const cityList: any = cities;

  console.log(cityList);

  // const [cityList, setCityList] = useState();

  // useEffect(() => {}, []);

  return (
    <div className="search">
      <input
        className="search__input"
        type="text"
        name="city-select"
        id="city-select"
        placeholder="выберите город"
      />
      <ul className="search__list">
        <li>Симферополь</li>
      </ul>
    </div>
  );
};

export default Search;
