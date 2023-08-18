'use client';

import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className='h-[200vh]'>
      <motion.div whileInView={{ translateX: '100px' }}>Hello</motion.div>
    </div>
  );
}
