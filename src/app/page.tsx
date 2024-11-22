"use client";

import { Button } from "@/components/ui/button";
import { getUsers } from "@/server/actions/users/getUsers";

export default function Home() {
  // s
  return (
    <div>
      <Button
        onClick={() => {
          getUsers().then((v) => {
            console.log("users:", v);
          });
        }}
      >
        DEBUG: ALL USERS
      </Button>
    </div>
  );
}
