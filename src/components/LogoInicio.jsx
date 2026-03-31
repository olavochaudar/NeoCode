import React from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

const LogoInicio = () => {
  // 1. Valores de entrada (Mouse ou Dedo)
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // 2. Física de Mola (O segredo da suavidade Apple)
  const springConfig = { stiffness: 150, damping: 20 };
  const mouseXSpring = useSpring(x, springConfig);
  const mouseYSpring = useSpring(y, springConfig);

  // 3. Transformação 3D (Inclinação de até 15 graus)
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  // FUNÇÃO PARA DESKTOP (Mouse)
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  // FUNÇÃO PARA MOBILE (Dedo)
  const handleTouchMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const touch = e.touches[0];
    x.set((touch.clientX - rect.left) / rect.width - 0.5);
    y.set((touch.clientY - rect.top) / rect.height - 0.5);
  };

  // RESETAR AO TIRAR O MOUSE/DEDO
  const handleReset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      onMouseLeave={handleReset}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleReset}
      className='relative w-full h-[70vh] md:h-screen flex items-center justify-center bg-[#0B0B0D] overflow-hidden touch-none cursor-default'
      style={{ perspective: "1200px" }}
    >

      {/* ATMOSFERA (AURA AZUL DE FUNDO) */}
      <div className='absolute inset-0 z-0 pointer-events-none flex items-center justify-center'>
        <motion.div
          animate={{
            opacity: [0.04, 0.08, 0.04],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className='w-full max-w-[850px] h-[450px] bg-[#0A84FF] rounded-full blur-[150px]'
        />
      </div>

      {/* CONTAINER DA LOGO 3D */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d"
        }}
        initial={{ opacity: 0, scale: 1.1, filter: 'blur(30px)' }}
        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
        transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
        className='relative z-10 p-10 flex justify-center items-center'
      >

        {/* Glow que persegue o dedo/mouse atrás da logo */}
        <motion.div
          style={{
            x: useTransform(mouseXSpring, [-0.5, 0.5], [20, -20]),
            y: useTransform(mouseYSpring, [-0.5, 0.5], [20, -20]),
            translateZ: "-30px"
          }}
          className='absolute inset-0 bg-[#0A84FF] blur-[80px] opacity-10 rounded-full'
        />

        {/* LOGO PRINCIPAL (Limpa, sem brilhos brancos) */}
        <motion.img
          src="LogoNeoCode.png"
          alt="Neo Code Logo"
          style={{ translateZ: "50px" }} // Faz a logo saltar da tela no mobile
          className='relative w-full max-w-[260px] md:max-w-[580px] h-auto object-contain 
                     drop-shadow-[0_25px_50px_rgba(0,0,0,0.7)] 
                     brightness-110 contrast-110 select-none pointer-events-none'
        />

      </motion.div>

      {/* INDICADOR MINIMALISTA ABAIXO */}
      <div className='absolute bottom-10 w-full flex flex-col items-center gap-4'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 4, repeat: Infinity }}
          className='text-[9px] uppercase tracking-[0.5em] text-[#6E6E73] font-light'
        >
          Tocar & Explorar
        </motion.div>
        <div className='w-[1px] h-14 bg-gradient-to-b from-[#1C1C1E] via-[#0A84FF]/30 to-transparent' />
      </div>

      {/* Transição final para a próxima seção */}
      <div className='absolute bottom-0 w-full h-32 bg-gradient-to-t from-[#0B0B0D] to-transparent z-20 pointer-events-none' />
    </section>
  )
}

export default LogoInicio