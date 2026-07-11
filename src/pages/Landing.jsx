import Hero from "../components/Hero";
import About from "../components/About";
import Features from "../components/Features";
import Comments from "../components/Comments";

export default function Landing({ onStart }) {
  return (
    <div className="bg-black">
      <Hero onStart={onStart} />
      <About />
      <Features />
      <Comments />
    </div>
  );
}
