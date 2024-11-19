const Cards = ({ data, isMonthly }) => {
  return (
    <>
      {data.map((plan, index) => (
        <div
          key={index} // Move `key` here to the top-level element
          className={`w-256W p-32P shadow-lg rounded-lg ${
            plan.font === "white"
              ? "bg-white text-dark-grayish-blue"
              : "scale-y-110 bg-custom-gradient text-white"
          }`}
        >
          <div className="card text-center">
            <h3 className="text-sm font-bold mb-16M">{plan.title}</h3>
            <p className="text-2xl font-bold mb-16M">
              {isMonthly ? plan.monthly : plan.yearly}
            </p>
            <hr />
            <p className="font-semibold text-xs py-8P">{plan.storage}</p>
            <hr />
            <p className="font-semibold text-xs py-8P">{plan.allowedUsers}</p>
            <hr />
            <p className="font-semibold text-xs py-8P">{plan.sendUp}</p>
            <hr />
            <button
              className={`relative top-10I p-8P hover:p-6P ${
                plan.font === "white"
                  ? "text-white bg-custom-gradient  hover:text-purple hover:border-purple hover:bg-none"
                  : "text-purple bg-white hover:bg-custom-gradient hover:text-white hover-border-white"
              } font-semibold rounded-5BR uppercase text-xs tracking-widest hover:border-2 hover:border-solid`}
            >
              <span className="hover:relative hover:bottom-64I">
                Learn More
              </span>
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default Cards;