import React from 'react';
import {useDispatch} from 'react-redux';
import {setSorting} from '../../store/actions';
import {SortingType} from '../../common/const';
import {addClassModifier} from '../../common/utils';

type MainScreenSortItemProps = {
  sort: SortingType;
  currentSort: SortingType;
  onOpenedItemClick: (isSortingOpen: boolean) => void;
}

function MainScreenSortItem(props: MainScreenSortItemProps): JSX.Element {
  const {sort, currentSort, onOpenedItemClick} = props;

  const dispatch = useDispatch();

  const handleItemClick = () => {
    onOpenedItemClick(false);

    if (sort !== currentSort) {
      dispatch(setSorting(sort));
    }
  };

  return (
    <li
      onClick={handleItemClick}
      className={addClassModifier(sort === currentSort, 'places__option')}
      tabIndex={0}
    >
      {sort}
    </li>
  );
}

export default MainScreenSortItem;
