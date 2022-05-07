const Product = ({ price, discountedPrice, image, name }) => {
  return (
    <div className="relative flex flex-col items-center justify-center mx-5 mt-10">
      <div className="bg-[#F4F6F6] w-80 h-80 p-10 flex flex-col items-start">
        <h2 className="text-2xl font-OpenSans text-[#3D3D3F]">{name}</h2>
        <div className="flex items-center mt-5">
          <p className="text-xl font-Montserrat">${discountedPrice}.00</p>
          <p className="text-[#A9A7A6] line-through ml-5 text-sm font-Montserrat">
            ${price}.00
          </p>
        </div>
      </div>
      <img src={image} alt={name} className="-mt-40" />
    </div>
  );
};

export default Product;
