import Header from './Header';
import Nav from './Nav';
import CommsBar from './CommsBar';
import Footer from './Footer';

const layoutStyle = {
  margin: 0,
  padding: 0,
};

const Layout = props => (
  <div class="uk-container" style={layoutStyle}>
    <Nav/>
    {props.children}
    <CommsBar/>
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