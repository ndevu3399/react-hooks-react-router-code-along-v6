import { Link } from "react-router-dom";

function UserCard({ user }) {
  return (
    <article>
      <h2>
        <Link to={`/profile/${user.id}`}>{user.name}</Link>
      </h2>
    </article>
  );
}

export default UserCard;
