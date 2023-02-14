import { Link } from 'react-router-dom';
import '../styles/components/cardHome.css';
import '../styles/components/shared/container.css';
import ZeniarkLogo from '../images/zeniark-logo.png';

const Welcome = () => {
  return (
    <div className='card-home'>
      <div className='container'>
        <img
          className='card-home-logo'
          src={ZeniarkLogo}
          alt='Italian Trulli'
        ></img>
        <div className='card-home-page-title'>
          <h1 className='card-home-header'>Welcome to the Trivia Challenge!</h1>
        </div>
        <div className='card-home-body'>
          <p className='card-home-details'>
            You will be presented with 10 True or False questions.
          </p>
          <p className='card-home-challenge'>Can you score 10/10</p>
        </div>
        <div className='card-home-page-control'>
          <Link className='card-home-control' to='quiz'>
            LET’S START!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
