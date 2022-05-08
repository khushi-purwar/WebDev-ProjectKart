import Image from "next/image";

const Companies = () => {
  const companies = [
    "Microsoft",
    "Entrepreneur",
    "Fortune",
    "Business-web",
    "Mashable",
  ];

  return (
    <div className="flex flex-col items-center justify-between w-full py-10 mt-20 bg-gray-200">
      <h2 className="text-[#031725] text-lg text-center md:text-xl font-medium">
        TRUSTED BY OVER 1K+ COMPANIES
      </h2>
      <div className="flex items-center flex-wrap justify-between w-9/12 mt-10">
        {companies.map((company) => (
          <div className="relative md:w-28 m-3 md:h-6 w-24 h-5" key={company}>
            <Image
              src={`/logos/${company}.svg`}
              layout="fill"
              objectFit="contain"
              alt={company}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Companies;
