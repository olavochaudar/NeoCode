import React from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

const LogoInicio = () => {
  // 1. Valores de entrada (Mouse ou Dedo)
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // 2. Suavidade (Spring)
  const springConfig = { stiffness: 150, damping: 25 };
  const mouseXSpring = useSpring(x, springConfig);
  const mouseYSpring = useSpring(y, springConfig);

  // 3. Transformação 3D
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

  // FUNÇÕES DE MOVIMENTO
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleTouchMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const touch = e.touches[0];
    x.set((touch.clientX - rect.left) / rect.width - 0.5);
    y.set((touch.clientY - rect.top) / rect.height - 0.5);
  };

  const handleReset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    // Reduzi a altura para h-[50vh] no mobile e h-[70vh] no desktop
    <section
      onMouseMove={handleMouseMove}
      onMouseLeave={handleReset}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleReset}
      className='relative w-full h-[50vh] md:h-[70vh] flex items-center justify-center bg-[#0B0B0D] overflow-hidden cursor-default touch-pan-y'
      style={{ perspective: "1200px" }}
    >

      {/* ATMOSFERA AZUL */}
      <div className='absolute inset-0 z-0 pointer-events-none flex items-center justify-center'>
        <motion.div
          animate={{ opacity: [0.04, 0.07, 0.04], scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className='w-full max-w-[600px] h-[300px] bg-[#0A84FF] rounded-full blur-[120px]'
        />
      </div>

      {/* CONTAINER DA LOGO 3D */}
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        initial={{ opacity: 0, scale: 1.1, filter: 'blur(30px)' }}
        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
        transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
        className='relative z-10 p-6 flex justify-center items-center pointer-events-none md:pointer-events-auto'
      >

        {/* Glow dinâmico */}
        <motion.div
          style={{
            x: useTransform(mouseXSpring, [-0.5, 0.5], [15, -15]),
            y: useTransform(mouseYSpring, [-0.5, 0.5], [15, -15]),
            translateZ: "-20px"
          }}
          className='absolute inset-0 bg-[#0A84FF] blur-[60px] opacity-10 rounded-full'
        />

        {/* LOGO - TAMANHO REDUZIDO (max-w-[180px] no mobile / max-w-[400px] no desktop) */}
        <motion.img
          src="LogoNeoCode.png"
          alt="Logo"
          style={{ translateZ: "40px" }}
          className='relative w-full max-w-[180px] md:max-w-[400px] h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)] brightness-105 contrast-105 select-none'
        />
      </motion.div>

      {/* INDICADOR MINIMALISTA */}
      <div className='absolute bottom-6 w-full flex flex-col items-center gap-2'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 4, repeat: Infinity }}
          className='text-[8px] uppercase tracking-[0.4em] text-[#6E6E73] font-light'
        >
          Neo Code Experience
        </motion.div>
        <div className='w-[1px] h-10 bg-gradient-to-b from-[#1C1C1E] via-[#0A84FF]/20 to-transparent' />
      </div>

      {/* Fade para a próxima seção */}
      <div className='absolute bottom-0 w-full h-24 bg-gradient-to-t from-[#0B0B0D] to-transparent z-20 pointer-events-none' />
    </section>
  )
}

export default LogoInicio