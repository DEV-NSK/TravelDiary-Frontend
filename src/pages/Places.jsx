// Places.jsx
import React from "react";

// ✅ Import all local images
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

// ✅ Map them into an array
const places = [
  { name: "Paris, France", img: paris, desc: "The city of lights and romance with the Eiffel Tower." },
  { name: "Bali, Indonesia", img: bali, desc: "Tropical beaches, lush forests, and rich culture." },
  { name: "Tokyo, Japan", img: tokyo, desc: "A mix of tradition, technology, and vibrant city life." },
  { name: "New York, USA", img: newyork, desc: "The Big Apple – iconic skyline and endless experiences." },
  { name: "Santorini, Greece", img: santorini, desc: "Famous for whitewashed houses and stunning sunsets." },
  { name: "London, UK", img: london, desc: "Historic landmarks, culture, and vibrant city life." },
  { name: "Dubai, UAE", img: dubai, desc: "Luxury shopping, modern architecture, and desert adventures." },
  { name: "Rome, Italy", img: rome, desc: "The Eternal City with rich history and ancient ruins." },
  { name: "Venice, Italy", img: venice, desc: "Romantic canals and gondola rides." },
  { name: "Sydney, Australia", img: sydney, desc: "Iconic Opera House and beautiful beaches." },
  { name: "Barcelona, Spain", img: barcelona, desc: "Gaudí’s architecture and Mediterranean vibes." },
  { name: "Machu Picchu, Peru", img: machupicchu, desc: "Mysterious Incan citadel in the Andes Mountains." },
  { name: "Istanbul, Turkey", img: istanbul, desc: "Where East meets West with rich culture and history." },
  { name: "Cairo, Egypt", img: cairo, desc: "Home to the Great Pyramids and Sphinx." },
  { name: "Maldives", img: maldives, desc: "Crystal-clear waters and luxurious overwater villas." },
  { name: "Hawaii, USA", img: hawaii, desc: "Volcanoes, surf beaches, and tropical paradise." },
  { name: "Amsterdam, Netherlands", img: amsterdam, desc: "Charming canals and artistic heritage." },
  { name: "Prague, Czech Republic", img: prague, desc: "Fairy-tale city with a medieval Old Town." },
  { name: "Rio de Janeiro, Brazil", img: rio, desc: "Christ the Redeemer and Copacabana beach vibes." },
  { name: "Cape Town, South Africa", img: capetown, desc: "Spectacular mountains, beaches, and culture." },
  { name: "Singapore", img: singapore, desc: "Modern city with futuristic architecture." },
  { name: "Bangkok, Thailand", img: bangkok, desc: "Vibrant street life and ornate temples." },
  { name: "Los Angeles, USA", img: losangeles, desc: "Hollywood glamour and sunny beaches." },
  { name: "Moscow, Russia", img: moscow, desc: "Red Square and iconic St. Basil’s Cathedral." },
  { name: "Seoul, South Korea", img: seoul, desc: "Trendy city blending tradition and modernity." },
  { name: "Kyoto, Japan", img: kyoto, desc: "Peaceful temples, gardens, and traditional culture." },
  { name: "Lisbon, Portugal", img: lisbon, desc: "Colorful streets and rich history." },
  { name: "Reykjavik, Iceland", img: iceland, desc: "Gateway to geysers, glaciers, and the northern lights." },
  { name: "Budapest, Hungary", img: budapest, desc: "Thermal baths and beautiful architecture." },
  { name: "Phuket, Thailand", img: phuket, desc: "Beach paradise with vibrant nightlife." },
  { name: "Athens, Greece", img: athens, desc: "Ancient ruins and birthplace of democracy." },
  { name: "Edinburgh, Scotland", img: edinburgh, desc: "Medieval old town and historic castles." },
  { name: "Munich, Germany", img: munich, desc: "Known for Oktoberfest and Bavarian culture." },
  { name: "Buenos Aires, Argentina", img: buenosaires, desc: "Tango, culture, and vibrant city life." },
  { name: "Zurich, Switzerland", img: zurich, desc: "Scenic city with stunning lakes and mountains." },
  { name: "Dubai Desert, UAE", img: dubaidesert, desc: "Thrilling desert safaris and golden dunes." },
  { name: "Marrakech, Morocco", img: marrakech, desc: "Exotic souks, palaces, and desert charm." },
  { name: "Hong Kong", img: hongkong, desc: "Dazzling skyline and vibrant city life." },
  { name: "Kathmandu, Nepal", img: kathmandu, desc: "Gateway to the Himalayas and spiritual heritage." },
];

export default function Places() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-10 px-5">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
        🌍 Top Travel Destinations
      </h1>

      <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {places.map((place, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden"
          >
            <img
              src={place.img}
              alt={place.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h2 className="text-xl font-semibold text-gray-800">
                {place.name}
              </h2>
              <p className="text-gray-600 text-sm mt-2">{place.desc}</p>
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                Explore
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
