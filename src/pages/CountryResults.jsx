import { useState, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ArrowUpRight,
  ArrowLeft,
  Calendar,
  Star,
  SlidersHorizontal,
} from "lucide-react";
import Header from "../components/Header.jsx";
import {
  countries,
  offers,
  durations,
  durationRanges,
} from "../components/offers.js";

function Stars({ count }) {
  return (
    <span className="flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-3 h-3 fill-[#C97D3D] text-[#C97D3D]" />
      ))}
    </span>
  );
}

function HotelCard({ offer }) {
  return (
    <div className="group border border-[#DDE3DE] hover:border-[#16261F] transition-colors duration-200 p-5 flex flex-col justify-between h-full bg-[#F6F2E9]">
      <div>
        <div className="flex items-start justify-between gap-3">
          <h3
            className="text-2xl leading-tight"
            style={{ fontFamily: "'Fraunces', serif", color: "#16261F" }}
          >
            {offer.destination}
          </h3>
          <ArrowUpRight
            className="w-5 h-5 text-[#16261F] opacity-0 group-hover:opacity-100 transition-opacity duration-200 shrink-0 mt-1"
            strokeWidth={1.5}
          />
        </div>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-sm text-[#16261F]">{offer.hotel}</span>
          <Stars count={offer.stars} />
        </div>

        <div className="flex items-center gap-4 mt-3 text-sm text-[#2F6F63]">
          <span className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" strokeWidth={1.75} />
            {offer.dates}
          </span>
          <span>{offer.nights} ööd</span>
        </div>

        <p className="mt-3 text-sm text-[#16261F]/70">{offer.board}</p>
      </div>

      <div className="flex items-end justify-end mt-6 pt-4 border-t border-[#DDE3DE]">
        <span
          className="text-2xl text-[#C97D3D]"
          style={{ fontFamily: "'Fraunces', serif" }}
        >
          €{offer.price}
        </span>
      </div>
    </div>
  );
}

export default function CountryResults() {
  const { country: countrySlug } = useParams();
  const country = countries.find((c) => c.slug === countrySlug);

  const [duration, setDuration] = useState(null);
  const [maxPrice, setMaxPrice] = useState(1600);
  const [minStars, setMinStars] = useState(0);
  const [sortBy, setSortBy] = useState("price");

  const filtered = useMemo(() => {
    return offers
      .filter((o) => o.countrySlug === countrySlug)
      .filter((o) => {
        const matchesDuration =
          !duration ||
          (o.nights >= durationRanges[duration][0] &&
            o.nights <= durationRanges[duration][1]);
        return matchesDuration && o.price <= maxPrice && o.stars >= minStars;
      })
      .sort((a, b) => {
        if (sortBy === "price") return a.price - b.price;
        if (sortBy === "stars") return b.stars - a.stars;
        if (sortBy === "nights") return b.nights - a.nights;
        return 0;
      });
  }, [countrySlug, duration, maxPrice, minStars, sortBy]);

  if (!country) {
    return (
      <div
        className="min-h-screen bg-[#F6F2E9]"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        <Header />
        <section className="px-8 md:px-16 pt-14">
          <p className="text-[#16261F]">Sihtkohta ei leitud.</p>
          <Link to="/" className="text-[#2F6F63] underline">
            Tagasi avalehele
          </Link>
        </section>
      </div>
    );
  }

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

      <section className="px-8 md:px-16 pt-10 pb-6">
        <div className="max-w-7xl mx-auto">
          <Link
            to="/"
            className="flex items-center gap-2 text-sm text-[#16261F]/60 hover:text-[#16261F] mb-6 w-fit"
          >
            <ArrowLeft className="w-4 h-4" strokeWidth={1.75} />
            Kõik sihtkohad
          </Link>
          <h1
            className="text-3xl md:text-4xl"
            style={{ fontFamily: "'Fraunces', serif", color: "#16261F" }}
          >
            {country.name}
          </h1>
        </div>
      </section>

      <section className="px-8 md:px-16 pb-6 border-b border-[#DDE3DE]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center gap-5 text-sm pb-6">
            <SlidersHorizontal className="w-3.5 h-3.5" strokeWidth={1.75} />
            Filtrid
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setDuration(null)}
              className={`px-3 py-1.5 border transition-colors ${
                !duration
                  ? "bg-[#2F6F63] text-[#F6F2E9] border-[#2F6F63]"
                  : "border-[#DDE3DE] text-[#16261F]/70"
              }`}
            >
              Kõik kestused
            </button>
            {durations.map((d) => (
              <button
                key={d}
                onClick={() => setDuration(d)}
                className={`px-3 py-1.5 border transition-colors ${
                  duration === d
                    ? "bg-[#2F6F63] text-[#F6F2E9] border-[#2F6F63]"
                    : "border-[#DDE3DE] text-[#16261F]/70"
                }`}
              >
                {d}
              </button>
            ))}
          </div>

          <label className="flex items-center gap-2 text-[#16261F]/70">
            Max €{maxPrice}
            <input
              type="range"
              min="150"
              max="1600"
              step="50"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="accent-[#C97D3D]"
            />
          </label>

          <label className="flex items-center gap-2 text-[#16261F]/70">
            Tärnid
            <select
              value={minStars}
              onChange={(e) => setMinStars(Number(e.target.value))}
              className="border border-[#DDE3DE] px-2 py-1 bg-[#F6F2E9] outline-none"
            >
              <option value={0}>Kõik</option>
              <option value={3}>3+</option>
              <option value={4}>4+</option>
              <option value={5}>5</option>
            </select>
          </label>

          <label className="flex items-center gap-2 text-[#16261F]/70 ml-auto">
            Järjesta
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-[#DDE3DE] px-2 py-1 bg-[#F6F2E9] outline-none"
            >
              <option value="price">Hind</option>
              <option value="stars">Tärnid</option>
              <option value="nights">Ööde arv</option>
            </select>
          </label>
        </div>
      </section>

      <section className="px-8 md:px-16 pt-6 pb-16">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm text-[#16261F]/50 mb-5">
            {filtered.length} hotelli leitud
          </p>
          {filtered.length === 0 ? (
            <div className="border border-[#DDE3DE] p-10 text-center text-[#16261F]/60">
              Ühtegi pakkumist ei leitud. Proovi filtreid muuta.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#DDE3DE]">
              {filtered.map((offer, i) => (
                <HotelCard key={i} offer={offer} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
