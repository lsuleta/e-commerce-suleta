import React, { useEffect, useState } from "react";

const FetchingData = () => {
  // const obtenerPost = fetch("https://jsonplaceholder.typicode.com/users");
  // obtenerPost.then((res) => res.json()).then((res) => console.log(res));

  const [data, setData] = useState([]);
  const [dataId, setDataId] = useState({});

  useEffect(() => {
    const obtener = fetch("https://jsonplaceholder.typicode.com/users");
    obtener.then((res) => res.json()).then((res) => setData(res));

    const obtenerId = fetch("https://jsonplaceholder.typicode.com/users/4");
    obtenerId.then((res) => res.json()).then((res) => setDataId(res));
  }, []);

  const crear = () => {
    const crearPost = fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify({
        id: 11,
        name: "Leanne Graham",
        username: "Bret",
      }),
    });
    crearPost.then((res) => res.json()).then((res) => console.log(res));
  };

  console.log(data);
  console.log(dataId);

  return (
    <div>
      <h1>peticiones</h1>
      <button onClick={crear}>crear</button>
    </div>
  );
};

export default FetchingData;
