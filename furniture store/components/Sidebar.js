const Sidebar = () => {
  return (
    <div className="right-0 p-10 z-50 h-full top-0 fixed min-h-screen w-screen overflow-auto ease-in-out flex pl-20 text-white transform transform-gpu transition-all duration-200 delay-75 backdrop-filter backdrop-blur-xl bg-opacity-70 bg-[#1C3572] ">
      <div className="flex flex-col mt-20 space-y-3 text-2xl font-semibold">
        <h2>Home</h2>
        <h2>For Businesses</h2>
        <h2>Our Blog</h2>
        <h2>About us</h2>
        <h2>FAQs</h2>
      </div>
    </div>
  );
};

export default Sidebar;
