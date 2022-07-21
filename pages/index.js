import { Avatar, Button, CircularProgress } from "@mui/material";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../components/Auth/firebaseAuth";
import { signOut } from "firebase/auth";

export default function Home() {
  const [user, loading, error] = useAuthState(auth);

  const signOutFromApp = () => {
    signOut(auth);
  };

  const UserInformation = () => {
    if (user === null) {
      return null;
    }
    if (user) {
      return (
        <div className="flex flex-col p-4 text-2xl rounded-xl ring gap-y-2">
          <div>
            <strong>Name:</strong> {user.displayName}
          </div>
          <div>
            <strong>Email:</strong> {user.email}
          </div>
          <div>
            <strong>UID:</strong> {user.uid}
          </div>
        </div>
      );
    }
  };
  if (loading)
    return (
      <div className="flex items-center justify-center w-screen min-h-screen">
        <CircularProgress className="text-6xl" />
      </div>
    );
  return (
    <div className="flex flex-col items-center justify-center w-screen min-h-screen">
      <Button
        className="mb-4"
        variant="outlined"
        startIcon={<Avatar src={user?.photoURL} />}
        onClick={signOutFromApp}>
        Sign Out <strong className="ml-1">{user?.displayName}</strong>
      </Button>
      <UserInformation />
    </div>
  );
}
