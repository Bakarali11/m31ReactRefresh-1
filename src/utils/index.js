export const signUpFetch = async (usern, userE, pass) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_REST_API}user`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: usern,
        email: userE,
        password: pass,
      }),
    });
    const data = await response.json();
    localStorage.setItem("MyToken", data.token);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const tokenCheck = async (token, setter) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_REST_API}user`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    setter(data.username);
  } catch (error) {
    console.log(error);
  }
};
