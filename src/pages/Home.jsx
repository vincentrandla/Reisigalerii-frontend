import { useNavigate } from "react-router-dom";
import Header from "../components/Header.jsx";
import { countries } from "../components/offers.js";

function CountryTile({ country, onClick }) {
  return (
    <button
      onClick={onClick}
      className="group relative h-64 overflow-hidden text-left"
    >
      <img
        src={`https://picsum.photos/seed/${country.seed}/500/600`}
        alt={country.name}
        className="absolute inset-0 w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#16261F]/90 via-[#16261F]/10 to-transparent" />
      <div className="relative h-full flex flex-col justify-end p-5">
        <h3
          className="text-2xl text-[#F6F2E9]"
          style={{ fontFamily: "'Fraunces', serif" }}
        >
          {country.name}
        </h3>
        <p className="text-sm text-[#F6F2E9]/80 mt-1">alates €{country.from}</p>
      </div>
    </button>
  );
}

export default function Home() {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen bg-[#F6F2E9]"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Fraunces:wght@400;500&family=Inter:wght@400;500;600&display=swap"
        rel="stylesheet"
      />
      <Header />

      <section className="px-8 md:px-16 pt-14 pb-10">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-xl">
            <h1
              className="text-4xl md:text-5xl leading-[1.1]"
              style={{ fontFamily: "'Fraunces', serif", color: "#16261F" }}
            >
              Kuhu läheme järgmiseks?
            </h1>
            <p className="mt-4 text-[#16261F]/70 text-base leading-relaxed">
              Vali sihtkoht ja vaata parimaid hotellipakkumisi.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 md:px-16 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-1">
            {countries.map((c) => (
              <CountryTile
                key={c.slug}
                country={c}
                onClick={() => navigate(`/sihtkoht/${c.slug}`)}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
