"use server";

export const postUser = async (name: string) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log('User created:', name);

  return {
    id: '123',
    name,
  };
}