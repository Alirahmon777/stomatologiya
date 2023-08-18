'use client';
import React from 'react';
import { motion } from 'framer-motion';

const page = () => {
  return (
    <div className='h-[200vh]'>
      <motion.div whileInView={{ translateX: '100px' }}>Uslugi Page</motion.div>
    </div>
  );
};

export default page;
