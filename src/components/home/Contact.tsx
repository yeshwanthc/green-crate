import { ClockIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import ContactImage from '../../images/Contact.png';

export const Contact = (): JSX.Element => {
  return (
    <section id="contact" className="relative container py-16 flex flex-col md:flex-row">
      <div className="relative md:w-1/2 w-full h-96 flex items-center justify-center ">
        <img
          className="w-full h-full object-cover rounded-lg"
          alt="Organic farm field"
          src={ContactImage}
          loading="lazy"
        />
      </div>

      <div className="relative md:w-1/2 w-full flex items-center justify-center p-6">
        <Card className="w-full max-w-lg border-none shadow-none">
          <CardContent className="flex flex-col items-start gap-6 p-0">
            <h3 className="text-gray-700 text-base font-medium">
              Contact us
            </h3>

            <h2 className="text-primary-700 text-3xl md:text-4xl font-bold leading-snug max-w-md">
              Producing Healthy Eats For Everyone
            </h2>

            <div className="space-y-1">
              <div className="flex items-center gap-3 text-gray-700">
                <ClockIcon className="w-5 h-5 text-primary-700" />
                <span>Monday - Friday: 9:00 AM – 11:00 PM</span>
              </div>
              <div className="flex items-center gap-3 pl-8 text-gray-700">
                <span>Saturday: 10:00 AM – 9:00 PM</span>
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-3 text-gray-700">
                <PhoneIcon className="w-5 h-5 text-primary-700" />
                <span>+012-345-6789</span>
              </div>
              <div className="flex items-center gap-3 pl-8 text-gray-700">
                <span>contact@greencrate.com</span>
              </div>
            </div>

            <div className="flex items-center gap-3 text-gray-700">
              <MapPinIcon className="w-5 h-5 text-primary-700" />
              <span>Green Crate, Pellentesque, CA, USA</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
