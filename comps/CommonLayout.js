
import Nav from './Nav';
import CommsBar from './CommsBar';

const Layout = props => (
  <div className="page-container">
    <div className="content-wrap">
      <div className="uk-section"><Nav/></div>
      {props.children}
    </div>
    <div className="comms-bar"><CommsBar/></div>
    
    <style jsx>{`
        .page-container {
          position: relative;
          min-height: 100vh;
        }
  
        .content-wrap {
          padding-bottom: 40px;
        }
  
        .comms-bar {
          position: absolute;
          bottom: 0;
          width: 100%;
          height: 40px;  
        }
      `}</style>
  </div>
);

export default Layout;