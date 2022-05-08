import Product from "./Product";

const Products = () => {
  return (
    <div
      id="products"
      className="flex flex-col w-full px-10 scroll-m-20 md:px-20"
    >
      <div className="flex items-center justify-between w-full">
        <h2 className="text-5xl text-[#244D4D] font-semibold">Products</h2>
        <div className="flex">
          <p>See All</p>
        </div>
      </div>
      <div className="flex flex-row items-center w-full overflow-scroll md:flex-wrap hidescrollbar md:justify-evenly">
        <Product
          name="Hand Base Lamp"
          discountedPrice={35}
          price={55}
          image="https://res.cloudinary.com/didkcszrq/image/upload/v1638677397/Image_vvp5wm.png"
        />
        <Product
          name="Vintage Chair"
          discountedPrice={65}
          price={95}
          image="https://res.cloudinary.com/didkcszrq/image/upload/v1638685721/Image_1_svalt2.png"
        />

        <Product
          name="Lamp Tool"
          discountedPrice={35}
          price={45}
          image="https://res.cloudinary.com/didkcszrq/image/upload/v1638685721/Image_2_ggv8ns.png"
        />

        <Product
          name="Stylish Chair"
          discountedPrice={45}
          price={55}
          image="https://res.cloudinary.com/didkcszrq/image/upload/v1638685721/Image_3_nxsene.png"
        />

        <Product
          name="Vintage Chair"
          discountedPrice={65}
          price={95}
          image="https://res.cloudinary.com/didkcszrq/image/upload/v1638685721/Image_4_fbsrjt.png"
        />

        <Product
          name="Stackable Chair"
          discountedPrice={87}
          price={97}
          image="https://res.cloudinary.com/didkcszrq/image/upload/v1638685721/Image_5_nfepbm.png"
        />
      </div>
    </div>
  );
};

export default Products;
