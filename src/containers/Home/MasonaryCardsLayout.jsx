"use client";
import Image from "next/image";
import cardImg from "../../assets/Images/scroll2.png";

const MasonaryCardsLayout = () => {
  const cards = [
  {
    title: "Beauty",
    btn: "Shop now",
    img: cardImg,
  },
  {
    title: "Unique Gifts",
    btn: "Shop now",
    img: cardImg,
  },
  {
    title: "Earbuds",
    btn: "Shop now",
    img: cardImg,
  },
  {
    title: "Fashion",
    btn: "Shop now",
    img: cardImg,
  },
  ];
  return (
    <section className="w-full flex gap-4 px-6 py-16">
      {/* First column (30%) with 2 stacked cards */}
      <div className="w-[30%] flex flex-col gap-4">
        {cards.slice(0, 2).map((card, idx) => (
          <div
            key={idx}
            className="relative h-[300px] rounded-lg overflow-hidden"
          >
            <Image
              src={card.img}
              alt={card.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30 text-white">
              <h2 className="text-xl font-bold">{card.title}</h2>
              <button className="mt-3 bg-white text-black px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition">
                {card.btn}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Second column (30%) with 1 card */}
      <div className="w-[25%]">
        <div className="relative h-[620px] rounded-lg overflow-hidden">
          <Image
            src={cards[2].img}
            alt={cards[2].title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30 text-white">
            <h2 className="text-xl font-bold">{cards[2].title}</h2>
            <button className="mt-3 bg-white text-black px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition">
              {cards[2].btn}
            </button>
          </div>
        </div>
      </div>

      {/* Third column (40%) with 1 card */}
      <div className="w-[45%]">
        <div className="relative h-[620px] rounded-lg overflow-hidden">
          <Image
            src={cards[3].img}
            alt={cards[3].title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30 text-white">
            <h2 className="text-xl font-bold">{cards[3].title}</h2>
            <button className="mt-3 bg-white text-black px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition">
              {cards[3].btn}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MasonaryCardsLayout;
