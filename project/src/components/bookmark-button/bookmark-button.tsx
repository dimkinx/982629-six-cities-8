import {useDispatch} from 'react-redux';
import {postFavoritesStatusAction} from '../../store/data/data-api-actions';
import {BookmarkButtonType, BookmarkIconSize, FavoritesStatusType} from '../../common/const';
import {addClassModifier} from '../../common/utils';
import {OfferIdParamValue} from '../../types/offer';

type BookmarkButtonProps = {
  id: OfferIdParamValue;
  favoritesStatus: FavoritesStatusType;
  buttonType: BookmarkButtonType;
}

function BookmarkButton(props: BookmarkButtonProps): JSX.Element {
  const {id, favoritesStatus, buttonType} = props;

  const dispatch = useDispatch();

  const handleButtonClick = () => {
    dispatch(postFavoritesStatusAction(id, favoritesStatus));
  };

  return (
    <button
      onClick={handleButtonClick}
      className={`${addClassModifier(!favoritesStatus, `${buttonType}__bookmark-button`)} button`}
      type="button"
    >
      <svg
        className={`${buttonType}__bookmark-icon`}
        width={buttonType === BookmarkButtonType.PlaceCard ? BookmarkIconSize.PlaceCard.Width : BookmarkIconSize.Property.Width}
        height={buttonType === BookmarkButtonType.PlaceCard ? BookmarkIconSize.PlaceCard.Height : BookmarkIconSize.Property.Height}
      >
        <use xlinkHref="#icon-bookmark" />
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}

export default BookmarkButton;
