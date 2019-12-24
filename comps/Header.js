import Link from 'next/link';

const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <div>
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
  </div>
);

export default Header;