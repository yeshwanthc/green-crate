import { ArrowRightIcon, ShoppingBag } from "lucide-react";
import { Button } from "../ui/button";
import BannerImage from "../../images/Image.png";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

export const HeroComponent = (): JSX.Element => {
  gsap.registerPlugin(ScrollToPlugin);
  return (
    <div className="flex justify-center w-full">
      <div className="container w-full py-16">
        <div className="p-6 relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <main className="flex flex-col gap-4 md:gap-8 max-w-xl text-center md:text-left">
              <h2 className="text-3xl md:text-6xl font-display font-black leading-tight">
                <span className="text-primary-700 block">
                  Organic fruit products
                </span>
                <span className="text-text mt-1 block">
                  brought right to your door.
                </span>
              </h2>
              <p className="text-lg md:text-xl text-[#333]">
                We believe that fresh, natural, organic fruit products should be
                accessible to all.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Button
                  onClick={() => {
                    gsap.to(window, {
                      duration: 1,
                      scrollTo: { y: "#products" },
                      ease: "power2.inOut",
                    });
                  }}
                  className="bg-primary-700 hover:bg-primary-800 text-white rounded-full px-6 py-6 shadow-md"
                >
                  <div className="w-6 h-6 bg-accent2-300 rounded-full flex items-center justify-center">
                    <ShoppingBag className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span className="font-semibold">Start Shopping</span>
                </Button>

                <Button onClick={() => {
                    gsap.to(window, {
                      duration: 1,
                      scrollTo: { y: "#contact" },
                      ease: "power2.inOut",
                    });
                  }}
                  variant="ghost"
                  className="text-primary-700 hover:text-primary-600 font-semibold flex items-center gap-2"
                >
                  Learn More <ArrowRightIcon className="w-5 h-5" />
                </Button>
              </div>
            </main>

            <div className="w-full md:w-1/2 flex justify-center">
              <img
                className="w-full max-w-lg h-auto object-cover"
                alt="Healthy mixed fruits in bowl"
                src={BannerImage}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
