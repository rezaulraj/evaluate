import React from "react";
import { motion } from "framer-motion";
import Message1 from "../assets/images/sec02_01.jpg";
import Message2 from "../assets/images/sec02_02.jpg";
const Message = () => {
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
        duration: 0.9,
        ease: "easeOut",
      },
    },
  };

  return (
    <div id="message" className="bg-gray-100 flex flex-col space-y-6 overflow-hidden">
      <motion.div
        className="grid grid-cols-1 gap-5 md:grid-cols-2 items-center space-y-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.img
          src={Message1}
          alt="message one img"
          variants={itemOneVariants}
        />
        <motion.div
          className="flex flex-col gap-6 items-center justify-center px-4"
          variants={itemTwoVariants}
        >
          <h2 className="text-2xl text-gray-900 tracking-wider font-inter uppercase">
            Message
          </h2>
          <p className="text-md text-gray-900 font-normal">
            ちかごろ世間で日本歴史の科学的研究ということがしきりに叫ばれている。科学的研究というのが近代私学の学問的方法による研究という意義であるならば、これは史学の学徒の間に老いては一般に行われていることであるから、今更こと新しくいう。
          </p>
        </motion.div>
      </motion.div>
      <motion.div
        className="grid grid-cols-1 gap-5 md:grid-cols-2 items-center flex-col-reverse"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div
          className="flex gap-6 items-center justify-center flex-col px-4 order-2 md:order-1"
          variants={itemOneVariants}
        >
          <h2 className="text-2xl text-gray-900 tracking-wider font-inter uppercase">
            Message
          </h2>
          <p className="text-md text-gray-900 font-normal">
            ちかごろ世間で日本歴史の科学的研究ということがしきりに叫ばれている。科学的研究というのが近代私学の学問的方法による研究という意義であるならば。
          </p>
        </motion.div>
        <motion.img
          variants={itemTwoVariants}
          src={Message2}
          alt="message one img"
          className="order-1 md:order-2"
        />
      </motion.div>
    </div>
  );
};

export default Message;
