import React from 'react'
import { motion } from 'framer-motion'

const Projetos = () => {
  const listaProjetos = [
    {
      id: 1,
      titulo: "SW4 Experience",
      categoria: "Landing Page Automotiva",
      imgPc: "Sw4Pc.png",
      imgMobile: "Sw4Mobile.jpeg",
      link: "https://sw4in.netlify.app/",
      corGlow: "rgba(255, 214, 10, 0.12)"
    },
    {
      id: 2,
      titulo: "Serraria Digital",
      categoria: "Indústria & Tecnologia",
      imgPc: "SerrariaPc.png",
      imgMobile: "serrariaMobile.jpeg",
      link: "https://serrariavilasene.netlify.app/",
      corGlow: "rgba(48, 209, 88, 0.12)"
    },
    {
      id: 3,
      titulo: "Dashboard Neo",
      categoria: "Gestão & Business",
      imgPc: "DashboardPc.png",
      imgMobile: "dashboardMobile.jpeg",
      link: "https://financeiroconnected.netlify.app/",
      corGlow: "rgba(10, 132, 255, 0.12)"
    }
  ];

  return (
    <section id="projetos" className='bg-[#0B0B0D] text-[#F5F5F7] font-["Poppins"] py-24 md:py-40 overflow-hidden'>
      <div className='max-w-7xl mx-auto px-6'>

        {/* Título da Seção */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='mb-20 md:mb-32'
        >
          <h2 className='text-[#0A84FF] font-semibold tracking-[0.3em] uppercase text-[10px] md:text-xs mb-4'>Portfolio Exclusivo</h2>
          <h1 className='text-4xl md:text-7xl font-bold tracking-tight bg-gradient-to-b from-white to-[#6E6E73] bg-clip-text text-transparent'>
            Projetos em Destaque
          </h1>
        </motion.div>

        {/* Lista de Projetos */}
        <div className='flex flex-col gap-32 md:gap-60'>
          {listaProjetos.map((projeto, i) => (
            <div key={projeto.id} className={`flex flex-col ${i % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-24`}>

              {/* ÁREA DOS MOCKUPS */}
              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className='relative w-full md:w-3/5 group'
              >
                <div className='absolute inset-0 rounded-full blur-[130px] opacity-30 transition-opacity duration-700 group-hover:opacity-50' style={{ backgroundColor: projeto.corGlow }}></div>

                {/* MOCKUP PC */}
                <div className='relative bg-[#1C1C1E] rounded-xl md:rounded-2xl border border-[#2A2A2E] shadow-2xl overflow-hidden transform group-hover:-translate-y-2 transition-transform duration-700'>
                  <div className='h-6 md:h-8 bg-[#2A2A2E]/60 flex items-center px-3 md:px-4 gap-1.5 border-b border-[#2A2A2E]'>
                    <div className='w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-[#FF5F56]'></div>
                    <div className='w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-[#FFBD2E]'></div>
                    <div className='w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-[#27C93F]'></div>
                  </div>
                  <img src={projeto.imgPc} alt={projeto.titulo} className='w-full h-auto object-cover' />
                </div>

                {/* MOCKUP MOBILE */}
                <motion.div
                  initial={{ opacity: 0, y: 60, rotate: i % 2 === 0 ? 3 : -3 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className='absolute -bottom-8 -right-2 md:-bottom-16 md:right-8 w-28 md:w-48 bg-[#0B0B0D] rounded-[2.2rem] md:rounded-[3.5rem] border-[5px] md:border-[8px] border-[#1C1C1E] shadow-[0_30px_70px_rgba(0,0,0,0.9)] overflow-hidden z-20'
                >
                  <div className='absolute top-2.5 left-1/2 -translate-x-1/2 w-10 md:w-16 h-3 md:h-5 bg-[#1C1C1E] rounded-full z-30'></div>
                  <img src={projeto.imgMobile} alt="Mobile" className='w-full h-auto' />
                </motion.div>
              </motion.div>

              {/* TEXTOS E BOTÃO COM LINK */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className='w-full md:w-2/5 space-y-6 md:space-y-8 text-center md:text-left'
              >
                <div>
                  <span className='text-[#0A84FF] text-xs font-semibold tracking-widest uppercase'>{projeto.categoria}</span>
                  <h3 className='text-3xl md:text-5xl font-bold mt-2 leading-tight'>{projeto.titulo}</h3>
                </div>

                <p className='text-[#D2D2D7] text-lg md:text-xl leading-relaxed font-light'>
                  Na <span className='text-white font-medium'>Neo Code</span>, elevamos este projeto ao nível máximo de performance e design, entregando uma solução tecnológica sob medida.
                </p>

                <div className='pt-4'>
                  <a
                    href={projeto.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className='group relative inline-flex items-center mx-auto md:mx-0 bg-[#1C1C1E] text-white border border-white/10 px-10 py-4 rounded-full font-bold text-sm hover:bg-white hover:text-black transition-all shadow-xl active:scale-95'
                  >
                    Ver Projeto Ao Vivo
                  </a>
                </div>
              </motion.div>

            </div>
          ))}
        </div>

        {/* --- NOVO BOTÃO: EXPLORAR GALERIA COMPLETA --- */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='mt-32 md:mt-48 text-center'
        >
          <p className='text-[#6E6E73] text-lg mb-8 font-light'>Deseja ver mais do nosso trabalho?</p>
          <a
            href="https://portfolioneocode.netlify.app/" // O link para o seu outro site
            className='group relative inline-flex items-center gap-3 bg-[#0A84FF] text-white px-12 py-5 rounded-full font-bold text-lg hover:bg-[#0071e3] transition-all shadow-[0_0_30px_rgba(10,132,255,0.4)] hover:scale-105 active:scale-95'
          >
            Explore mais Alguns Projetos
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </a>
        </motion.div>

      </div>
    </section>
  )
}

export default Projetos