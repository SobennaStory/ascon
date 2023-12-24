import React from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

const variants = {
  default: { opacity: 0.5 },
  active: { opacity: 1 },
};

const TabButton = ({ active, selectTab, children, iconWidth, iconHeight }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['25deg', '-25deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['25deg', '-25deg']);

  const springConfig = {
    damping: 15,
    stiffness: 100,
  };

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = (mouseX / width) - 0.5;
    const yPct = (mouseY / height) - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      animate={active ? 'active' : 'default'}
      variants={variants}
      style={{
        rotateX,
        rotateY,
        borderRadius: '20px',
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.button
        onClick={selectTab}
        className='text-cream'
        whileHover={{ scale: 1.3, transition: springConfig }}
      >
        {React.Children.map(children, (child) =>
          React.cloneElement(child, {
            style: {
              width: iconWidth,
              height: iconHeight,
              ...child.props.style,
            },
          })
        )}
      </motion.button>
    </motion.div>
  );
};

export default TabButton;