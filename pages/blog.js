

import Layout from '../comps/CommonLayout';
import Link from 'next/link';

const PostLink = props => (
    <li>
      <Link href="/blogPost/[id]" as={`/blogPost/${props.id}`}>
        <a>{props.id}</a>
      </Link>
      <style jsx>{`
      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        text-decoration: none;
        color: blue;
        font-family: 'Arial';
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
    </li>
  );
  export default function Blog() {
    return (
      <Layout>
        <h1>The Blog</h1>
        <ul>
          <PostLink id="blog-post-1" />
          <PostLink id="blog-post-2" />
          <PostLink id="blog-post-3" />
        </ul>
        <style jsx>
            {`
            h1,
            a {
              font-family: 'Arial';
            }

            ul {
              padding: 0;
            }

            li {
              list-style: none;
              margin: 5px 0;
            }

            a {
              text-decoration: none;
              color: blue;
            }

            a:hover {
              opacity: 0.6;
            }
            `}
        </style>
      </Layout>
    );
  }