/* eslint-disable no-param-reassign */
import React, { useState, useEffect } from 'react';
import UserPostsTable from './UserPostsTable';
import CommentsTable from './CommentsTable';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [userPosts, setUserPosts] = useState([]);
  const [comments, setComments] = useState([]);

  const onHover = (item) => {
    item.style.backgroundColor = '#dee2e6';
  };

  const onExit = (item) => {
    item.style.backgroundColor = '#fff';
  };

  const fetchUserPosts = (userId) => {
    window.fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .then((resp) => resp.json())
      .then((userPosts) => {
        setUserPosts(userPosts);
      });
  };

  const fetchComments = (postId) => {
    window.fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
      .then((resp) => resp.json())
      .then((comments) => {
        setComments(comments);
      });
  };

  useEffect(() => {
    window.fetch('https://jsonplaceholder.typicode.com/posts')
      .then((resp) => resp.json())
      .then((resp) => {
        setPosts(resp);
      });
  }, []);

  return (
    <>
      <h2>Posts</h2>

      <div className='row'>
        <div className='col-md-4'>
          posts
          <table className='table table-bordered' style={{ display: 'block', width: '100%', maxHeight: '340px', overflow: 'auto' }}>
            <thead className='thead-dark'>
              <tr>
                <th>User ID</th>
                <th>ID</th>
                <th>Title</th>
              </tr>
            </thead>

            <tbody>
              {
                posts.map((post) => (
                  <tr key={post.id}>
                    <td
                      onMouseEnter={(e) => onHover(e.target)}
                      onMouseLeave={(e) => onExit(e.target)}
                      onClick={(e) => fetchUserPosts(post.userId)}
                    >
                      {post.userId}
                    </td>
                    <td
                      onMouseEnter={(e) => onHover(e.target)}
                      onMouseLeave={(e) => onExit(e.target)}
                      onClick={(e) => fetchComments(post.id)}
                    >
                      {post.id}
                    </td>
                    <td>{post.title}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
        <div className='col-md-4'>
          user posts
          {userPosts.length > 0 && <UserPostsTable posts={userPosts} />}

        </div>
        <div className='col-md-4'>
          post comments
          {comments.length > 0 && <CommentsTable comments={comments} />}

        </div>

      </div>

    </>
  );
};
export default Posts;
