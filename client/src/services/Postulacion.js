const baseUrl =
  import.meta.env.VITE_BACKEND_URL

export const getPostulacion = async () => {
  try {
    const response = await fetch(`${baseUrl}postulacion`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    })
    return response;
  } catch (error) {
    console.log(error);
  }
};
export const deletePostulacion = async (id, callback) => {
  const response = await fetch(`${baseUrl}postulacion/${id}`, {
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
export const updatePostulacion = async (postulacionactual, callback) => {
  const response = await fetch(`${baseUrl}postulacion/${postulacionactual.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify({
      id_usuarios: postulacionactual.id_usuarios,
      id_trabajos: postulacionactual.id_trabajos,
    })
  });
  console.log(postulacionactual.id);
  if (response.ok) {
    callback();
  }
}
export const postPostulacion = async (id_usuarios, id_trabajos, callback) => {
  const response = await fetch(`${baseUrl}postulacion`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify({
      id_usuarios: id_usuarios,
      id_trabajos: id_trabajos,
    })
  });
  if (response.ok) {
    callback();
  }
}