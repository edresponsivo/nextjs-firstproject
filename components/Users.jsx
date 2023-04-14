"use client";
import { useRouter } from "next/navigation";

export default function Users({ users }) {
  // console.log(users.length);

  const router = useRouter();

  return (
    <ul className="list-group">
      {users.map((user) => (
        <li
          key={user.id}
          onClick={() => {
            // console.log(user.id);
            router.push(`/users/${user.id}`);
          }}
          className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
        >
          <div>
            <h5>
              {user.id} | {user.first_name} {user.last_name}
            </h5>
            <p>{user.email}</p>
          </div>
          <img
            src={user.avatar}
            alt={`${user.first_name} ${user.last_name}`}
            style={{ borderRadius: "50%" }}
          />
        </li>
      ))}
    </ul>
  );
}
