import React from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {Dispatch} from '@reduxjs/toolkit';
import {setSorting} from '../../store/actions';
import {Actions} from '../../types/actions';
import {SortingType} from '../../common/const';

type MainScreenSortItemProps = {
  sort: SortingType;
  className: string;
  onOpenedItemClick: (isSortingOpen: boolean) => void;
}

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  onSortingItemClick(sort: SortingType) {
    dispatch(setSorting(sort));
  },
});

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & MainScreenSortItemProps;

function MainScreenSortItem(props: ConnectedComponentProps): JSX.Element {
  const {sort, className, onOpenedItemClick, onSortingItemClick} = props;

  const handleItemClick = () => {
    onSortingItemClick(sort);
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

export {MainScreenSortItem};
export default connector(MainScreenSortItem);
