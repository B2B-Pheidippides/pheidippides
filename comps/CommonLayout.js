
import Nav from './Nav';
import CommsBar from './CommsBar';

const Layout = props => (
  <div className="uk-container">
    <div className="uk-position-top"><Nav/></div>
    {props.children}
    <div className="uk-position-bottom"><CommsBar/></div>
  </div>
);

export default Layout;