import { Button } from "@mui/material";
import Head from "next/head";

export default function Home() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Button
        className="p-8 text-3xl rounded-2xl"
        color="primary"
        variant="contained"
      >
        Welcome to GDSC!
      </Button>
    </div>
  );
}
