const fetchGeneros = async (filtro = "movie") => {
  const tipo = filtro === "movie" ? "movie" : "tv";
  const url = `https://api.themoviedb.org/3/genre/${tipo}/list?api_key=d43da283da70651ed97d5a56b4db9d6b&language=es-MX`;

  try {
    const resultados = await fetch(url);
    const datos = await resultados.json();
    return datos.genres;
  } catch (e) {
    console.log(e);
  }
};

export default fetchGeneros;
