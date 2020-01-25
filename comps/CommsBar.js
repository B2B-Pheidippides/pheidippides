
import Link from 'next/link';

const CommsBar = () => (
    <div class="uk-container">
        <nav class="uk-navbar uk-navbar-container" uk-navbar>
            <div class="uk-navbar-left">
                <a href="https://www.theyoungcenter.org/"><i aria-hidden="true">The Young Center</i></a>
            </div>
            <div class="uk-navbar-right">
                <ul class="uk-iconnav">
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