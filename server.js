const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.get('/api', (req, res) => {
  res.jsonp(router.db.getState());
});

server.get('/api/posts/:postId', (req, res) => {
  const postId = parseInt(req.params.postId);
  const post = router.db.get('posts').find({ postId }).value();
  if (post) {
    const user = router.db.get('users').find({ userId: post.userId }).value();
    res.jsonp({ ...post, user });
  } else {
    res.status(404).send('Post not found');
  }
});

server.get('/api/posts/:postId/comments', (req, res) => {
  const postId = parseInt(req.params.postId);
  let comments = router.db.get('comments').filter({ postId }).value();
  comments = comments.map(comment => {
    const user = router.db.get('users').find({ userId: comment.userId }).value();
    return { ...comment, user };
  });
  res.jsonp(comments);
});

server.get('/api/posts/:postId/comments/:contentId', (req, res) => {
  const postId = parseInt(req.params.postId);
  const contentId = parseInt(req.params.contentId);
  let comment = router.db
    .get('comments')
    .find({ contentId, postId }) // Adjusted to use contentId and postId
    .value();

  if (comment) {
    const user = router.db.get('users').find({ userId: comment.userId }).value();
    comment = { ...comment, user };
    res.jsonp(comment);
  } else {
    res.status(404).send('Comment not found');
  }
});

server.use('/api', router); // Prefix all json-server routes with /api
server.use(middlewares);

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});