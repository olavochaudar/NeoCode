import React from 'react'
import { motion } from 'framer-motion'

const Contato = () => {
  // Configuração de animação de entrada
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section id="contato" className='bg-[#0B0B0D] text-[#F5F5F7] font-["Poppins"] py-24 md:py-44 relative overflow-hidden'>

      {/* 1. LUZ DE AMBIENTE (Aura tecnológica no fundo) */}
      <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[400px] bg-[#0A84FF] rounded-full blur-[180px] opacity-[0.05] pointer-events-none'></div>

      <div className='max-w-7xl mx-auto px-6 relative z-10'>

        {/* 2. CABEÇALHO IMPACTANTE */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
          className='text-center mb-20 md:mb-32'
        >
          <h2 className='text-[#0A84FF] font-semibold tracking-[0.4em] uppercase text-[10px] md:text-xs mb-6'>Pronto para começar?</h2>
          <h1 className='text-4xl md:text-8xl font-bold tracking-tight mb-8'>
            Não perca tempo<span className='text-[#0A84FF]'>.</span><br />
            <span className='bg-gradient-to-b from-[#F5F5F7] to-[#6E6E73] bg-clip-text text-transparent'>
              Transforme sua ideia hoje.
            </span>
          </h1>
          <p className='text-[#D2D2D7] text-lg md:text-xl font-light max-w-2xl mx-auto'>
            Entre em contato e solicite seu orçamento. Nossa equipe está pronta para criar algo extraordinário para você.
          </p>
        </motion.div>

        {/* 3. GRID DE CONTATO (BENTO CARDS) */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12'>

          {/* CARD INSTAGRAM */}
          <motion.a
            href="https://www.instagram.com/neocode.oficial?igsh=MXNweHRudjY4M2h6eA%3D%3D&utm_source=qr"
            target="_blank" rel="noopener noreferrer"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            whileHover={{ y: -10, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className='group relative bg-[#111113]/60 backdrop-blur-2xl border border-[#1C1C1E] p-10 md:p-16 rounded-[3rem] overflow-hidden flex flex-col items-center text-center transition-all duration-500 hover:border-[#BF5AF2]/40'
          >
            {/* Brilho interno do card */}
            <div className='absolute inset-0 bg-gradient-to-br from-[#BF5AF2]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700'></div>

            {/* Ícone Instagram (Estilo Apple Glass) */}
            <div className='w-20 h-20 md:w-24 md:h-24 bg-white/5 rounded-[2rem] flex items-center justify-center mb-8 border border-white/10 group-hover:bg-[#BF5AF2]/20 transition-all duration-500'>
              <svg className='w-10 h-10 md:w-12 md:h-12 text-white' fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </div>

            <h3 className='text-2xl md:text-3xl font-bold mb-2'>Instagram</h3>
            <p className='text-[#D2D2D7] text-lg font-light group-hover:text-white transition-colors'>Mande um direct agora</p>
          </motion.a>

          {/* CARD WHATSAPP */}
          <motion.a
            href="https://wa.me/5515996599321"
            target="_blank" rel="noopener noreferrer"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            whileHover={{ y: -10, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className='group relative bg-[#111113]/60 backdrop-blur-2xl border border-[#1C1C1E] p-10 md:p-16 rounded-[3rem] overflow-hidden flex flex-col items-center text-center transition-all duration-500 hover:border-[#30D158]/40'
          >
            {/* Brilho interno do card */}
            <div className='absolute inset-0 bg-gradient-to-br from-[#30D158]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700'></div>

            {/* Ícone WhatsApp */}
            <div className='w-20 h-20 md:w-24 md:h-24 bg-white/5 rounded-[2rem] flex items-center justify-center mb-8 border border-white/10 group-hover:bg-[#30D158]/20 transition-all duration-500'>
              <svg className='w-10 h-10 md:w-12 md:h-12 text-white' fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.438 9.889-9.886.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884 0 2.225.569 3.891 1.735 5.561l-.999 3.647 3.753-.984z" />
              </svg>
            </div>

            <h3 className='text-2xl md:text-3xl font-bold mb-2'>WhatsApp</h3>
            <p className='text-[#D2D2D7] text-lg font-light group-hover:text-white transition-colors'>Chame no chat agora</p>
          </motion.a>

        </div>

        {/* 4. FOOTER MINIMALISTA */}
        <motion.div
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className='mt-24 text-center border-t border-[#1C1C1E] pt-12'
        >
          <p className='text-[#6E6E73] text-sm uppercase tracking-widest'>© 2024 Neo Code. Crafted for Excellence.</p>
        </motion.div>

      </div>
    </section>
  )
}

export default Contato