import Users from "@/components/Users";
const fetchUsers = async () => {
  try {
    const res = await fetch("https://reqres.in/api/users?page=2");
    const resJson = await res.json();
    // console.log(resJson.data);
    return resJson.data;
    
  } catch (error) {
    console.log(error);
    return []
  }
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
