import { getUser } from "@/queries/user";
import { ClientUser } from "./ClientUser";
import { CreateUser } from "./CreateUser";

export default async function Home() {
  const user = await getUser({id: '123'});

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        Server user: {user.name}
      </div>
      <ClientUser />
      <CreateUser />
    </main>
  );
}
