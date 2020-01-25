import Link from 'next/link';


const Nav = () => (
    <div class="uk-container">
        <nav class="uk-navbar uk-navbar-container" uk-navbar>
            <div class="uk-navbar-left">
                <Link href="/"><a class="uk-navbar-brand uk-visible@m">Big Home</a></Link>
                <Link href="/"><a class="uk-navbar-brand uk-hidden@m">Small Home</a></Link>
            </div>
            <div class="uk-navbar-center uk-visible@m">
                <ul class="uk-navbar-nav">
                    <li><Link href="/about"><a>About Us</a></Link></li>
                    <li><Link href="/mission"><a>Our Mission</a></Link></li>
                    <li><Link href="/blog"><a >Blog</a></Link></li>
                    <li><Link href="/api-test"><a>API Test</a></Link></li>
                </ul>
                
            </div>
            <div class="uk-navbar-right uk-hidden@m">
                <button class="uk-button" type="button" uk-toggle="target: #offcanvas-nav">Mobile Nav</button>
            </div>
        </nav>

        <div id="offcanvas-nav" uk-offcanvas="overlay: true;flip: true">
            <div class="uk-offcanvas-bar">
                <ul class="uk-nav">
                    <li><Link href="/about"><a>About Us</a></Link></li>
                    <li><Link href="/mission"><a>Our Mission</a></Link></li>
                    <li><Link href="/blog"><a >Blog</a></Link></li>
                    <li><Link href="/api-test"><a>API Test</a></Link></li>
                </ul>

            </div>
        </div>
    </div>

);

export default Nav;