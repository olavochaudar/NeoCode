import React from 'react'
import { motion } from 'framer-motion'

const Ferramentas = () => {
  // Lista de logos conforme sua pasta public
  const logos = [
    { src: "/ReactLogo.svg", name: "React JS", delay: "0s" },
    { src: "/NodeLogo.svg", name: "Node.js", delay: "0.8s" },
    { src: "/tailwindLogo.svg", name: "Tailwind", delay: "1.6s" },
    { src: "/cssLogo.svg", name: "CSS3", delay: "2.4s" },
    { src: "/htmlLogo.svg", name: "HTML5", delay: "3.2s" },
    { src: "/LogoTeste.svg", name: "Photoshop", delay: "4s" },
    { src: "/CanvaLogo.svg", delay: "4.8s" },
  ];

  const infiniteLogos = [...logos, ...logos, ...logos];

  // TEXTOS ORIGINAIS QUE VOCÊ PASSOU (Mantidos exatamente como solicitado)
  const cards = [
    {
      title: "Sobre a Neo Code",
      text: "Na Neo Code, trabalhamos com ferramentas modernas e tecnologias de ponta para desenvolver soluções digitais eficientes e inovadoras.",
      color: "#0A84FF",
      label: "Inovação"
    },
    {
      title: "Tecnologias que utilizamos",
      text: "Utilizamos tecnologias como React JS, Node.js, Tailwind CSS e HTML, garantindo performance, escalabilidade e interfaces modernas.",
      color: "#0A84FF",
      label: "Performance"
    },
    {
      title: "Design e criatividade",
      text: "Também contamos com ferramentas como Canva e Photoshop para criar designs impactantes, alinhando estética e funcionalidade.",
      color: "#30D158",
      label: "Visual"
    },
    {
      title: "Nosso diferencial",
      text: "Com o uso de frameworks atuais e boas práticas de desenvolvimento, entregamos projetos de alta qualidade, sempre focados na melhor experiência do usuário.",
      color: "#BF5AF2",
      label: "Diferencial"
    }
  ];

  return (
    <section id="ferramentas" className='bg-[#0B0B0D] text-[#F5F5F7] font-["Poppins"] py-16 md:py-32 overflow-hidden relative'>

      {/* Luz de fundo (Nebulosa) */}
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[400px] bg-[#0A84FF] rounded-full blur-[160px] opacity-[0.03] pointer-events-none'></div>

      <div className='max-w-7xl mx-auto px-6 relative z-10'>

        {/* TÍTULO */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className='text-center mb-16 md:mb-28'>
          <h2 className='text-[#0A84FF] font-semibold tracking-[0.4em] uppercase text-[10px] mb-3'>Ecossistema</h2>
          <h1 className='text-4xl md:text-7xl font-bold tracking-tight text-white'>
            Nossa Stack
          </h1>
        </motion.div>

        {/* CARROSSEL DE LOGOS (COM EFEITO DE REVELAÇÃO NO MOBILE) */}
        <div className='relative mb-24 md:mb-40 py-6'>
          <div className='absolute inset-y-0 left-0 w-24 md:w-80 bg-gradient-to-r from-[#0B0B0D] to-transparent z-30 pointer-events-none'></div>
          <div className='absolute inset-y-0 right-0 w-24 md:w-80 bg-gradient-to-l from-[#0B0B0D] to-transparent z-30 pointer-events-none'></div>

          <div className='flex overflow-hidden'>
            <motion.div className='flex items-center gap-14 md:gap-32 whitespace-nowrap' animate={{ x: [0, -2000] }} transition={{ repeat: Infinity, duration: 30, ease: "linear" }}>
              {infiniteLogos.map((logo, i) => (
                <div key={i} className='flex items-center gap-5 flex-shrink-0 group'>
                  <img
                    src={logo.src}
                    alt={logo.name}
                    style={{ animationDelay: logo.delay }}
                    className='h-12 w-auto transition-all max-md:animate-mobile-reveal md:grayscale md:opacity-30 md:group-hover:grayscale-0 md:group-hover:opacity-100'
                  />
                  <span className='text-2xl md:text-5xl font-bold tracking-tighter uppercase opacity-20 md:group-hover:opacity-100 transition-all'>
                    {logo.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* ÁREA DE CARDS (4 CARDS COM TEXTOS ORIGINAIS) */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12'>
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              style={{ '--card-color': card.color, '--card-glow': `${card.color}33` }}
              className='relative bg-[#111113]/60 backdrop-blur-xl border border-[#1C1C1E] p-10 md:p-14 rounded-[2.5rem] md:rounded-[3rem] overflow-hidden group 
                         hover:border-white/20 transition-all duration-500 shadow-2xl'
            >
              {/* Efeito de Reflexo (Shine) que passa pelo card no hover */}
              <div className='absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shine pointer-events-none'></div>

              {/* Linha Neon no Topo */}
              <div className='absolute top-0 left-0 w-full h-[2px] opacity-30 group-hover:opacity-100 transition-opacity'
                style={{ background: `linear-gradient(to right, transparent, ${card.color}, transparent)` }}></div>

              {/* Conteúdo */}
              <span className='text-[10px] md:text-[12px] uppercase tracking-[0.4em] font-bold mb-4 block' style={{ color: card.color }}>
                {card.label}
              </span>
              <h3 className='text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6 tracking-tight'>
                {card.title}
              </h3>
              <p className='text-lg md:text-xl text-[#D2D2D7] leading-relaxed font-light group-hover:text-[#F5F5F7] transition-colors'>
                {card.text}
              </p>

              {/* Brilho interno no canto */}
              <div className='absolute -bottom-10 -right-10 w-32 h-32 rounded-full blur-[60px] opacity-0 group-hover:opacity-10 transition-opacity'
                style={{ backgroundColor: card.color }}></div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Ferramentas