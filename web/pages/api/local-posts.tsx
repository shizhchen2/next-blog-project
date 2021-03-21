import {NextApiHandler} from 'next';
import {getPostsFromMds} from 'lib/posts';


const Posts: NextApiHandler = async (req, res) => {
  const posts = await getPostsFromMds();
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.write(JSON.stringify(posts));
  res.end();
};
export default Posts;