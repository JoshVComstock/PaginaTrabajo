const baseUrl =
  import.meta.env.VITE_BACKEND_URL

export const getTrabajo = async () => {
  try {
    const response = await fetch(`${baseUrl}trabajo`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
    return response;
  } catch (error) {
    console.log(error);
  }
};



export const deleteTrabajo = async (id, callback) => {
  const response = await fetch(`${baseUrl}trabajo/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
    },

  })
  if (response.ok) {
    callback();
  }
};
export const updateTrabajo = async (trabajoactual, callback) => {
  const response = await fetch(`${baseUrl}trabajo/${trabajoactual.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify({
      nombre: trabajoactual.nombre,
      descripcion:trabajoactual.descripcion,
      id_empresa: trabajoactual.id_empresa,
      estado: trabajoactual.estado,
      fecha: trabajoactual.fecha,
    })
  });
  if (response.ok) {
    callback();
  }
}
export const postTrabajo = async (nombre,descripcion, id_empresa, estado, fecha, callback) => {
  const response = await fetch(`${baseUrl}trabajo`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify({
      nombre: nombre,
      descripcion:descripcion,
      id_empresas: id_empresa,
      estado: estado,
      fecha: fecha,
    })
  });
  if (response.ok) {
    callback();
  }
}