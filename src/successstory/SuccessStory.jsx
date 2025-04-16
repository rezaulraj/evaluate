import React from "react";
import succesStory from "../assets/images/bgSec04.jpg";
const SuccessStory = () => {
  return (
    <div
      id="story"
      className="h-full w-full relative"
      style={{
        backgroundImage: `url(${succesStory})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/30 z-0"></div>
      <div className="max-w-screen-lg mx-auto py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-lg md:text-2xl text-white/80 font-bold mb-4 text-center tracking-widest">
              Story
            </h2>
            <p className="text-sm md:text-base text-white/80">
              科学的研究というのが近代私学の学問的方法による研究という意義であるならば、これは史学の学徒の間に老いては一般に行われていることであるから、今更こと新しくいうには及ばないはずである。
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-lg md:text-2xl  text-white/80 font-bold mb-4 text-center tracking-widest">
              Success
            </h2>
            <p className="text-sm  text-white/80 md:text-base">
              ちかごろ世間で日本歴史の科学的研究ということがしきりに叫ばれている。科学的研究というのが近代私学の学問的方法による研究という意義であるならば、これは史学の学徒の間に老いては一般に行われていることであるから、今更こと新しくいうには及ばないはずである。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStory;
