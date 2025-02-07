"use client"

import Button from "../components/Button";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
    return (
      <div className="flex flex-col gap-5 items-center justify-center  py-48 bg-gray-100">
        <h1 className="text-6xl font-bold">404 Page Not Found</h1>
        <p className="text-gray-600 ">
          Your visited page not found. You may go home page.
          </p>

          <Button variant="red"  handleOnClick={ () => router.push("/")  } >Back to Homepage</Button>
      </div>
    );
  }
  