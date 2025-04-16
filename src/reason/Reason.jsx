import React from "react";
import resone from "../assets/images/reason.jpg";
const Reason = () => {
  return (
    <div
      id="reason"
      className="max-w-screen-lg mx-auto my-4 md:my-10 px-4 md:px-0"
    >
      <div className="relative border-2 border-blue-400 ">
        <div className="h-6 md:h-8 w-full bg-blue-400 relative z-10">
          <div
            className="absolute z-20 -top-4 md:-top-8 left-2 md:left-4 text-white 
        text-2xl md:text-[3rem] p-2 font-bold flex items-center justify-center 
        drop-shadow-md shadow-gray-500 transition-all duration-300 md:w-[70px] md:h-[80px]"
            style={{
              backgroundColor: "#3B82F6",
              clipPath: "polygon(0 0, 100% 1%, 100% 100%, 48% 90%, 0 100%)",
            }}
          >
            <span className="text-center">01</span>
          </div>
          <div
            className="absolute left-11.5 md:left-18 -top-4 md:-top-7.5 w-[10px] h-[14.5px] md:w-[20px] md:h-[30px] -z-10"
            style={{
              backgroundColor: "#444",
              clipPath: "polygon(0 0, 70% 0, 100% 100%, 0% 100%)",
            }}
          ></div>

          <h2
            className="text-center font-medium text-white text-lg md:text-xl tracking-wider
           uppercase"
          >
            Reason
          </h2>
        </div>

        <div className="p-4 md:p-8 flex flex-col items-center justify-center">
          <h3 className="text-lg md:text-2xl font-bold mb-4 text-center tracking-widest">
            歴史と実績
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-0">
            <img src={resone} alt="reason imge" />
            <div>
              <p className="text-sm md:text-base">
                昭和10年に長浜市で創業して以来、水まわりなどの小さいリフォームから住宅・店舗の設計施工、公共建築物等の大規模な建築まで、滋賀県に住む皆様のために多くのサポートをして参りました。
              </p>
              <p className="text-sm md:text-base" s>
                長年地元のお客様と共に歩んできた歴史と実績は、何物にも代えがたいノブワークスの財産です。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reason;
