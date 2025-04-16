import React from "react";
import Message1 from "../assets/images/sec02_01.jpg";
import Message2 from "../assets/images/sec02_02.jpg";
const Message = () => {
  console.log(Message1);

  return (
    <div id="message" className="bg-gray-100 flex flex-col space-y-6">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 items-center space-y-10">
        <img src={Message1} alt="message one img" />
        <div className="flex flex-col gap-6 items-center justify-center px-4">
          <h2 className="text-2xl text-gray-900 tracking-wider font-inter uppercase">
            Message
          </h2>
          <p className="text-md text-gray-900 font-normal">
            ちかごろ世間で日本歴史の科学的研究ということがしきりに叫ばれている。科学的研究というのが近代私学の学問的方法による研究という意義であるならば、これは史学の学徒の間に老いては一般に行われていることであるから、今更こと新しくいう。
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 items-center flex-col-reverse">
        <div className="flex gap-6 items-center justify-center flex-col px-4 order-2 md:order-1">
          <h2 className="text-2xl text-gray-900 tracking-wider font-inter uppercase">
            Message
          </h2>
          <p className="text-md text-gray-900 font-normal">
            ちかごろ世間で日本歴史の科学的研究ということがしきりに叫ばれている。科学的研究というのが近代私学の学問的方法による研究という意義であるならば。
          </p>
        </div>
        <img
          src={Message2}
          alt="message one img"
          className="order-1 md:order-2"
        />
      </div>
    </div>
  );
};

export default Message;
