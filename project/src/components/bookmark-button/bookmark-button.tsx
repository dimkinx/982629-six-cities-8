import {useDispatch, useSelector} from 'react-redux';
import {postFavoritesStatusAction} from '../../store/data/data-api-actions';
import {AppRoute, BookmarkButtonType, BookmarkIconSize, FavoritesStatusType} from '../../common/const';
import {addClassModifier} from '../../common/utils';
import {OfferIdParamValue} from '../../types/offer';
import {useHistory} from 'react-router-dom';
import {getIsAuthorized} from '../../store/user/user-selectors';

type BookmarkButtonProps = {
  id: OfferIdParamValue;
  favoritesStatus: FavoritesStatusType;
  buttonType: BookmarkButtonType;
}

function BookmarkButton(props: BookmarkButtonProps): JSX.Element {
  const {id, favoritesStatus, buttonType} = props;
  const isOfferUpdate: boolean = buttonType === BookmarkButtonType.Property;

  const isAuthorized = useSelector(getIsAuthorized);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleButtonClick = () => {
    isAuthorized
      ? dispatch(postFavoritesStatusAction(id, favoritesStatus, isOfferUpdate))
      : history.push(AppRoute.LoginScreen);
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
