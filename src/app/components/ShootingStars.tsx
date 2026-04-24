import { motion } from 'motion/react';

export default function ShootingStars() {
  const stars = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    delay: i * 3,
    duration: 2 + Math.random() * 2,
    left: Math.random() * 100,
    top: Math.random() * 100,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            boxShadow: '0 0 10px 2px rgba(255, 255, 255, 0.8)',
          }}
          initial={{ opacity: 0, x: 0, y: 0 }}
          animate={{
            opacity: [0, 1, 1, 0],
            x: [0, -200],
            y: [0, 200],
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            repeatDelay: 5,
            ease: 'linear',
          }}
        >
          <motion.div
            className="absolute h-0.5 bg-gradient-to-l from-white to-transparent"
            style={{ width: '60px', left: '2px' }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              duration: star.duration,
              delay: star.delay,
              repeat: Infinity,
              repeatDelay: 5,
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}
