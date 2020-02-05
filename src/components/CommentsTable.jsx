import React from 'react';

const CommentsTable = ({ comments }) => {
  return (
    <table className='table table-warning table-bordered' style={{ display: 'block', width: '100%', maxHeight: '340px', overflow: 'auto' }}>
      <thead>
        <tr>
          <th>Post ID</th>
          <th>ID</th>
          <th>Name</th>
        </tr>
      </thead>

      <tbody>
        {
          comments.map((comment) => (
            <tr key={comment.id}>
              <td>
                {comment.postId}
              </td>
              <td>
                {comment.id}
              </td>
              <td>{comment.name}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
};

export default CommentsTable;
