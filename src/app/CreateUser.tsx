"use client"

import { postUser } from "@/actions/user"

export const CreateUser = () => {
  return (
    <button onClick={() => postUser("name")}>
      Create user
    </button>
  )
}