import { CircleUser } from "lucide-react";

export default function Navbar({ onLoginClick }) {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-[6px] p-4 flex items-center justify-end gap-6 sm:gap-10 md:gap-12 lg:gap-16 px-6 sm:px-12 md:px-16 w-full h-20 border-b border-white/[0.03] transition-all duration-300">
      <nav className="bg-transparent">
        <ul className="flex items-center gap-6 sm:gap-8 md:gap-10">
          <li>
            <a
              href="#"
              className="text-sm sm:text-base md:text-lg whitespace-nowrap transition-colors font-bold"
              style={{ color: "rgba(225, 224, 204, 0.9)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#10b981")}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "rgba(225, 224, 204, 0.9)")
              }
            >
              Cómo funciona
            </a>
          </li>
          <li>
            <a
              href="#comunidad"
              className="text-sm sm:text-base md:text-lg whitespace-nowrap transition-colors font-bold"
              style={{ color: "rgba(225, 224, 204, 0.9)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#10b981")}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "rgba(225, 224, 204, 0.9)")
              }
            >
              Comunidad
            </a>
          </li>
          <li>
            <a
              href="#seguridad"
              className="text-sm sm:text-base md:text-lg whitespace-nowrap transition-colors font-bold"
              style={{ color: "rgba(225, 224, 204, 0.9)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#10b981")}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "rgba(225, 224, 204, 0.9)")
              }
            >
              Seguridad
            </a>
          </li>
        
              </ul>
      </nav>

      <div className="shrink-0">
        <button
          onClick={onLoginClick}
          className="group flex items-center gap-2 bg-black hover:bg-neutral-900 border border-white/10 text-white font-bold text-sm sm:text-base md:text-lg px-5 py-2.5 rounded-full cursor-pointer outline-none transition-all duration-300 shadow-md shadow-black/50 hover:scale-105 active:scale-98"
        >
          <CircleUser className="w-4 h-4 sm:w-5 sm:h-5 text-white transition-transform group-hover:scale-110" />
          <span>Iniciar sesión</span>
        </button>
      </div>
    </div>
  );
}
