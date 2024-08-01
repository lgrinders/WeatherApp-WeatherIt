import {
  FaFacebook,
  FaTwitterSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <div className="xl:absolute relative bottom-0 z-0 flex w-full flex-col items-center justify-evenly gap-10 bg-white/50 p-10 text-sm xl:flex-row">
        <div className="flex w-1/4 items-center justify-center gap-5">
          <p className="font-bold">Connect With Us</p>
          <div className="flex gap-3 text-3xl">
            <FaFacebook className="duration-300 hover:text-primary" />
            <FaTwitterSquare className="duration-300 hover:text-primary" />
            <FaInstagramSquare className="duration-300 hover:text-primary" />
            <FaYoutubeSquare className="duration-300 hover:text-primary" />
          </div>
        </div>
        <div className="flex flex-col gap-3 items-center text-xs sm:text-md">
          <div className="flex gap-3 text-center">
            <p>Feedback</p>
            <p>Mission</p>
            <p>Careers</p>
            <p>News Room</p>
            <p>Advertise With Us</p>
            <p>TV</p>
            <p>Newsletter Sign Up</p>
          </div>
          <div className="flex gap-3 font-bold">
            <p>Terms of Use</p>
            <p>|</p>
            <p>Private Policy</p>
            <p>|</p>
            <p>AdChoices</p>
            <p>|</p>
            <p>Accessibility Statement</p>
            <p>|</p>
            <p>Data Vendors</p>
          </div>
        </div>
        <div className="flex w-1/4 justify-center">
          <div className="font-bold">© WeatherIt, LLC 2024</div>
        </div>
      </div>
    </>
  );
}
