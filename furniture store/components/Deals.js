import { FireIcon } from "./icons";
import Deal from "./Deal";

const Deals = () => {
  return (
    <div className="flex flex-col justify-between w-full p-20 md:flex-row">
      <div className="flex flex-col">
        <div className="flex items-center">
          <h3 className="md:text-5xl text-xl  font-bold text-sapGreen-600">
            Hot
          </h3>
          <FireIcon className="md:w-16 w-12 md:h-16 h-12" />
        </div>
        <h3 className="-mt-3 md:text-5xl text-xl  font-bold text-sapGreen-600">
          deals for you
        </h3>
        <p className="mt-2 text-gray-500 font-OpenSans">
          Online shopping for retail sales direct to consumers.
        </p>
      </div>
      <Deal
        title="1.5% cashback"
        description="Online shopping for retail sales direct to consumers."
        icon="/Dealimage.png"
      />
      <Deal
        title="30-day terms"
        description="Online shopping for retail sales direct to consumers."
        icon="/Dealimage.png"
      />
      <Deal
        title="Save Money"
        description="Online shopping for retail sales direct to consumers."
        icon="/Dealimage.png"
      />
    </div>
  );
};

export default Deals;
