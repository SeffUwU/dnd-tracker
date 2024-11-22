"use client";

import LoginForm from "@/components/auth/LoginForm";
import { Button } from "@/components/ui/button";
import { getUsers } from "@/server/actions/users/getUsers";

export default function Home() {
  return (
    <div>
      <Button
        onClick={() => {
          getUsers().then(console.log);
        }}
      >
        DEBUG: ALL USERS
      </Button>
      <LoginForm />
    </div>
  );
}
