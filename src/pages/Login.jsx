import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Mail, Lock, ShieldCheck } from "lucide-react";
import BackgroundMap from "../components/BackgroundMap";

export default function Login({ onBack, onLogin }) {
  const [mode, setMode] = useState("login");

  return (
    <div className="min-h-screen bg-black relative flex items-center justify-center p-4 md:p-6 overflow-hidden">
      <BackgroundMap />
      
      <div className="noise-overlay absolute inset-0 opacity-[0.5] mix-blend-overlay pointer-events-none" />

      <button
        onClick={onBack}
        className="group absolute top-6 left-6 sm:top-8 sm:left-8 flex items-center gap-2 bg-black/40 backdrop-blur-[6px] border border-white/10 px-4 py-2.5 rounded-full text-[#E1E0CC] hover:text-[#10b981] hover:border-emerald-500/30 transition-all duration-300 hover:scale-105 active:scale-98 text-xs sm:text-sm z-10 shadow-md shadow-black/40"
      >
        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
        <span className="font-bold">Volver</span>
      </button>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-md bg-black/20 backdrop-blur-[6px] rounded-2xl md:rounded-[2rem] p-7 sm:p-10 border border-white/10 shadow-2xl flex flex-col items-center"
      >
        <ShieldCheck className="w-10 h-10 text-emerald-500 mb-4" />

        <h1 className="text-[#E1E0CC] text-2xl sm:text-3xl font-medium leading-[1.05] mb-2 text-center">
          {mode === "login" ? "Bienvenido de vuelta" : "Únete a la red"}
        </h1>
        <p className="text-gray-500 text-xs sm:text-sm mb-6 text-center">
          {mode === "login"
            ? "Ingresa para acceder a las alertas de tu zona"
            : "Crea tu cuenta para empezar a recibir alertas de tu zona"}
        </p>

        <div className="flex flex-col items-center gap-1.5 mb-8">
          <ShieldCheck className="w-7 h-7 text-emerald-500" />
          <span className="text-gray-400 text-xs font-semibold uppercase tracking-wider">
            {mode === "login" ? "Iniciar sesión" : "Registrarse"}
          </span>
        </div>

        <form
          className="space-y-4 w-full"
          onSubmit={(e) => {
            e.preventDefault();
            onLogin();
          }}
        >
          {mode === "signup" && (
            <div className="relative">
              <input
                type="text"
                placeholder="Nombre completo"
                className="w-full bg-black/40 rounded-xl px-4 py-3.5 text-sm text-[#E1E0CC] placeholder:text-gray-500 border border-white/5 focus:border-emerald-500/40 transition-colors"
              />
            </div>
          )}

          <div className="relative">
            <Mail className="w-4 h-4 text-gray-500 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Correo electrónico"
              className="w-full bg-black/40 rounded-xl pl-11 pr-4 py-3.5 text-sm text-[#E1E0CC] placeholder:text-gray-500 border border-white/5 focus:border-emerald-500/40 transition-colors outline-none"
            />
          </div>

          <div className="relative">
            <Lock className="w-4 h-4 text-gray-500 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="password"
              placeholder="Contraseña"
              className="w-full bg-black/40 rounded-xl pl-11 pr-4 py-3.5 text-sm text-[#E1E0CC] placeholder:text-gray-500 border border-white/5 focus:border-emerald-500/40 transition-colors outline-none"
            />
          </div>

          <button
            type="submit"
            className="group w-full flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-xl py-3.5 mt-4 transition-all duration-300 shadow-lg shadow-emerald-500/10 cursor-pointer outline-none"
          >
            <span className="text-sm">
              {mode === "login" ? "Iniciar Sesión" : "Crear Cuenta"}
            </span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </button>
        </form>

        <div className="flex items-center gap-4 my-6 w-full text-gray-500 text-xs">
          <div className="flex-1 h-[1px] bg-white/10" />
          <span>O continúa con</span>
          <div className="flex-1 h-[1px] bg-white/10" />
        </div>

        <button
          onClick={(e) => {
            e.preventDefault();
            onLogin();
          }}
          className="w-full flex items-center justify-center gap-2 bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 text-white font-bold rounded-xl py-3.5 transition-all duration-300 cursor-pointer outline-none shadow-sm"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
          </svg>
          <span className="text-sm">Google</span>
        </button>

        <p className="text-center text-gray-500 text-xs mt-8">
          {mode === "login" ? "¿No tienes cuenta? " : "¿Ya tienes cuenta? "}
          <button
            onClick={() => setMode(mode === "login" ? "signup" : "login")}
            className="text-emerald-500 hover:underline font-semibold"
          >
            {mode === "login" ? "Regístrate" : "Inicia sesión"}
          </button>
        </p>
      </motion.div>
    </div>
  );
}
