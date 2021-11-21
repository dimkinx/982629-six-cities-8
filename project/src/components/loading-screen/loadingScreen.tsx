import Loader from 'react-loader-spinner';
import {LoaderParam} from '../../common/const';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import './style.css';

const {Type, Color, Size: {Width, Height}} = LoaderParam;

function LoadingScreen(): JSX.Element {
  return (
    <>
      <h1 className="visually-hidden">Loading screen</h1>
      <div className="wrapper-loading">
        <Loader
          type={Type}
          color={Color}
          width={Width}
          height={Height}
        />
      </div>
    </>
  );
}

export default LoadingScreen;
