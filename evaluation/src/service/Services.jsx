import React from "react";
import service1 from "../assets/images/circleImg01.png";
import service2 from "../assets/images/circleImg02.png";
import service3 from "../assets/images/circleImg03.png";
const Services = () => {
  return (
    <div id="service" className="max-w-screen-lg mx-auto my-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex flex-col items-center justify-center space-y-4">
          <h2 className="text-2xl text-gray-900 tracking-wider font-inter uppercase">
            Service
          </h2>
          <img src={service1} alt="" className="h-72" />
          <p className="text-sm text-gray-900 font-normal px-4">
            ちかごろ世間で日本歴史の科学的研究ということがしきりに叫ばれている。科学的研究というのが近代私学の学問的方法による研究という意義であるならば、これは史学の学徒の間に老いては一般に行われていることであるから、今更こと新しくいう。
          </p>
        </div>
        <div className="flex flex-col items-center justify-center space-y-4">
          <h2 className="text-2xl text-gray-900 tracking-wider font-inter uppercase">
            Message
          </h2>
          <img src={service2} alt="" className="h-72" />
          <p className="text-sm text-gray-900 font-normal px-4">
            ちかごろ世間で日本歴史の科学的研究ということがしきりに叫ばれている。科学的研究というのが近代私学の学問的方法による研究という意義であるならば。
          </p>
        </div>
        <div className="flex flex-col items-center justify-center space-y-4">
          <h2 className="text-2xl text-gray-900 tracking-wider font-inter uppercase">
            Story
          </h2>
          <img src={service3} alt="" className="h-72" />
          <p className="text-sm text-gray-900 font-normal px-4">
            科学的研究というのが近代私学の学問的方法による研究という意義であるならば、これは史学の学徒の間に老いては一般に行われていることであるから、今更こと新しくいう。
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
