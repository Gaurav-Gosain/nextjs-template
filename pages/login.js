import { CircularProgress } from "@mui/material";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../components/Auth/firebaseAuth";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { GoogleAuthProvider } from "firebase/auth";

// Configure FirebaseUI.
const uiConfig = {
  // Redirect to / after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  //   signInSuccessUrl: "/",
  // Popup signin flow rather than redirect flow.
  //   signInFlow: "popup",
  // We will display GitHub as auth providers.
  signInOptions: [GoogleAuthProvider.PROVIDER_ID],
};

export default function Login() {
  const [user, loading, error] = useAuthState(auth);

  const LoginButton = () => {
    if (loading) return <CircularProgress className="text-6xl" />;
    if (error) return <div>{error.message}</div>;
    if (user === null)
      return <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />;
  };

  return (
    <section className="h-screen">
      <div className="h-full px-6 text-gray-800">
        <div className="flex flex-wrap items-center justify-center h-full xl:justify-center lg:justify-between g-6">
          <div className="mb-12 grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 md:mb-0">
            <img src="/login.svg" className="w-full" alt="Login Image" />
          </div>
          <div className="flex flex-col-reverse gap-4 mb-12 md:flex-col xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12">
            <img src="/GDSC_logo.png" className="w-full" alt="Login Image" />
            <LoginButton />
          </div>
        </div>
      </div>
    </section>
  );
}
