import Link from 'next/link';


const Nav = () => (
    <div className="uk-container">
        <nav className="uk-navbar uk-navbar-container" data-uk-navbar>
            <div className="uk-navbar-left">
                <Link href="/"><a className="uk-navbar-brand uk-visible@m">Big Home</a></Link>
                <Link href="/"><a className="uk-navbar-brand uk-hidden@m">Small Home</a></Link>
            </div>
            <div className="uk-navbar-center uk-visible@m">
                <ul className="uk-navbar-nav">
                    <li><Link href="/about"><a>About Us</a></Link></li>
                    <li><Link href="/mission"><a>Our Mission</a></Link></li>
                    <li><Link href="/blog"><a >Blog</a></Link></li>
                    <li><Link href="/api-test"><a>API Test</a></Link></li>
                </ul>
                
            </div>
            <div className="uk-navbar-right uk-hidden@m">
                <button className="uk-button" type="button" uk-toggle="target: #offcanvas-nav">Mobile Nav</button>
            </div>
        </nav>

        <div id="offcanvas-nav" data-uk-offcanvas="overlay: false;flip: true">
            <div className="uk-offcanvas-bar">
                <ul className="uk-nav">
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