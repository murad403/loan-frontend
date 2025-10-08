
const Stat = () => {
  return (
    <div className="flex justify-center items-center w-full">
      <div className="stats stats-vertical bg-white lg:stats-horizontal shadow md:w-full w-1/2 md:mx-24">
        <div className="stat flex items-center justify-center flex-col">
          <div className="stat-value md:text-4xl text-3xl text-blue-800">31K</div>
          <div className="stat-desc text-gray-700">Active Users</div>
        </div>

        <div className="stat flex items-center justify-center flex-col">
          <div className="stat-value md:text-4xl text-3xl text-blue-800">4,200</div>
          <div className="stat-desc text-gray-700">Loans Facilitated</div>
        </div>

        <div className="stat flex items-center justify-center flex-col">
          <div className="stat-value md:text-4xl text-3xl text-blue-800">1,200</div>
          <div className="stat-desc text-gray-700">Client Satisfaction</div>
        </div>
        <div className="stat flex items-center justify-center flex-col">
          <div className="stat-value md:text-4xl text-3xl text-blue-800">1,200</div>
          <div className="stat-desc text-gray-700">Industry Verticals</div>
        </div>
      </div>
    </div>
  );
};

export default Stat;
