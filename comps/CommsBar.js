
import Link from 'next/link';

const CommsBar = () => (
    <div className="uk-container">
        <nav className="uk-navbar uk-navbar-container" data-uk-navbar>
            <div className="uk-navbar-left">
                <a href="https://www.theyoungcenter.org/"><i aria-hidden="true">The Young Center</i></a>
            </div>
            <div className="uk-navbar-right">
                <ul className="uk-iconnav">
                    <li><a href="https://www.facebook.com/"><i aria-hidden="true">Facebook</i></a></li>
                    <li><a href="https://www.instagram.com/?hl=en"><i aria-hidden="true">Instagram</i></a></li>
                    <li><a href="https://www.pinterest.com/"><i aria-hidden="true">Pinterest</i></a></li>
                    <li><a href="https://twitter.com/?lang=en"><i aria-hidden="true">Twitter</i></a></li>
                </ul>
            </div>
        </nav>
    </div>
);

export default CommsBar;