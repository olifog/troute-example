"use server"

export const getUser = async ({id}: {id: string}) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log('User fetched:', id);

  return {
    id,
    name: 'John Doe',
  }
}

export const postUser = async (name: string) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log('User created:', name);

  return {
    id: '123',
    name,
  };
}
