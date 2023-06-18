const baseUrl =
  import.meta.env.VITE_BACKEND_URL

export const getRegister = async () => {
  try {
    const response = await fetch(`${baseUrl}usuarios`, {
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
export const deleteRegister = async (id, callback) => {
  const response = await fetch(`${baseUrl}register/${id}`, {
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

export const postRegister = async (  nombre, apellidopaterno, apellidomaterno, fecha_nacimiento, carnet, email, telefono, id_roles, password, password_confirmation, callback) => {
  console.log(JSON.stringify({
    nombre:nombre,
    apellidopaterno:apellidopaterno,
    apellidomaterno:apellidomaterno,
    fecha_nacimiento:fecha_nacimiento,
    carnet:carnet,
    email:email,
    telefono:telefono,
    id_roles:id_roles,
    password:password,
    password_confirmation:password_confirmation,

  }))
  const response = await fetch(`${baseUrl}register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify({
      nombre:nombre,
      apellidopaterno:apellidopaterno,
      apellidomaterno:apellidomaterno,
      fecha_nacimiento:fecha_nacimiento,
      carnet:carnet,
      email:email,
      telefono:telefono,
      id_roles:id_roles,
      password:password,
      password_confirmation:password_confirmation,

    })
  });
  if (response.ok) {
    callback();
  }
}