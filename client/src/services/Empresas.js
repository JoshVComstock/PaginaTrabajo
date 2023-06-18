const baseUrl =
  import.meta.env.VITE_BACKEND_URL

export const getEmpresas = async () => {
  try {
    const response = await fetch(`${baseUrl}empresa`, {
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
export const deleteEmpresas = async (id, callback) => {

  const response = await fetch(`${baseUrl}empresa/${id}`, {
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
export const updateEmpresas = async (empresaactual, callback) => {

  const response = await fetch(`${baseUrl}empresa/${empresaactual.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify({
      nombre: empresaactual.direccion,
      direccion: empresaactual.direccion,
      telefono: empresaactual.telefono,
      email: empresaactual.email,
    })
  });
  if (response.ok) {
    callback();
  }
}
export const postEmpresas = async (nombre, direccion, telefono, email, callback) => {
  const response = await fetch(`${baseUrl}empresa`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify({
      nombre: nombre,
      direccion: direccion,
      telefono: telefono,
      email: email,
    })
  });
  if (response.ok) {
    callback();
  }
}