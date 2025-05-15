import React from 'react';
import { motion } from 'framer-motion';
import FooterLeft from './FooterLeft';
import FooterMiddle from './FooterMiddle';
import FooterRight from './FooterRight';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const FooterMain = () => {
  return (
    <footer className="bg-[#2E4F4F] text-white px-6 py-10 mt-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
        <motion.div
          className="w-full md:w-1/3 flex justify-start"
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <FooterLeft />
        </motion.div>
        <motion.div
          className="w-full md:w-1/3 flex justify-start md:justify-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
        >
          <FooterMiddle />
        </motion.div>
        <motion.div
          className="w-full md:w-1/3 flex justify-start md:justify-end"
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <FooterRight />
        </motion.div>
      </div>

      <motion.div
        className="border-t border-gray-600 mt-8 pt-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-white">
          <p>© 2025 Madhav Hirani. All Rights Reserved.</p>
          <p className="mt-2 md:mt-0">Designed & Built with ❤️ by Madhav Hirani</p>
        </div>
      </motion.div>
    </footer>
  );
};

export default FooterMain;