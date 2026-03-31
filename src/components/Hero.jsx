import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  // Estilo para o "Fade" invisível na base da foto (Padrão Apple)
  const imageMask = {
    WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
    maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)'
  }

  return (
    <section className='relative bg-[#0B0B0D] text-[#F5F5F7] font-["Poppins"] py-16 md:py-32 overflow-hidden'>
      <div className='max-w-7xl mx-auto px-6'>

        {/* 1. TÍTULO CENTRALIZADO */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
          className='text-center mb-12 md:mb-24'
        >
          <h1 className='text-4xl md:text-7xl font-bold tracking-tight bg-gradient-to-b from-white to-[#6E6E73] bg-clip-text text-transparent'>
            Sobre a empresa
          </h1>
          <div className='h-[2px] w-12 bg-[#0A84FF] mx-auto mt-4 rounded-full opacity-80 shadow-[0_0_8px_#0A84FF]'></div>
        </motion.div>

        {/* 2. CONTEÚDO PRINCIPAL */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center'>

          {/* COLUNA DA ESQUERDA: IMAGEM (Apenas Desktop) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className='hidden md:flex justify-center relative'
          >
            {/* Brilho Azul de fundo (Sutil) */}
            <div className='absolute inset-0 bg-[#0A84FF] rounded-full blur-[130px] opacity-[0.07]'></div>

            <div className='relative' style={imageMask}>
              <img
                src="Ceo.png"
                alt="CEO Olavo Chaudar"
                className='w-full max-w-[420px] h-auto relative z-10'
              />
            </div>
          </motion.div>

          {/* COLUNA DA DIREITA: TEXTOS */}
          <div className='flex flex-col gap-8'>

            {/* Parágrafo 1 */}
            <motion.p variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className='text-lg md:text-xl text-[#D2D2D7] leading-relaxed text-center md:text-left'
            >
              <span className='text-white font-semibold'>Neo Code</span> é uma marca fundada por <span className='text-[#0A84FF] font-medium'>Olavo Chaudar</span>, um desenvolvedor apaixonado por inovação. O objetivo é criar soluções digitais modernas e visualmente impactantes.
            </motion.p>

            {/* IMAGEM MOBILE (Entre os parágrafos, apenas Mobile) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className='md:hidden flex justify-center relative my-4'
            >
              <div className='absolute inset-0 bg-[#0A84FF] rounded-full blur-[80px] opacity-15'></div>
              <div className='relative' style={imageMask}>
                <img
                  src="Ceo.png"
                  alt="CEO Olavo Chaudar"
                  className='w-48 h-auto relative z-10'
                />
              </div>
            </motion.div>

            {/* Parágrafo 2 e 3 */}
            <motion.p variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className='text-lg md:text-xl text-[#D2D2D7] leading-relaxed border-l-2 border-[#1C1C1E] md:pl-6 pl-4 md:text-left text-center'
            >
              Focamos em <span className='text-white'>desempenho e design minimalista</span>. Cada projeto é pensado de forma estratégica para oferecer experiências digitais únicas.
            </motion.p>

            <motion.p variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className='text-lg md:text-xl text-[#D2D2D7] leading-relaxed text-center md:text-left'
            >
              Utilizamos tecnologias atuais para transformar ideias em soluções reais, com atenção máxima aos detalhes e compromisso com a qualidade.
            </motion.p>

            {/* 3. BOTÃO CENTRALIZADO EM AMBOS */}
            <motion.div
              variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className='pt-6 flex justify-center w-full'
            >
              <a
                href="#projetos"
                className='inline-flex items-center justify-center px-10 py-4 font-semibold text-white bg-[#0A84FF] rounded-full hover:bg-[#0071e3] transition-all shadow-[0_10px_25px_rgba(10,132,255,0.3)] active:scale-95 group'
              >
                Ver Projetos
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="9 5l7 7-7 7"></path>
                </svg>
              </a>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Sombra de final de seção para transição suave */}
      <div className='absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#0B0B0D] to-transparent z-40 pointer-events-none'></div>
    </section>
  )
}

export default Hero