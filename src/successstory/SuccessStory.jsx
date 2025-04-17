import React from "react";
import { motion } from "framer-motion";
import succesStory from "../assets/images/bgSec04.jpg";
const SuccessStory = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.6,
      },
    },
  };
  const itemOneVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const itemTwoVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <div
      id="story"
      className="h-full w-full relative overflow-hidden"
      style={{
        backgroundImage: `url(${succesStory})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/30 z-0"></div>
      <div className="max-w-screen-lg mx-auto py-20 relative z-10">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div
            className="flex flex-col items-center justify-center"
            variants={itemOneVariants}
          >
            <h2 className="text-lg md:text-2xl text-white/80 font-bold mb-4 text-center tracking-widest">
              Story
            </h2>
            <p className="text-sm md:text-base text-white/80">
              科学的研究というのが近代私学の学問的方法による研究という意義であるならば、これは史学の学徒の間に老いては一般に行われていることであるから、今更こと新しくいうには及ばないはずである。
            </p>
          </motion.div>
          <motion.div
            className="flex flex-col items-center justify-center"
            variants={itemTwoVariants}
          >
            <h2 className="text-lg md:text-2xl  text-white/80 font-bold mb-4 text-center tracking-widest">
              Success
            </h2>
            <p className="text-sm  text-white/80 md:text-base">
              ちかごろ世間で日本歴史の科学的研究ということがしきりに叫ばれている。科学的研究というのが近代私学の学問的方法による研究という意義であるならば、これは史学の学徒の間に老いては一般に行われていることであるから、今更こと新しくいうには及ばないはずである。
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default SuccessStory;
