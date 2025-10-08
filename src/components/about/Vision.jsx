import vision from "../../assets/vision.jpg";

const Vision = () => {
  return (
    <div className="flex flex-col md:flex-row-reverse my-4 md:my-8 lg:my-14 justify-center gap-4 items-center mx-5 md:mx-14 lg:mx-28">
      <img src={vision} alt="Our Vision" className="md:w-1/2 rounded-lg" />
      <div className="md:w-1/2 md:space-y-2 space-y-1">
        <p className="text-[12px] bg-gray-200 inline-block rounded-md px-1 text-red-950">
          Our Vision
        </p>
        <h2 className="text-2xl md:text-3xl lg:text-3xl font-semibold text-black">
          Reimagining Financial Relationship
        </h2>
        <p className="text-sm text-gray-700">
          We envision a future where financial relationship are built on trust, transparency, and mutual benefit. By leveraging the power of technology and data, we aim to bridge the gap between lenders and borrowers, fostering a more equitable financial landscape that empowers individual and communities to thrive.
        </p>
      </div>
    </div>
  );
};

export default Vision;
