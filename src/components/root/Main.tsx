import { Router } from "~/components/router/Router";
import { auth } from "~/lib/firebase"; // Import the pre-initialized auth directly
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useSignIn, useSignOut } from "~/components/contexts/UserContext";

function Main() {
  const { signIn } = useSignIn();
  const { signOut } = useSignOut();

  useEffect(() => {
    // Listen for auth changes using the securely configured auth instance
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        signIn(user);
      } else {
        signOut();
      }
    });

    return () => unsubscribe(); // Clean up listener on unmount
  }, [signIn, signOut]);

  return (
    <main>
      <Router />
    </main>
  );
}

export default Main;
