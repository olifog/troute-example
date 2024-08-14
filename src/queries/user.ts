
export const getUser = async ({id}: {id: string}) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log('User fetched:', id);

  return {
    id,
    name: 'John Doe',
  }
}
