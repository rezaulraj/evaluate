import React from "react";
import { motion } from "framer-motion";
const Footer = () => {
  const companyInfo = [
    { label: "社名", value: "Sample Company" },
    { label: "代表取締役", value: "見本 太郎" },
    { label: "住所", value: "見本県見本市仮区見本町1-3-5" },
    { label: "電話番号", value: "01234-567-8901" },
    { label: "設立", value: "20XX年5月5日" },
    { label: "資本金", value: "1,000,000円" },
    {
      label: "主な取引先",
      value: "見本商事株式会社 株式会社年中無休商事 株式会社仮称",
      style: "#3B82F6",
    },
  ];

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
    <div id="profile" className="max-w-screen-lg mx-auto my-20 px-4 overflow-hidden">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div
          className="grid grid-cols-1 gap-x-4 gap-y-2"
          variants={itemOneVariants}
        >
          {companyInfo.map((item, index) => (
            <div key={index} className="flex gap-4">
              <span className="w-24 font-semibold text-right">
                {item.label}
              </span>
              <span
                className="flex-1 break-all max-w-56"
                style={{ color: item.style }}
              >
                {item.value}
              </span>
            </div>
          ))}
        </motion.div>
        <motion.div
          className="h-full w-full rounded-md"
          variants={itemTwoVariants}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3198.5936140209965!2d136.9294234757141!3d36.708302272874576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5ff781ec5af4ca3f%3A0x2ade3e8e4c2801b8!2sFukuoka%20Station!5e0!3m2!1sen!2sbd!4v1744794010183!5m2!1sen!2sbd"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </motion.div>
      <div className="my-10 flex items-center justify-center">
        <p className="text-black font-medium text-center">
          Copyright© 20XX Simple Inc. All Right Reserved. Design by{" "}
          <a href="http://f-tpl.com" target="_blank" className="text-blue-400">
            http://f-tpl.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
