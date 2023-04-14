import Users from "@/components/Users";
const fetchUsers = async () => {
  const res = await fetch("https://reqres.in/api/users");
  const resJson = await res.json();
  // console.log(resJson.data);
  return resJson.data;
};

const IndexPage = async () => {
  const users = await fetchUsers();
  return (
    <div>
      {/* <div>{JSON.stringify(users)}</div> */}
      <Users users={users} />
    </div>
  );
};
export default IndexPage;
