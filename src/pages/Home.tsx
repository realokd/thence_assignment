import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

const Home = () => {
  return (
    <main className="w-screen min-h-screen flex flex-col justify-start px-6 py-6 font-manrope">
      <Header />
      <Hero />
      <Footer />
    </main>
  );
};

export default Home;
