
import Nav from './Nav';
import CommsBar from './CommsBar';

const layoutStyle = {
  margin: 0,
  padding: 0,
};

const Layout = props => (
  <div class="uk-container" style={layoutStyle}>
    <div class="uk-position-top"><Nav/></div>
    {props.children}
    <div class="uk-position-bottom"><CommsBar/></div>
    <style jsx global>
        {`
            body {
                margin: 0;
                padding: 0;
            }
        `}
    </style>
  </div>
);

export default Layout;