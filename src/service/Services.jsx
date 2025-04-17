import React from "react";
import { motion } from "framer-motion";
import service1 from "../assets/images/circleImg01.png";
import service2 from "../assets/images/circleImg02.png";
import service3 from "../assets/images/circleImg03.png";
const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const itemThreeVariants = {
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
    <div id="service" className="max-w-screen-lg mx-auto my-20 overflow-hidden">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div
          className="flex flex-col items-center  space-y-4"
          variants={itemOneVariants}
        >
          <h2 className="text-2xl text-gray-900 tracking-wider font-inter uppercase">
            Service
          </h2>
          <img src={service1} alt="" className="h-72" />
          <p className="text-sm text-gray-900 font-normal px-4">
            ちかごろ世間で日本歴史の科学的研究ということがしきりに叫ばれている。科学的研究というのが近代私学の学問的方法による研究という意義であるならば、これは史学の学徒の間に老いては一般に行われていることであるから、今更こと新しくいう。
          </p>
        </motion.div>
        <motion.div
          className="flex flex-col items-center  space-y-4"
          variants={itemTwoVariants}
        >
          <h2 className="text-2xl text-gray-900 tracking-wider font-inter uppercase">
            Message
          </h2>
          <img src={service2} alt="" className="h-72" />
          <p className="text-sm text-gray-900 font-normal px-4">
            ちかごろ世間で日本歴史の科学的研究ということがしきりに叫ばれている。科学的研究というのが近代私学の学問的方法による研究という意義であるならば。
          </p>
        </motion.div>
        <motion.div
          className="flex flex-col items-center space-y-4"
          variants={itemThreeVariants}
        >
          <h2 className="text-2xl text-gray-900 tracking-wider font-inter uppercase">
            Story
          </h2>
          <img src={service3} alt="" className="h-72" />
          <p className="text-sm text-gray-900 font-normal px-4">
            科学的研究というのが近代私学の学問的方法による研究という意義であるならば、これは史学の学徒の間に老いては一般に行われていることであるから、今更こと新しくいう。
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Services;
