async function fetchColors() {
  const res = await fetch("https://reqres.in/api/unknown");
  const resJson = await res.json();
  // console.log(resJson.data);
  return resJson.data;
}

const ColorsPage = async () => {
  const colors = await fetchColors();
  //   console.log(colors);
  const { id, name, year, color, pantone_value } = colors[0];

  return (
    <div>
      <h2>ColorsPage</h2>
      {/* <pre>{JSON.stringify(colors[0])}</pre> */}
      <div className="container d-flex gap-4 flex-wrap">
        {colors.map((color) => (
          <div
            className="card p-2 text-center"
            style={{ width: "400px" }}
            key={color.id}
          >
            <h3>{color.name}</h3>
            <p>{color.year}</p>
            <div style={{ backgroundColor: color.color, color: "white" }}>
              {color.color}
            </div>
            <p>Pantone Value: {color.pantone_value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ColorsPage;
