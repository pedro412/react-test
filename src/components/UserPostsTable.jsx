import React from 'react';

const UserPostsTable = ({ posts }) => {
  return (
    <table className='table table-primary table-bordered' style={{ display: 'block', width: '100%', maxHeight: '340px', overflow: 'auto' }}>
      <thead>
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
              <td>
                {post.userId}
              </td>
              <td>
                {post.id}
              </td>
              <td>{post.title}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
};

export default UserPostsTable;
