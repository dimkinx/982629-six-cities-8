import React from 'react';
import {useDispatch} from 'react-redux';
import {setSorting} from '../../store/actions';
import {SortingType} from '../../common/const';

type MainScreenSortItemProps = {
  sort: SortingType;
  className: string;
  onOpenedItemClick: (isSortingOpen: boolean) => void;
}

function MainScreenSortItem(props: MainScreenSortItemProps): JSX.Element {
  const {sort, className, onOpenedItemClick} = props;
  const dispatch = useDispatch();

  const handleItemClick = () => {
    dispatch(setSorting(sort));
    onOpenedItemClick(false);
  };

  return (
    <li
      onClick={handleItemClick}
      className={className}
      tabIndex={0}
    >
      {sort}
    </li>
  );
}

export default MainScreenSortItem;
