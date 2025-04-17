const credentials = {
  username: "test",
  password: "test",
};

/**
 * This function mocks data that you would receive from BE don't modify it
 */
export const login = async (userName: string, password: string) => {
  if (userName === credentials.username && password === credentials.password) {
    return Promise.resolve({
      name: "John Doe",
      dateOfBirth: "12.12.1986",
      weight: "86kg",
      height: "185cm",
      diagnosis: ["Arthritis", "Diabetes"],
    });
  }

  throw new Error();
};
