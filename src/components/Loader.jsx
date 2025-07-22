import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        {/* Spinning Circle with Initial */}
        <motion.div
          className="mb-8"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shadow-2xl"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{
              rotate: { duration: 2, repeat: Infinity, ease: "linear" },
              scale: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            <span className="text-4xl font-bold text-white">D</span>
          </motion.div>
        </motion.div>

        {/* Name and Loading Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Dhanush Pandian
          </h2>

          <div className="flex items-center justify-center gap-1">
            <span className="text-gray-600">Loading</span>
            <motion.div
              className="flex gap-1"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <div className="w-2 h-2 bg-blue-600 rounded-full" />
              <div className="w-2 h-2 bg-blue-600 rounded-full" />
              <div className="w-2 h-2 bg-blue-600 rounded-full" />
            </motion.div>
          </div>
        </motion.div>

        {/* Progress Bar */}
        {/* <motion.div
          className="w-64 h-1 bg-gray-200 rounded-full mt-8 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-blue-600 to-blue-800 rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
          />
        </motion.div> */}
      </div>
    </div>
  );
};

export default Loader;
