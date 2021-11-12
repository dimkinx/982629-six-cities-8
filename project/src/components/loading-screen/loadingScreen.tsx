import Loader from 'react-loader-spinner';
import {LoaderParams} from '../../common/const';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import './style.css';

function LoadingScreen(): JSX.Element {
  const {Type, Color, Size: {Width, Height}} = LoaderParams;

  return (
    <div className="wrapper-loading">
      <Loader
        type={Type}
        color={Color}
        width={Width}
        height={Height}
      />
    </div>
  );
}

export default LoadingScreen;
