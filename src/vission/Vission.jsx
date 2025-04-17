import React from "react";
import { motion } from "framer-motion";
const Vission = () => {
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
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
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
        duration: 0.9,
        ease: "easeOut",
      },
    },
  };

  return (
    <div id="vision" className="max-w-screen-lg mx-auto my-10">
      <motion.div
        className="flex flex-col items-center justify-center space-y-4 px-2 overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h2
          className="text-2xl tracking-wider font-inter uppercase text-gray-800"
          variants={itemOneVariants}
        >
          Vision
        </motion.h2>
        <motion.p
          className="text-md text-gray-900 font-normal"
          variants={itemTwoVariants}
        >
          ちかごろ世間で日本歴史の科学的研究ということがしきりに叫ばれている。科学的研究というのが近代私学の学問的方法による研究という意義であるならば、これは史学の学徒の間に老いては一般に行われていることであるから、今更こと新しくいうには及ばないはずである。上に行ったような事柄については、曖昧な態度をとり、または真実でない知識を強いて注入していたことも、明らかな事実である。
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Vission;
