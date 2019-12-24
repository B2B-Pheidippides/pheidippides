import Layout from '../comps/CommonLayout';
import Link from 'next/link';
const axios = require('axios');

const APITest = props => (
  <Layout>
    <h1>Batman TV Shows</h1>
    <ul>
      {props.shows.map(show => (
        <li key={show.id}>
          <Link href="/p/[id]" as={`/p/${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
);

APITest.getInitialProps = async function() {

  const response = await axios.get('https://api.tvmaze.com/search/shows?q=batman');
  const data = response.data//JSON.parse()

  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    shows: data.map(entry => entry.show)
  };
};

export default APITest;