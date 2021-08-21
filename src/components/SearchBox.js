import React from "react";
import'tachyons';

const SearchBox = ({searchChange}) => {
    return (
      <div className={'ma1'}>
          <input
              className={'pa2'}
              type={'search'}
              placeholder={'search robot'}
              onChange={searchChange}
          />
      </div>
    );
}

export default SearchBox;