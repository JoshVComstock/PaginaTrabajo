const baseUrl =
  import.meta.env.VITE_BACKEND_URL
export const getRoles = async () => {

  try {
    const response = await fetch(`${baseUrl}rol`, {
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

export const getRolesh = async () => {

  try {
    const response = await fetch(`${baseUrl}roles`, {
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


export const deleteRoles = async (id, callback) => {

  const response = await fetch(`${baseUrl}rol/${id}`, {
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
export const updateRoles = async (rolactual, callback) => {
  const response = await fetch(`${baseUrl}rol/${rolactual.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify({
      nombre: rolactual.nombre,
    })
  });
  if (response.ok) {
    callback();
  }
}
export const postRoles = async (nombre, callback) => {
  const response = await fetch(`${baseUrl}rol`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify({
      nombre: nombre,
    })
  });
  if (response.ok) {
    callback();
  }
}