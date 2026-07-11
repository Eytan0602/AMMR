import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, MessageSquare } from "lucide-react";
import WordsPullUpMultiStyle from "./WordsPullUpMultiStyle";

const testimonials = [
  {
    id: 1,
    name: "Estela Ortiz",
    district: "Miraflores",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    stars: 5,
  },
  {
    id: 2,
    name: "Ana Salinas",
    district: "Lince",
    text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    stars: 5,
  },
  {
    id: 3,
    name: "Jorge Mendoza",
    district: "Surco",
    text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem.",
    stars: 5,
  },
  {
    id: 4,
    name: "María Fernández",
    district: "Jesús María",
    text: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem.",
    stars: 5,
  },
  {
    id: 5,
    name: "Alonso Torres",
    district: "San Miguel",
    text: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.",
    stars: 5,
  },
  {
    id: 6,
    name: "Diego Castro",
    district: "Chorrillos",
    text: "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae.",
    stars: 5,
  },
  {
    id: 7,
    name: "Carlos Vargas",
    district: "Barranco",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.",
    stars: 5,
  },
  {
    id: 8,
    name: "Patricia Luna",
    district: "La Molina",
    text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos.",
    stars: 5,
  },
  {
    id: 9,
    name: "Gabriel Ruiz",
    district: "Magdalena",
    text: "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque.",
    stars: 5,
  },
  {
    id: 10,
    name: "Lucía Paredes",
    district: "San Borja",
    text: "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus.",
    stars: 5,
  },
  {
    id: 11,
    name: "Héctor Soto",
    district: "San Isidro",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    stars: 5,
  },
  {
    id: 12,
    name: "Sofía Vega",
    district: "Pueblo Libre",
    text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum, laboriosam nisi ut.",
    stars: 5,
  },
];

function TestimonialCard({ t }) {
  return (
    <div className="w-[340px] sm:w-[360px] shrink-0 bg-[#101010] border border-white/5 rounded-2xl p-6 flex flex-col justify-between hover:border-emerald-500/20 hover:shadow-lg hover:shadow-emerald-500/5 transition-all duration-300 relative group text-left">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex gap-1">
            {Array.from({ length: t.stars }).map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-emerald-500 text-emerald-500" />
            ))}
          </div>
          <MessageSquare className="w-4 h-4 text-emerald-500/40 group-hover:text-emerald-500 transition-colors" />
        </div>
        <p className="text-[#DEDBC8]/90 text-sm leading-relaxed mb-6 italic">
          "{t.text}"
        </p>
      </div>

      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 text-xs font-semibold">
          {t.name[0]}
        </div>
        <div>
          <p className="text-[#E1E0CC] text-xs font-semibold">{t.name}</p>
          <p className="text-gray-500 text-[10px]">{t.district}</p>
        </div>
      </div>
    </div>
  );
}

export default function Comments() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const row1 = testimonials.slice(0, 6);
  const row2 = testimonials.slice(6, 12);

  return (
    <section id="comunidad" className="bg-black py-20 sm:py-28 px-0 relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
        <div className="w-[80vw] h-[80vw] max-w-[800px] rounded-full bg-emerald-500/20 blur-[120px]" />
      </div>

      <div ref={ref} className="relative max-w-6xl mx-auto text-center px-4 mb-12 sm:mb-16">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="inline-block bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-[10px] font-semibold tracking-[0.2em] uppercase px-3 py-1 rounded-full mb-6"
        >
          Comunidad
        </motion.span>

        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-none mb-4 text-[#E1E0CC]">
          <WordsPullUpMultiStyle
            segments={[
              { text: "Lo que dicen los ", className: "text-[#E1E0CC] font-medium" },
              { text: "vecinos.", className: "italic font-serif text-emerald-500" },
            ]}
          />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-gray-500 text-xs sm:text-sm md:text-base max-w-2xl mx-auto mt-2"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </motion.p>
      </div>

      <div className="w-full overflow-hidden mb-6 relative">
        <div className="flex gap-6 animate-marquee-left w-max py-4 px-4">
          {[...row1, ...row1].map((t, idx) => (
            <TestimonialCard key={`${t.id}-${idx}`} t={t} />
          ))}
        </div>
      </div>

      <div className="w-full overflow-hidden relative">
        <div className="flex gap-6 animate-marquee-right w-max py-4 px-4">
          {[...row2, ...row2].map((t, idx) => (
            <TestimonialCard key={`${t.id}-${idx}`} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
