import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Shield, EyeOff, Lock, Radio, Route, Bot, ArrowRight, Check, ShieldAlert } from "lucide-react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import WordsPullUpMultiStyle from "./WordsPullUpMultiStyle";

const CENTER = [-12.0464, -77.0428];

function mapIcon(color) {
  return L.divIcon({
    className: "",
    html: `<div style="width:12px;height:12px;border-radius:50%;background:${color};border:2px solid black;box-shadow:0 0 0 3px rgba(255,255,255,0.1)"></div>`,
    iconSize: [12, 12],
    iconAnchor: [6, 6],
  });
}

function LiveCard() {
  return (
    <div className="flip-card w-full h-[400px] cursor-pointer">
      <div className="flip-card-inner">
        {/* FRONT: Satellite Radar Sweep */}
        <div className="flip-card-front bg-[#0a0a0a] border border-white/5 flex flex-col justify-between p-6 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center opacity-60 pointer-events-none">
            <div className="relative w-40 h-40">
              <div className="absolute inset-0 rounded-full border border-alert/30" />
              <div className="absolute inset-[20%] rounded-full border border-alert/25" />
              <div className="absolute inset-[40%] rounded-full border border-alert/20" />
              <div className="absolute inset-0 radar-sweep">
                <div
                  className="absolute top-1/2 left-1/2 w-1/2 h-[1.5px] origin-left"
                  style={{ background: "linear-gradient(90deg, rgba(255,90,60,0.9), rgba(255,90,60,0))" }}
                />
              </div>
              <div className="absolute top-[30%] left-[65%] w-1.5 h-1.5 rounded-full bg-alert alert-ping" />
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none" />
          
          <div className="z-10 w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-500">
            <Radio className="w-5 h-5 animate-pulse" />
          </div>
          
          <div className="z-10 text-left">
            <p className="text-gray-500 text-[10px] mb-1 font-mono tracking-widest">REALTIME</p>
            <p className="text-[#E1E0CC] text-lg font-bold mb-2">
              Satélite Vigía
            </p>
            <p className="text-gray-400 text-xs leading-relaxed mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="text-gray-500 text-[10px] flex items-center gap-1.5">
              <span>Pasa el cursor para ver el mapa</span>
              <ArrowRight className="w-3 h-3 text-emerald-500" />
            </p>
          </div>
        </div>

        <div className="flip-card-back bg-black border border-emerald-500/35 overflow-hidden flex flex-col h-full relative">
          <div className="flex-1 w-full h-full relative">
            <MapContainer
              center={[-12.0200, -77.0600]}
              zoom={13}
              zoomControl={false}
              scrollWheelZoom={false}
              doubleClickZoom={false}
              dragging={false}
              attributionControl={false}
              className="w-full h-full"
            >
              <TileLayer url="https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}" />
            </MapContainer>
            <div className="absolute inset-0 bg-emerald-500/5 pointer-events-none" />
          </div>
          <div className="p-4 bg-[#0a0a0a] border-t border-white/5 text-left z-10">
            <p className="text-[#E1E0CC] text-xs font-semibold">Ubicación satelital en tiempo real</p>
            <p className="text-gray-500 text-[10px]">Actualizado hace instantes · Callao-Lima, PE</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({
  index,
  number,
  title,
  icon,
  items,
}) {
  return (
    <div className="flip-card w-full h-[400px] cursor-pointer">
      <div className="flip-card-inner">
        {/* FRONT: Clean visual highlight with more info (Lorem Ipsum description) */}
        <div className="flip-card-front bg-[#101010] border border-white/5 hover:border-emerald-500/10 flex flex-col justify-between p-6 text-left transition-all duration-300">
          <div>
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-500 mb-6">
              {icon}
            </div>
            <p className="text-gray-500 text-xs mb-1 font-mono tracking-widest">{number}</p>
            <h3 className="text-[#E1E0CC] text-xl font-bold leading-tight mt-2 mb-3">
              {title}
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div>
            <p className="text-emerald-500 text-xs flex items-center gap-1.5 font-semibold">
              <span>Lorem ipsum dolor sit</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </p>
          </div>
        </div>

        {/* BACK: Detailed lists & Saber más */}
        <div className="flip-card-back bg-[#151515] border border-emerald-500/30 flex flex-col justify-between p-6 text-left">
          <div>
            <p className="text-emerald-500 text-xs mb-3 font-mono tracking-widest">{number} / LOREM</p>
            <h4 className="text-[#E1E0CC] text-base font-bold mb-4 border-b border-white/5 pb-2">
              {title}
            </h4>
            <ul className="space-y-3">
              {items.map((item) => (
                <li key={item} className="flex items-start gap-2 text-xs sm:text-sm">
                  <Check className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                  <span className="text-gray-400 leading-tight">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="group inline-flex items-center gap-1.5 text-emerald-500 text-xs sm:text-sm font-semibold w-fit hover:text-emerald-400 transition-colors"
            >
              Lorem ipsum
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" style={{ transform: "rotate(-45deg)" }} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Features() {
  return (
    <section id="como-funciona" className="bg-black py-20 sm:py-28 px-4 sm:px-6 relative overflow-hidden">
      <div className="bg-noise absolute inset-0 opacity-[0.15] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto mb-16 text-center">
        {/* Shield icon badge from Image 4 */}
        <motion.div
          className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 mx-auto mb-6"
        >
          <Shield className="w-6 h-6" />
        </motion.div>

        <div className="text-3xl sm:text-4xl md:text-5xl font-normal text-[#E1E0CC] mb-4">
          <WordsPullUpMultiStyle
            segments={[
              { text: "Seguridad y ", className: "text-[#E1E0CC] font-medium" },
              { text: "Privacidad.", className: "italic font-serif text-emerald-500" },
            ]}
          />
        </div>
        <p className="text-gray-500 text-xs sm:text-sm md:text-base max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula.
        </p>
      </div>

      {/* 4 Cards: LiveCard (Satellite) + 3 FeatureCards */}
      <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <LiveCard />
        <FeatureCard
          index={1}
          number="01"
          title="Lorem ipsum"
          icon={<Lock className="w-5 h-5" />}
          items={[
            "Lorem ipsum dolor sit amet",
            "Consectetur adipiscing elit",
            "Sed do eiusmod tempor",
            "Ut labore et dolore",
          ]}
        />
        <FeatureCard
          index={2}
          number="02"
          title="Lorem ipsum"
          icon={<EyeOff className="w-5 h-5" />}
          items={[
            "Lorem ipsum dolor sit amet",
            "Consectetur adipiscing elit",
            "Sed do eiusmod tempor",
            "Ut labore et dolore",
          ]}
        />
        <FeatureCard
          index={3}
          number="03"
          title="Lorem ipsum"
          icon={<Shield className="w-5 h-5" />}
          items={[
            "Lorem ipsum dolor sit amet",
            "Consectetur adipiscing elit",
            "Sed do eiusmod tempor",
            "Ut labore et dolore",
          ]}
        />
      </div>

      <div className="relative max-w-6xl mx-auto mt-10 flex items-center justify-center gap-2 text-gray-500 text-xs">
        <ShieldAlert className="w-3.5 h-3.5 text-emerald-500" />
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
      </div>
    </section>
  );
}
