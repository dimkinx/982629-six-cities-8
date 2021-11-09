import React, {useState} from 'react';
import {addClassModifier} from '../../common/utils';
import {SortingType} from '../../common/const';
import MainScreenSortItem from '../main-screen-sort-item/main-screen-sort-item';
import {useSelector} from 'react-redux';
import {State} from '../../types/state';

function MainScreenSort(): JSX.Element {
  const {sort: currentSort} = useSelector((state: State) => state);
  const [isSortingOpen, setIsSortingOpen] = useState(false);

  const handleSortingTypeClick = () => {
    setIsSortingOpen(true);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      &nbsp;
      <span
        onClick={handleSortingTypeClick}
        className="places__sorting-type"
        tabIndex={0}
      >
        {currentSort}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul
        className={`${addClassModifier(isSortingOpen, 'places__options', 'opened')} places__options--custom`}
      >
        {Object.values(SortingType).map((sort) => (
          <MainScreenSortItem
            key={sort}
            sort={sort}
            className={addClassModifier(sort === currentSort, 'places__option')}
            onOpenedItemClick={setIsSortingOpen}
          />
        ))}
      </ul>
    </form>
  );
}

export default MainScreenSort;
