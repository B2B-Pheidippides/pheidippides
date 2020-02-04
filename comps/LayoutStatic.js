
import Nav from './Nav';
import CommsBar from './CommsBar';

const LayoutStatic = props => (
  <div>
    <div className="uk-section"><Nav/></div>
      {props.children}
    <CommsBar/>
  </div>
);

export default LayoutStatic;