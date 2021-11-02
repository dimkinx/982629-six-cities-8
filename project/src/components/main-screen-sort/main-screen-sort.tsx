import {useState} from 'react';
import {Dispatch} from '@reduxjs/toolkit';
import {connect, ConnectedProps} from 'react-redux';
import {setSorting} from '../../store/actions';
import {Actions} from '../../types/actions';
import {State} from '../../types/state';
import {addClassModifier} from '../../common/utils';
import {SortingType} from '../../common/const';

const mapStateToProps = ({sort}: State) => ({sort});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  onItemClick(sort: SortingType) {
    dispatch(setSorting(sort));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

function MainScreenSort(props: ConnectedProps<typeof connector>): JSX.Element {
  const {sort: currentSort, onItemClick} = props;
  const [isSortingOpen, setIsSortingOpen] = useState(false);

  const handleSortingTypeClick = () => {
    setIsSortingOpen(!isSortingOpen);
  };

  const handleSortingOptionClick = (sort: SortingType) => {
    onItemClick(sort);
    setIsSortingOpen(false);
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
          <li
            key={sort}
            onClick={() => handleSortingOptionClick(sort)}
            className={addClassModifier(sort === currentSort, 'places__option')}
            tabIndex={0}
          >
            {sort}
          </li>
        ))}
      </ul>
    </form>
  );
}

export {MainScreenSort};
export default connector(MainScreenSort);
