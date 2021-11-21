import {memo, useState} from 'react';
import {addClassModifier} from '../../common/utils';
import {SortingType} from '../../common/const';
import MainScreenSortItem from '../main-screen-sort-item/main-screen-sort-item';

type MainScreenSortProps = {
  currentSort: SortingType;
}

function MainScreenSort(props: MainScreenSortProps): JSX.Element {
  const {currentSort} = props;

  const [isSortingOpen, setIsSortingOpen] = useState(false);

  const handleSortingTypeClick = () => {
    setIsSortingOpen(!isSortingOpen);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      &nbsp;
      <span
        onClick={handleSortingTypeClick}
        className="places__sorting-type"
        tabIndex={0}
        data-testid="sorting-span"
      >
        {currentSort}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul
        className={`${addClassModifier(isSortingOpen, 'places__options', 'opened')} places__options--custom`}
        data-testid="sorting-list"
      >
        {Object.values(SortingType).map((sort) => (
          <MainScreenSortItem
            key={sort}
            sort={sort}
            currentSort={currentSort}
            onOpenedItemClick={setIsSortingOpen}
          />
        ))}
      </ul>
    </form>
  );
}

export default memo(MainScreenSort, (prev, next) => prev.currentSort === next.currentSort);
