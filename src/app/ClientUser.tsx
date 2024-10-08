"use client"

import { troute } from "@/troute";

export const ClientUser = () => {
  const {data: user} = troute.getUser({params: { id: '123' }});

  if (!user) {
    return <div>Loading...</div>
  }

  return <div>
    {user.name}
  </div>
}
