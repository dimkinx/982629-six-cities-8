import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Header from '../header/header';
import MainScreenTabs from '../main-screen-tabs/main-screen-tabs';
import LoadingScreen from '../loading-screen/loadingScreen';
import MainScreenCities from '../main-screen-cities/main-screen-cities';
import MainScreenCitiesEmpty from '../main-screen-cities-empty/main-screen-cities-empty';
import {addClassModifier} from '../../common/utils';
import {RequestStatus} from '../../common/const';
import {getOffersAction} from '../../store/data/data-api-actions';
import {setOffersRequestStatus} from '../../store/data/data-actions';
import {getOffersRequestStatus, getSortedOffers} from '../../store/data/data-selectors';
import {getCity} from '../../store/user/user-selectors';

function MainScreen(): JSX.Element {
  const offersRequestStatus = useSelector(getOffersRequestStatus);
  const sortedOffers = useSelector(getSortedOffers);
  const currentCity = useSelector(getCity);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOffersAction());

    return () => {
      dispatch(setOffersRequestStatus(RequestStatus.Unknown));
    };
  }, [dispatch]);

  if (offersRequestStatus === RequestStatus.Loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className={`${addClassModifier(!sortedOffers.length, 'page__main', 'index-empty')} page__main--index`}>
        <h1 className="visually-hidden">Cities</h1>
        <MainScreenTabs currentCity={currentCity} />
        {sortedOffers.length || (offersRequestStatus !== RequestStatus.Fail) ? <MainScreenCities /> : <MainScreenCitiesEmpty />}
      </main>
    </div>
  );
}

export default MainScreen;
