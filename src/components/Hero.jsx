import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  const imageMask = {
    WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
    maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)'
  }

  return (
    // Reduzi py-16 md:py-32 para py-12 md:py-20
    <section className='relative bg-[#0B0B0D] text-[#F5F5F7] font-["Poppins"] py-12 md:py-20 overflow-hidden'>
      {/* Reduzi max-w-7xl para max-w-6xl */}
      <div className='max-w-6xl mx-auto px-6'>

        {/* 1. TÍTULO - Reduzi md:text-7xl para md:text-5xl */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
          className='text-center mb-10 md:mb-16'
        >
          <h1 className='text-3xl md:text-5xl font-bold tracking-tight bg-gradient-to-b from-white to-[#6E6E73] bg-clip-text text-transparent'>
            Sobre a empresa
          </h1>
          <div className='h-[2px] w-10 bg-[#0A84FF] mx-auto mt-3 rounded-full opacity-80 shadow-[0_0_8px_#0A84FF]'></div>
        </motion.div>

        {/* 2. CONTEÚDO PRINCIPAL */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center'>

          {/* IMAGEM DESKTOP - Reduzi max-w-[420px] para max-w-[340px] */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className='hidden md:flex justify-center relative'
          >
            <div className='absolute inset-0 bg-[#0A84FF] rounded-full blur-[100px] opacity-[0.05]'></div>

            <div className='relative' style={imageMask}>
              <img
                src="Ceo.png"
                alt="CEO Olavo Chaudar"
                className='w-full max-w-[340px] h-auto relative z-10'
              />
            </div>
          </motion.div>

          {/* COLUNA TEXTOS - Reduzi text-lg md:text-xl para text-base md:text-lg */}
          <div className='flex flex-col gap-6'>

            <motion.p variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className='text-base md:text-lg text-[#D2D2D7] leading-relaxed text-center md:text-left'
            >
              <span className='text-white font-semibold'>Neo Code</span> é uma marca fundada por <span className='text-[#0A84FF] font-medium'>Olavo Chaudar</span>, um desenvolvedor apaixonado por inovação. O objetivo é criar soluções digitais modernas e visualmente impactantes.
            </motion.p>

            {/* IMAGEM MOBILE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className='md:hidden flex justify-center relative my-4'
            >
              <div className='absolute inset-0 bg-[#0A84FF] rounded-full blur-[60px] opacity-15'></div>
              <div className='relative' style={imageMask}>
                <img
                  src="Ceo.png"
                  alt="CEO Olavo Chaudar"
                  className='w-40 h-auto relative z-10'
                />
              </div>
            </motion.div>

            <motion.p variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className='text-base md:text-lg text-[#D2D2D7] leading-relaxed border-l-2 border-[#1C1C1E] md:pl-6 pl-4 md:text-left text-center'
            >
              Focamos em <span className='text-white'>desempenho e design minimalista</span>. Cada projeto é pensado de forma estratégica para oferecer experiências digitais únicas.
            </motion.p>

            <motion.p variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className='text-base md:text-lg text-[#D2D2D7] leading-relaxed text-center md:text-left'
            >
              Utilizamos tecnologias atuais para transformar ideias em soluções reais, com atenção máxima aos detalhes e compromisso com a qualidade.
            </motion.p>

            {/* BOTÃO - Reduzi px-10 py-4 para px-8 py-3 */}
            <motion.div
              variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className='pt-4 flex justify-center w-full'
            >
              <a
                href="#projetos"
                className='inline-flex items-center justify-center px-8 py-3 font-semibold text-white bg-[#0A84FF] rounded-full hover:bg-[#0071e3] transition-all shadow-[0_10px_25px_rgba(10,132,255,0.2)] active:scale-95 group text-sm'
              >
                Ver Projetos
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="9 5l7 7-7 7"></path>
                </svg>
              </a>
            </motion.div>

          </div>
        </div>
      </div>

      <div className='absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#0B0B0D] to-transparent z-40 pointer-events-none'></div>
    </section>
  )
}

export default Hero