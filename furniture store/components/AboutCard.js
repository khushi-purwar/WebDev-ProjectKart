const AboutCard = ({ number, title, desc }) => {
  return (
    <div className="flex flex-col items-start space-y-6">
      <h2 className="text-5xl font-bold font-OpenSans text-sapGreen-600">
        {number}.
      </h2>
      <h3 className="text-3xl font-bold font-OpenSans text-sapGreen-600">
        {title}
      </h3>
      <p className="text-gray-600 font-OpenSans max-w-[300px]">{desc}</p>
    </div>
  );
};

export default AboutCard;
