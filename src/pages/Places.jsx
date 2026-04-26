
import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  MapPin, Search, Globe, ArrowRight, Star,
  BookOpen, Heart, X, Compass,
  Flame, Sparkles, TrendingUp, ChevronRight
} from "lucide-react";

import paris from "../images/paris.png";
import bali from "../images/bali.png";
import tokyo from "../images/tokyo.png";
import newyork from "../images/new york.png";
import santorini from "../images/santorini.png";
import london from "../images/london.png";
import dubai from "../images/dubai.png";
import rome from "../images/rome.png";
import venice from "../images/venice.png";
import sydney from "../images/sydney.png";
import barcelona from "../images/barcelona.png";
import machupicchu from "../images/machuPicchu.png";
import istanbul from "../images/istanbul.png";
import cairo from "../images/cairo.png";
import maldives from "../images/maldives.png";
import hawaii from "../images/hawaii.png";
import amsterdam from "../images/amsterdam.png";
import prague from "../images/prague.png";
import rio from "../images/Rio de Janeiro.png";
import capetown from "../images/capeTown.png";
import singapore from "../images/singapore.png";
import bangkok from "../images/bangkok.png";
import losangeles from "../images/los angeles.png";
import moscow from "../images/moscow.png";
import seoul from "../images/seoul.png";
import kyoto from "../images/kyoto.png";
import lisbon from "../images/lisbon.png";
import iceland from "../images/iceland.png";
import budapest from "../images/budapest.png";
import phuket from "../images/phuket.png";
import athens from "../images/athens.png";
import edinburgh from "../images/edinburgh.png";
import munich from "../images/munich.png";
import buenosaires from "../images/buenosaires.png";
import zurich from "../images/zurich.png";
import dubaidesert from "../images/dubaiDesert.png";
import marrakech from "../images/marrakech.png";
import hongkong from "../images/hongkong.png";
import kathmandu from "../images/kathmandu.png";

/* ─── Data ─── */
const places = [
  { name: "Paris", country: "France",        img: paris,       desc: "The city of lights and romance with the iconic Eiffel Tower.",         continent: "Europe",      rating: 4.9, stories: 512, badge: "Most Visited", badgeColor: "bg-violet-500",  trending: true  },
  { name: "Bali", country: "Indonesia",      img: bali,        desc: "Tropical beaches, lush rice terraces, and rich spiritual culture.",     continent: "Asia",        rating: 4.8, stories: 341, badge: "Top Pick",    badgeColor: "bg-blue-500",    trending: true  },
  { name: "Tokyo", country: "Japan",         img: tokyo,       desc: "A seamless blend of ancient tradition and cutting-edge technology.",    continent: "Asia",        rating: 4.8, stories: 298, badge: "Trending",    badgeColor: "bg-amber-500",   trending: true  },
  { name: "New York", country: "USA",        img: newyork,     desc: "The Big Apple — iconic skyline, culture, and endless energy.",          continent: "Americas",    rating: 4.7, stories: 487, badge: null,          badgeColor: "",               trending: false },
  { name: "Santorini", country: "Greece",    img: santorini,   desc: "Whitewashed villages perched above the deep blue Aegean Sea.",          continent: "Europe",      rating: 4.9, stories: 284, badge: "Most Loved",  badgeColor: "bg-rose-500",    trending: true  },
  { name: "London", country: "UK",           img: london,      desc: "Historic landmarks, world-class museums, and vibrant street culture.",  continent: "Europe",      rating: 4.7, stories: 376, badge: null,          badgeColor: "",               trending: false },
  { name: "Dubai", country: "UAE",           img: dubai,       desc: "Luxury skyscrapers, desert adventures, and world-record attractions.",  continent: "Middle East", rating: 4.7, stories: 263, badge: "Luxury",      badgeColor: "bg-amber-600",   trending: false },
  { name: "Rome", country: "Italy",          img: rome,        desc: "The Eternal City — 2,000 years of history at every corner.",           continent: "Europe",      rating: 4.8, stories: 321, badge: null,          badgeColor: "",               trending: false },
  { name: "Venice", country: "Italy",        img: venice,      desc: "Romantic canals, gondola rides, and timeless Renaissance art.",         continent: "Europe",      rating: 4.8, stories: 198, badge: "Romantic",    badgeColor: "bg-pink-500",    trending: false },
  { name: "Sydney", country: "Australia",    img: sydney,      desc: "Iconic Opera House, golden beaches, and a vibrant harbour city.",       continent: "Oceania",     rating: 4.7, stories: 215, badge: null,          badgeColor: "",               trending: false },
  { name: "Barcelona", country: "Spain",     img: barcelona,   desc: "Gaudí's masterpieces, tapas culture, and Mediterranean sunshine.",      continent: "Europe",      rating: 4.8, stories: 267, badge: null,          badgeColor: "",               trending: true  },
  { name: "Machu Picchu", country: "Peru",   img: machupicchu, desc: "Mysterious Incan citadel rising above the clouds in the Andes.",        continent: "Americas",    rating: 4.9, stories: 143, badge: "Adventure",   badgeColor: "bg-emerald-500", trending: false },
  { name: "Istanbul", country: "Turkey",     img: istanbul,    desc: "Where East meets West — minarets, bazaars, and the Bosphorus.",         continent: "Europe",      rating: 4.7, stories: 189, badge: null,          badgeColor: "",               trending: false },
  { name: "Cairo", country: "Egypt",         img: cairo,       desc: "Home to the Great Pyramids, the Sphinx, and ancient wonders.",          continent: "Africa",      rating: 4.6, stories: 156, badge: null,          badgeColor: "",               trending: false },
  { name: "Maldives", country: "Indian Ocean", img: maldives,  desc: "Crystal-clear lagoons and luxurious overwater bungalows.",             continent: "Asia",        rating: 4.9, stories: 178, badge: "Luxury",      badgeColor: "bg-cyan-500",    trending: true  },
  { name: "Hawaii", country: "USA",          img: hawaii,      desc: "Volcanic landscapes, surf beaches, and tropical paradise.",             continent: "Americas",    rating: 4.8, stories: 234, badge: null,          badgeColor: "",               trending: false },
  { name: "Amsterdam", country: "Netherlands", img: amsterdam, desc: "Charming canals, world-class museums, and cycling culture.",            continent: "Europe",      rating: 4.7, stories: 201, badge: null,          badgeColor: "",               trending: false },
  { name: "Prague", country: "Czech Republic", img: prague,    desc: "A fairy-tale medieval city with Gothic spires and cobblestone streets.", continent: "Europe",     rating: 4.8, stories: 167, badge: "Hidden Gem",  badgeColor: "bg-indigo-500",  trending: false },
  { name: "Rio de Janeiro", country: "Brazil", img: rio,       desc: "Christ the Redeemer, Carnival energy, and Copacabana beach.",           continent: "Americas",    rating: 4.7, stories: 198, badge: null,          badgeColor: "",               trending: false },
  { name: "Cape Town", country: "South Africa", img: capetown, desc: "Table Mountain, stunning beaches, and vibrant Cape Malay culture.",     continent: "Africa",      rating: 4.8, stories: 143, badge: null,          badgeColor: "",               trending: false },
  { name: "Singapore", country: "Singapore", img: singapore,   desc: "Futuristic gardens, hawker food, and a gleaming city-state.",           continent: "Asia",        rating: 4.8, stories: 212, badge: null,          badgeColor: "",               trending: true  },
  { name: "Bangkok", country: "Thailand",    img: bangkok,     desc: "Ornate temples, street food paradise, and buzzing nightlife.",          continent: "Asia",        rating: 4.6, stories: 245, badge: null,          badgeColor: "",               trending: false },
  { name: "Los Angeles", country: "USA",     img: losangeles,  desc: "Hollywood glamour, Pacific sunsets, and endless creative energy.",      continent: "Americas",    rating: 4.6, stories: 189, badge: null,          badgeColor: "",               trending: false },
  { name: "Moscow", country: "Russia",       img: moscow,      desc: "Red Square, the Kremlin, and St. Basil's Cathedral.",                   continent: "Europe",      rating: 4.5, stories: 98,  badge: null,          badgeColor: "",               trending: false },
  { name: "Seoul", country: "South Korea",   img: seoul,       desc: "K-culture, ancient palaces, and a city that never sleeps.",             continent: "Asia",        rating: 4.8, stories: 234, badge: "Trending",    badgeColor: "bg-amber-500",   trending: true  },
  { name: "Kyoto", country: "Japan",         img: kyoto,       desc: "Bamboo groves, geisha districts, and 1,600 Buddhist temples.",          continent: "Asia",        rating: 4.9, stories: 267, badge: "Must Visit",  badgeColor: "bg-rose-500",    trending: false },
  { name: "Lisbon", country: "Portugal",     img: lisbon,      desc: "Colorful trams, fado music, and pastel de nata.",                       continent: "Europe",      rating: 4.7, stories: 178, badge: "Hidden Gem",  badgeColor: "bg-indigo-500",  trending: true  },
  { name: "Reykjavik", country: "Iceland",   img: iceland,     desc: "Northern lights, geysers, glaciers, and midnight sun.",                 continent: "Europe",      rating: 4.8, stories: 134, badge: "Adventure",   badgeColor: "bg-emerald-500", trending: false },
  { name: "Budapest", country: "Hungary",    img: budapest,    desc: "Thermal baths, ruin bars, and stunning Danube panoramas.",              continent: "Europe",      rating: 4.7, stories: 156, badge: null,          badgeColor: "",               trending: false },
  { name: "Phuket", country: "Thailand",     img: phuket,      desc: "Emerald waters, limestone cliffs, and vibrant beach culture.",          continent: "Asia",        rating: 4.6, stories: 198, badge: null,          badgeColor: "",               trending: false },
  { name: "Athens", country: "Greece",       img: athens,      desc: "The Acropolis, ancient agora, and birthplace of democracy.",            continent: "Europe",      rating: 4.7, stories: 145, badge: null,          badgeColor: "",               trending: false },
  { name: "Edinburgh", country: "Scotland",  img: edinburgh,   desc: "Medieval castle, Arthur's Seat, and the Royal Mile.",                  continent: "Europe",      rating: 4.7, stories: 123, badge: null,          badgeColor: "",               trending: false },
  { name: "Munich", country: "Germany",      img: munich,      desc: "Oktoberfest, Bavarian Alps, and world-class beer gardens.",             continent: "Europe",      rating: 4.6, stories: 134, badge: null,          badgeColor: "",               trending: false },
  { name: "Buenos Aires", country: "Argentina", img: buenosaires, desc: "Tango, steak, European architecture, and passionate culture.",       continent: "Americas",    rating: 4.7, stories: 112, badge: null,          badgeColor: "",               trending: false },
  { name: "Zurich", country: "Switzerland",  img: zurich,      desc: "Alpine lakes, luxury watches, and pristine mountain scenery.",          continent: "Europe",      rating: 4.7, stories: 98,  badge: null,          badgeColor: "",               trending: false },
  { name: "Dubai Desert", country: "UAE",    img: dubaidesert, desc: "Golden dunes, camel rides, and thrilling desert safari experiences.",   continent: "Middle East", rating: 4.7, stories: 87,  badge: "Adventure",   badgeColor: "bg-emerald-500", trending: false },
  { name: "Marrakech", country: "Morocco",   img: marrakech,   desc: "Vibrant souks, riads, and the magic of the Djemaa el-Fna square.",      continent: "Africa",      rating: 4.7, stories: 134, badge: "Hidden Gem",  badgeColor: "bg-indigo-500",  trending: true  },
  { name: "Hong Kong", country: "China",     img: hongkong,    desc: "Dazzling skyline, dim sum culture, and Victoria Harbour at night.",     continent: "Asia",        rating: 4.7, stories: 178, badge: null,          badgeColor: "",               trending: false },
  { name: "Kathmandu", country: "Nepal",     img: kathmandu,   desc: "Gateway to Everest, ancient stupas, and Himalayan spirituality.",       continent: "Asia",        rating: 4.6, stories: 112, badge: "Adventure",   badgeColor: "bg-emerald-500", trending: false },
];

const continents = ["All", "Europe", "Asia", "Americas", "Africa", "Middle East", "Oceania"];

const continentMeta = {
  All:          { color: "from-blue-500 to-violet-600",   count: places.length },
  Europe:       { color: "from-blue-500 to-indigo-600",   count: places.filter(p => p.continent === "Europe").length },
  Asia:         { color: "from-rose-500 to-orange-500",   count: places.filter(p => p.continent === "Asia").length },
  Americas:     { color: "from-emerald-500 to-teal-600",  count: places.filter(p => p.continent === "Americas").length },
  Africa:       { color: "from-amber-500 to-orange-600",  count: places.filter(p => p.continent === "Africa").length },
  "Middle East":{ color: "from-yellow-500 to-amber-600",  count: places.filter(p => p.continent === "Middle East").length },
  Oceania:      { color: "from-cyan-500 to-blue-500",     count: places.filter(p => p.continent === "Oceania").length },
};

const sortOptions = [
  { value: "default",  label: "Featured" },
  { value: "rating",   label: "Top Rated" },
  { value: "stories",  label: "Most Stories" },
  { value: "trending", label: "Trending" },
];

/* ─── Destination Detail Modal ─── */
function DestinationModal({ place, onClose }) {
  if (!place) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Panel */}
      <div
        className="relative w-full sm:max-w-lg bg-[var(--bg-card)] rounded-t-3xl sm:rounded-2xl shadow-2xl overflow-hidden animate-fadeInUp"
        onClick={e => e.stopPropagation()}
      >
        {/* Hero image */}
        <div className="relative h-56 overflow-hidden">
          <img src={place.img} alt={place.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          {place.badge && (
            <span className={`absolute top-4 left-4 ${place.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full`}>
              {place.badge}
            </span>
          )}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm text-white flex items-center justify-center hover:bg-black/60 transition-colors"
          >
            <X size={16} />
          </button>
          <div className="absolute bottom-4 left-4">
            <h2 className="text-2xl font-bold text-white">{place.name}</h2>
            <p className="text-white/70 text-sm flex items-center gap-1 mt-0.5">
              <MapPin size={12} />{place.country} · {place.continent}
            </p>
          </div>
        </div>

        {/* Body */}
        <div className="p-6">
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5">{place.desc}</p>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            {[
              { icon: <Star size={15} className="text-amber-400" />, value: place.rating, label: "Rating" },
              { icon: <BookOpen size={15} className="text-blue-400" />, value: `${place.stories}+`, label: "Stories" },
              { icon: <Heart size={15} className="text-rose-400" />, value: "Loved", label: "By travelers" },
            ].map((s, i) => (
              <div key={i} className="text-center p-3 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--border-color)]">
                <div className="flex justify-center mb-1">{s.icon}</div>
                <p className="text-sm font-bold text-slate-800 dark:text-white">{s.value}</p>
                <p className="text-xs text-slate-400">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <Link
              to="/post"
              className="flex-1 flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-xl text-sm shadow-sm hover:shadow-md hover:from-blue-600 hover:to-blue-700 transition-all duration-200"
              onClick={onClose}
            >
              <BookOpen size={15} />
              Write about this
            </Link>
            <Link
              to="/feed"
              className="flex-1 flex items-center justify-center gap-2 py-3 bg-[var(--bg-tertiary)] border border-[var(--border-color)] text-slate-700 dark:text-slate-300 font-medium rounded-xl text-sm hover:bg-[var(--bg-secondary)] transition-all duration-200"
              onClick={onClose}
            >
              <Globe size={15} />
              Read stories
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Main Component ─── */
export default function Places() {
  const [search, setSearch]               = useState("");
  const [activeContinent, setActiveContinent] = useState("All");
  const [sortBy, setSortBy]               = useState("default");
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [savedPlaces, setSavedPlaces]     = useState(new Set());

  const toggleSave = (e, name) => {
    e.stopPropagation();
    setSavedPlaces(prev => {
      const next = new Set(prev);
      next.has(name) ? next.delete(name) : next.add(name);
      return next;
    });
  };

  const filtered = useMemo(() => {
    let list = places.filter(p => {
      const q = search.toLowerCase();
      const matchSearch = !q || p.name.toLowerCase().includes(q) || p.country.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q);
      const matchContinent = activeContinent === "All" || p.continent === activeContinent;
      return matchSearch && matchContinent;
    });
    if (sortBy === "rating")   list = [...list].sort((a, b) => b.rating - a.rating);
    if (sortBy === "stories")  list = [...list].sort((a, b) => b.stories - a.stories);
    if (sortBy === "trending") list = [...list].filter(p => p.trending).concat(list.filter(p => !p.trending));
    return list;
  }, [search, activeContinent, sortBy]);

  const trendingPlaces = places.filter(p => p.trending).slice(0, 5);

  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">

      {/* ══ HERO BANNER ══ */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-violet-950">
        {/* Background image */}
        <img
          src="https://images.unsplash.com/photo-1488085061387-422e29b40080?auto=format&fit=crop&w=1600&q=80"
          alt="World"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/40 to-slate-900/80" />

        <div className="relative max-w-7xl mx-auto px-5 py-16 md:py-20">
          <div className="max-w-2xl">
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center shadow-md">
                <Compass size={14} className="text-white" />
              </div>
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">Explore the World</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
              Discover your next<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
                dream destination
              </span>
            </h1>
            <p className="text-slate-300 text-base leading-relaxed mb-8 max-w-lg">
              Browse {places.length} handpicked destinations across 7 continents. Find inspiration, read real traveler stories, and plan your next adventure.
            </p>

            {/* Hero search bar */}
            <div className="relative max-w-lg">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search any city, country or region..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full pl-12 pr-12 py-4 rounded-2xl text-sm bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white/15 transition-all"
              />
              {search && (
                <button onClick={() => setSearch("")} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition-colors">
                  <X size={16} />
                </button>
              )}
            </div>

            {/* Quick stats */}
            <div className="flex flex-wrap gap-5 mt-8">
              {[
                { icon: <Globe size={14} />, text: `${places.length} Destinations` },
                { icon: <BookOpen size={14} />, text: "8,500+ Stories" },
                { icon: <TrendingUp size={14} />, text: `${trendingPlaces.length} Trending Now` },
              ].map((s, i) => (
                <div key={i} className="flex items-center gap-1.5 text-slate-300 text-xs">
                  <span className="text-blue-400">{s.icon}</span>
                  {s.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ══ TRENDING STRIP ══ */}
      <div className="bg-[var(--bg-secondary)] border-b border-[var(--border-color)]">
        <div className="max-w-7xl mx-auto px-5 py-4">
          <div className="flex items-center gap-4 overflow-x-auto scrollbar-hide pb-1">
            <div className="flex items-center gap-1.5 text-xs font-bold text-orange-500 flex-shrink-0">
              <Flame size={14} />
              Trending
            </div>
            {trendingPlaces.map((p, i) => (
              <button
                key={i}
                onClick={() => setSelectedPlace(p)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-sm transition-all duration-200 flex-shrink-0 group"
              >
                <img src={p.img} alt={p.name} className="w-5 h-5 rounded-full object-cover" />
                <span className="text-xs font-medium text-slate-700 dark:text-slate-300 group-hover:text-blue-500 transition-colors">{p.name}</span>
                <span className="text-xs text-slate-400">{p.country}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ══ CONTINENT TABS ══ */}
      <div className="bg-[var(--bg-secondary)] border-b border-[var(--border-color)] sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-5">
          <div className="flex items-center gap-1 overflow-x-auto scrollbar-hide py-3">
            {continents.map(c => {
              const meta = continentMeta[c];
              const isActive = activeContinent === c;
              return (
                <button
                  key={c}
                  onClick={() => setActiveContinent(c)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 flex-shrink-0 ${
                    isActive
                      ? `bg-gradient-to-r ${meta.color} text-white shadow-sm`
                      : "text-slate-500 dark:text-slate-400 hover:bg-[var(--bg-tertiary)] hover:text-slate-700 dark:hover:text-slate-200"
                  }`}
                >
                  {c}
                  <span className={`px-1.5 py-0.5 rounded-full text-xs font-bold ${isActive ? "bg-white/20 text-white" : "bg-[var(--bg-tertiary)] text-slate-400"}`}>
                    {meta.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ══ MAIN CONTENT ══ */}
      <div className="max-w-7xl mx-auto px-5 py-8">

        {/* Toolbar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">
              {activeContinent === "All" ? "All Destinations" : activeContinent}
              {search && <span className="text-slate-400 font-normal text-base"> · "{search}"</span>}
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">
              {filtered.length} {filtered.length === 1 ? "destination" : "destinations"} found
            </p>
          </div>

          {/* Sort */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-400 font-medium hidden sm:block">Sort by</span>
            <div className="flex gap-1.5">
              {sortOptions.map(opt => (
                <button
                  key={opt.value}
                  onClick={() => setSortBy(opt.value)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 ${
                    sortBy === opt.value
                      ? "bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-sm"
                      : "bg-[var(--bg-card)] border border-[var(--border-color)] text-slate-500 dark:text-slate-400 hover:border-slate-300 dark:hover:border-slate-500"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="text-center py-24">
            <div className="w-20 h-20 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-color)] flex items-center justify-center mx-auto mb-5">
              <MapPin size={32} className="text-slate-300 dark:text-slate-600" />
            </div>
            <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">No destinations found</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-5">Try a different search term or continent filter.</p>
            <button
              onClick={() => { setSearch(""); setActiveContinent("All"); }}
              className="btn-secondary text-sm px-5 py-2.5"
            >
              Clear filters
            </button>
          </div>
        )}

        {/* ── DESTINATION GRID ── */}
        {filtered.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((place, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedPlace(place)}
                className="group relative rounded-2xl overflow-hidden bg-[var(--bg-card)] border border-[var(--border-color)] shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={place.img}
                    alt={place.name}
                    className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-110"
                    loading="lazy"
                  />
                  {/* Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

                  {/* Badge */}
                  {place.badge && (
                    <span className={`absolute top-3 left-3 ${place.badgeColor} text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-sm`}>
                      {place.badge}
                    </span>
                  )}

                  {/* Trending indicator */}
                  {place.trending && !place.badge && (
                    <span className="absolute top-3 left-3 bg-orange-500 text-white text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
                      <Flame size={10} />Trending
                    </span>
                  )}

                  {/* Save button */}
                  <button
                    onClick={e => toggleSave(e, place.name)}
                    className={`absolute top-3 right-3 w-8 h-8 rounded-full backdrop-blur-sm border flex items-center justify-center transition-all duration-200 ${
                      savedPlaces.has(place.name)
                        ? "bg-rose-500 border-rose-400 text-white"
                        : "bg-black/30 border-white/20 text-white opacity-0 group-hover:opacity-100 hover:bg-rose-500 hover:border-rose-400"
                    }`}
                  >
                    <Heart size={13} fill={savedPlaces.has(place.name) ? "currentColor" : "none"} />
                  </button>

                  {/* Rating pill */}
                  <div className="absolute bottom-3 right-3 flex items-center gap-1 bg-black/50 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">
                    <Star size={10} fill="currentColor" className="text-amber-400" />
                    <span className="font-semibold">{place.rating}</span>
                  </div>

                  {/* Name + country */}
                  <div className="absolute bottom-3 left-3">
                    <h3 className="text-white font-bold text-base leading-tight">{place.name}</h3>
                    <p className="text-white/65 text-xs flex items-center gap-1 mt-0.5">
                      <MapPin size={9} />{place.country}
                    </p>
                  </div>
                </div>

                {/* Card body */}
                <div className="p-4">
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-2 mb-4">
                    {place.desc}
                  </p>

                  {/* Meta row */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1 text-xs text-slate-400">
                        <BookOpen size={11} className="text-blue-400" />
                        <span>{place.stories} stories</span>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-slate-400">
                        <Globe size={11} className="text-emerald-400" />
                        <span>{place.continent}</span>
                      </div>
                    </div>
                    <div className="w-7 h-7 rounded-full bg-[var(--bg-tertiary)] border border-[var(--border-color)] flex items-center justify-center text-slate-400 group-hover:bg-blue-500 group-hover:border-blue-500 group-hover:text-white transition-all duration-200">
                      <ChevronRight size={13} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ── BOTTOM CTA ── */}
        {filtered.length > 0 && (
          <div className="mt-16 relative overflow-hidden rounded-3xl">
            <img
              src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1400&q=80"
              alt="Travel"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/80 to-violet-900/75" />
            <div className="relative px-8 py-12 md:py-16 flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles size={16} className="text-amber-300" />
                  <span className="text-amber-300 text-xs font-bold uppercase tracking-widest">Share Your Story</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">
                  Been to one of these places?
                </h3>
                <p className="text-blue-100/80 text-sm max-w-md leading-relaxed">
                  Write about your experience and inspire thousands of travelers planning their next adventure.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
                <Link
                  to="/post"
                  className="flex items-center gap-2 px-7 py-3.5 bg-white text-blue-700 font-bold rounded-xl shadow-lg hover:bg-blue-50 transition-all duration-200 text-sm"
                >
                  <BookOpen size={16} />
                  Write a Story
                </Link>
                <Link
                  to="/feed"
                  className="flex items-center gap-2 px-6 py-3.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium rounded-xl transition-all duration-200 text-sm"
                >
                  <Globe size={16} />
                  Read Stories
                </Link>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* ══ MODAL ══ */}
      {selectedPlace && (
        <DestinationModal place={selectedPlace} onClose={() => setSelectedPlace(null)} />
      )}
    </div>
  );
}
