"use client"

import { postUser } from "@/queries/user"

export const CreateUser = () => {
  return (
    <button onClick={() => postUser('name')}>
      Create user
    </button>
  )
}