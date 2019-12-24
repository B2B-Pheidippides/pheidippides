
import Link from 'next/link';

const Footer = () => (
    <footer>
        <div className="leftLinks">
            <a href="https://www.theyoungcenter.org/"><i aria-hidden="true">The Young Center</i></a>
        </div>
        <div className="rightLinks">
            <ul className="socialMediaIconList">
                <li><a href="https://www.facebook.com/"><i aria-hidden="true">Facebook</i></a></li>
                <li><a href="https://www.instagram.com/?hl=en"><i aria-hidden="true">Instagram</i></a></li>
                <li><a href="https://www.pinterest.com/"><i aria-hidden="true">Pinterest</i></a></li>
                <li><a href="https://twitter.com/?lang=en"><i aria-hidden="true">Twitter</i></a></li>
            </ul>
        </div>
        <style jsx>
            {`
                .socialMediaIconList {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }
                .socialMediaIconList > li {
                    display: inline;
                }
                .leftLinks {
                    float: left;
                }
                .rightLinks {
                    float: right;
                }
            `}
        </style>
    </footer>
);

export default Footer;