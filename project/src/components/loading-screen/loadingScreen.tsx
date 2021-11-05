import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import './style.css';

function LoadingScreen(): JSX.Element {
  return (
    <div className="wrapper-loading">
      <Loader
        type="Watch"
        color="#4481c3"
        height={100}
        width={100}
      />
    </div>
  );
}

export default LoadingScreen;
