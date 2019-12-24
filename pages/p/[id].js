
import Layout from '../../comps/CommonLayout';
import axios from 'axios';

const Post = props => (
  <Layout>
    <h1>{props.show.name}</h1>
    <p>{props.show.summary.replace(/<[/]?[pb]>/g, '')}</p>
    <img src={props.show.image.medium} />
  </Layout>
);

Post.getInitialProps = async function(context) {
  const { id } = context.query;
  const response = await axios.get(`https://api.tvmaze.com/shows/${id}`);
  const show = response.data;

  console.log(`Fetched show: ${show.name}`);

  return { show };
};

export default Post;
