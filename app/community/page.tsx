"use client";

const CommunityDemo = () => {
  return (
    <div className="wrapper group">
      <div className="relative flex flex-col items-center justify-center h-[75vh] md:h-[45vh] mx-16 rounded-3xl bg-gradient-to-b my-36 from-blue-700 to-pink-500 p-8 overflow-hidden">
        <div className="flex flex-col items-center text-center gap-4">
          <div className="flex flex-col gap-2 md:w-[70%]">
            <h3 className="text-3xl font-medium text-white md:text-4xl tracking-tighter">
            New Community Feature Coming up Very Soon...! 🎉
              {/* <span className="font-bold tracking-tighter">Community</span> */}
            </h3>
            <p className="text-lg md:text-xl text-white/80">
              Private Community For Students.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityDemo;
