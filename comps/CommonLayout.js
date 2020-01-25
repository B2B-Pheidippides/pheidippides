
import Nav from './Nav';
import CommsBar from './CommsBar';

const Layout = props => (
  <div class="uk-container">
    <div class="uk-position-top"><Nav/></div>
    {props.children}
    <div class="uk-position-bottom"><CommsBar/></div>
  </div>
);

export default Layout;