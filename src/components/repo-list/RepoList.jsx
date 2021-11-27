import { Link } from "react-router-dom";

import "./RepoList.css";

export default function RepoList({ repos }) {
  return (
    <table className="repo-list">
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Creation date</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {repos.map(repo => (
          <tr key={repo.id}>
            <td>{repo.name}</td>
            <td>{repo.description}</td>
            <td>{repo.created_at}</td>
            <td>
              <Link to={`repo/${repo.id}`}>
                <button>View</button>
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
