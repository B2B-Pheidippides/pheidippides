
import Nav from './Nav';
import CommsBar from './CommsBar';

const LayoutStatic = props => (
  <div>
    <div className="uk-section uk-background-default"><Nav/></div>
      {props.children}
    <div className="uk-section-xsmall uk-background-default"><CommsBar/></div>
  </div>
);

export default LayoutStatic;