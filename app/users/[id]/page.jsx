async function getUser(id) {
  // console.log(id);
  const res = await fetch(`https://reqres.in/api/users/${id}`);
  const resJson = await res.json();
  // console.log(resJson.data);
  return resJson.data;
}

const UserPage = async ({ params }) => {
  const user = await getUser(params.id);
  // console.log(user);

  return (
    <div className="row">
      <div className="col-md-6 offset-md-3">
        {/* <pre>{JSON.stringify(user)}</pre> */}
        <div className="card">
          <div className="card-header text-center">
            <img src={user.avatar} alt={user.email} />
          </div>
          <div className="card-body text-center">
            <h3>
              {user.id} {user.first_name} {user.last_name}
            </h3>
            <p>{user.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserPage;
