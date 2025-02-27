const fetchItem = async (id) => {
  const tipo = document.querySelector(".main__filtros .btn--active").id;

  try {
    const url = `https://api.themoviedb.org/3/${tipo}/${id}?api_key=d43da283da70651ed97d5a56b4db9d6b&language=es-MX`;
    const respuesta = await fetch(url);
    const datos = await respuesta.json();

    return datos;
  } catch (e) {
    console.log(e);
  }
};

export default fetchItem;
