import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Landing from "./pages/Landing";
import Login from "./pages/Login";

export default function App() {
  const [screen, setScreen] = useState("landing");

  return (
    <AnimatePresence mode="wait">
      {screen === "landing" && (
        <motion.div key="landing" exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
          <Landing onStart={() => setScreen("login")} />
        </motion.div>
      )}
      {screen === "login" && (
        <motion.div
          key="login"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Login 
            onBack={() => setScreen("landing")} 
            onLogin={() => setScreen("landing")} 
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
