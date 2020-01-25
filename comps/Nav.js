import Link from 'next/link';

const linkStyle = {
  //marginRight: 15
};

const Nav = () => (
    <div class="uk-container">
        <nav class="uk-navbar uk-navbar-container" uk-navbar>
            <div class="uk-navbar-center">
                <ul class="uk-navbar-nav">                
                    <Link href="/">
                      <a style={linkStyle}>Home</a>
                    </Link>
                    <Link href="/about">
                      <a style={linkStyle}>About Us</a>
                    </Link>
                    <Link href="/mission">
                      <a style={linkStyle}>Our Mission</a>
                    </Link>
                    <Link href="/blog">
                      <a style={linkStyle}>Blog</a>
                    </Link>
                    <Link href="/api-test">
                      <a style={linkStyle}>API Test</a>
                    </Link>
                </ul>
            </div>
        </nav>
    </div>

);

export default Nav;