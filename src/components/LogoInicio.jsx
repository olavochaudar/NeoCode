import React, { useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

const LogoInicio = () => {
  const [isHovered, setIsHovered] = useState(false);

  // 1. Valores de entrada
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // 2. Física de Mola
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
    setIsHovered(true);
  };

  const handleReset = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    // AUMENTEI A ALTURA: h-[65vh] no mobile e h-[85vh] no desktop
    <section
      onMouseMove={handleMouseMove}
      onMouseLeave={handleReset}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleReset}
      className='relative w-full h-[65vh] md:h-[85vh] flex items-center justify-center bg-[#0B0B0D] overflow-hidden cursor-default touch-pan-y'
      style={{ perspective: "1200px" }}
    >

      {/* ATMOSFERA AZUL REATIVA (Expandida) */}
      <div className='absolute inset-0 z-0 pointer-events-none flex items-center justify-center'>
        <motion.div
          animate={{
            opacity: isHovered ? 0.25 : 0.03,
            scale: isHovered ? 1.2 : 0.9,
            // Aumentei o brilho de fundo para cobrir a área maior
            filter: isHovered ? 'blur(130px)' : 'blur(180px)'
          }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className='absolute w-full max-w-[1000px] h-[500px] bg-[#0A84FF] rounded-full'
        />
      </div>

      {/* CONTAINER DA LOGO 3D */}
      <motion.div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        initial={{ opacity: 0, scale: 1.1, filter: 'blur(30px)' }}
        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
        transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
        className='relative z-10 p-8 flex justify-center items-center pointer-events-none md:pointer-events-auto'
      >

        {/* Glow dinâmico interno */}
        <motion.div
          style={{
            x: useTransform(mouseXSpring, [-0.5, 0.5], [25, -25]),
            y: useTransform(mouseYSpring, [-0.5, 0.5], [25, -25]),
            translateZ: "-20px"
          }}
          animate={{
            opacity: isHovered ? 0.4 : 0,
          }}
          className='absolute inset-0 bg-[#0A84FF] blur-[70px] rounded-full transition-opacity duration-700'
        />

        {/* LOGO - TAMANHO AJUSTADO (Sutilmente maior para preencher a nova altura) */}
        <motion.img
          src="LogoMaisIcone.png"
          alt="Logo"
          style={{ translateZ: "60px" }} // Maior profundidade
          animate={{
            scale: isHovered ? 1.05 : 1,
            filter: isHovered ? 'brightness(1.2) contrast(1.1)' : 'brightness(1) contrast(1)'
          }}
          // max-w-[220px] mobile / max-w-[480px] desktop
          className='relative w-full max-w-[220px] md:max-w-[480px] h-auto object-contain drop-shadow-[0_25px_60px_rgba(10,132,255,0.25)] select-none'
        />
      </motion.div>

      {/* INDICADOR MINIMALISTA */}
      <div className='absolute bottom-8 w-full flex flex-col items-center gap-3'>
        <motion.div
          animate={{ opacity: isHovered ? 0.8 : 0.3 }}
          className='text-[9px] uppercase tracking-[0.5em] text-[#D2D2D7] font-light'
        >
          Neo Code Experience
        </motion.div>
        <motion.div
          animate={{
            height: isHovered ? 60 : 40,
            backgroundColor: isHovered ? '#0A84FF' : '#1C1C1E',
            boxShadow: isHovered ? '0 0 15px #0A84FF' : '0 0 0px transparent'
          }}
          className='w-[1px] transition-all duration-700'
        />
      </div>

      <div className='absolute bottom-0 w-full h-32 bg-gradient-to-t from-[#0B0B0D] to-transparent z-20 pointer-events-none' />
    </section>
  )
}

export default LogoInicio