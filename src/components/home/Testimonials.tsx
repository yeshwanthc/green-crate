import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import PersonOne from "../../images/Person_1.jpg";
import PersonTwo from "../../images/Person_2.jpg";
import PersonThree from "../../images/Person_3.jpg";
import PersonFour from "../../images/Person_4.jpg";
import StarFill from "../../images/Star_fill.png";

const testimonials = [
  {
    id: 1,
    name: "Marry Jane",
    image: PersonOne,
    quote:
      "“I've never felt better switching to organic. The taste, quality, and service are unmatched. Highly recommend!”",
    bgColor: "bg-[#FFF2D8]",
  },
  {
    id: 2,
    name: "Jennifer Evans",
    image: PersonTwo,
    quote:
      "“Everything I ordered was super fresh and responsibly packed. Finally found a store I can trust.”",
    bgColor: "bg-[#DFF0C2]",
  },
  {
    id: 3,
    name: "William Thomas",
    image: PersonFour,
    quote:
      "“Customer service is top-notch and the products are always top quality. I’ve made this part of my weekly routine.”",
    bgColor: "bg-[#FFF2D8]",
  },
  {
    id: 4,
    name: "Sophia Lee",
    image: PersonThree,
    quote:
      "“Absolutely love the farm-to-table freshness. I feel great knowing I’m eating clean and supporting sustainable farming.”",
    bgColor: "bg-[#DFF0C2]",
  },
  {
    id: 5,
    name: "Daniel Carter",
    image: PersonTwo,
    quote:
      "“You can really tell the difference in quality. The veggies lasted longer and tasted amazing.”",
    bgColor: "bg-[#E7F6EC]",
  },
  {
    id: 6,
    name: "Emily Watson",
    image: PersonThree,
    quote:
      "“My kids love the snacks! So grateful for clean, organic options that actually taste good.”",
    bgColor: "bg-[#FFF5EC]",
  },
  {
    id: 7,
    name: "James Parker",
    image: PersonFour,
    quote:
      "“Smooth ordering experience, fast delivery, and incredibly fresh produce. Definitely sticking around.”",
    bgColor: "bg-[#F0F8E2]",
  },
  {
    id: 8,
    name: "Ava Thompson",
    image: PersonOne,
    quote:
      "“This store makes clean eating so easy. Everything feels thoughtfully curated and I’m never disappointed.”",
    bgColor: "bg-[#FFFBEA]",
  },
];

export const TestimonialsSection = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const slider = sliderRef.current;
      if (!slider) return;

      const totalSlides = slider.children.length;
      const slideWidth = slider.children[0].clientWidth + 32;
      const totalWidth = slideWidth * totalSlides;

      gsap.set(slider, { x: 0 });

      const tl = gsap.timeline({ repeat: -1 });

      tl.to(slider, {
        x: `-=${slideWidth}`,
        duration: 2,
        ease: "power1.inOut",
        repeatRefresh: true,
        onComplete: () => {
          const first = slider.children[0];
          if (first) {
            slider.appendChild(first.cloneNode(true));
            slider.removeChild(first);
            gsap.set(slider, { x: 0 });
          }
        },
        delay: 2,
      });
    }, sliderRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="w-full py-16 bg-[#FCFAF6] flex flex-col items-center overflow-hidden">
      <div className="text-center container">
        <div className="mb-16">
          <p className="text-[#333] text-lg mb-2">testimonials</p>
          <h2 className="text-primary-700 text-3xl font-bold mb-4">
            What Others Say
          </h2>
          <p className="text-[#333] max-w-xl mx-auto text-lg">
            Discover why our customers keep coming back for the freshest,
            healthiest, and most delicious organic products around.
          </p>
        </div>
      </div>

      <div className="w-full overflow-hidden  container">
        <div
          ref={sliderRef}
          className="flex gap-8 px-4"
          style={{ willChange: "transform" }}
        >
          {testimonials.map((t) => (
            <div
              key={t.id}
              className={`w-[300px] min-w-[300px] p-6 rounded-lg shadow-md ${t.bgColor} flex flex-col items-center text-center`}
            >
              <img
                src={t.image}
                alt={t.name}
                loading="lazy"
                className="w-[100px] h-[100px] rounded-full mb-4 object-cover"
              />
              <h3 className="text-lg font-semibold mb-2">{t.name}</h3>
              <p className="text-sm text-[#333] mb-4">{t.quote}</p>
              <div className="flex justify-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <img
                    key={star}
                    src={StarFill}
                    alt="star"
                    className="w-3 h-3"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
