import { Link } from "react-router-dom";

import { SearchParams } from "../../constants";

import "./PostList.css";

export default function PostList({ posts }) {
  return (
    <table className="post-list">
      <thead>
        <tr>
          <th>Title</th>
          <th>Summary</th>
          <th>Author</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {posts.map(post => (
          <tr key={post.id}>
            <td>{post.title}</td>
            <td>
              {post.body.length > 40
                ? `${post.body.slice(0, 40)}...`
                : post.body}
            </td>
            <td>{post.author}</td>
            <td>
              <Link to={`post/${post.id}?${SearchParams.isEditMode}=true`}>
                <button>Edit</button>
              </Link>
            </td>
            <td>
              <Link to={`post/${post.id}`}>
                <button>View</button>
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
