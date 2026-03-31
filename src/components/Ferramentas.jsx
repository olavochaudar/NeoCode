import React from 'react'
import { motion } from 'framer-motion'

const Ferramentas = () => {
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

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    // Reduzi py-16 md:py-32 para py-12 md:py-24
    <section id="ferramentas" className='bg-[#0B0B0D] text-[#F5F5F7] font-["Poppins"] py-12 md:py-24 overflow-hidden relative'>

      {/* Luz de fundo reduzida */}
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[300px] bg-[#0A84FF] rounded-full blur-[120px] opacity-[0.03] pointer-events-none'></div>

      <div className='max-w-6xl mx-auto px-6 relative z-10'>

        {/* TÍTULO - Reduzi md:text-7xl para md:text-6xl */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className='text-center mb-12 md:mb-20'>
          <h2 className='text-[#0A84FF] font-semibold tracking-[0.4em] uppercase text-[9px] mb-3'>Ecossistema</h2>
          <h1 className='text-3xl md:text-6xl font-bold tracking-tight text-white'>
            Nossa Stack
          </h1>
        </motion.div>

        {/* CARROSSEL DE LOGOS - Reduzi mb-24 md:mb-40 para mb-16 md:mb-24 */}
        <div className='relative mb-16 md:mb-24 py-4'>
          <div className='absolute inset-y-0 left-0 w-24 md:w-60 bg-gradient-to-r from-[#0B0B0D] to-transparent z-30 pointer-events-none'></div>
          <div className='absolute inset-y-0 right-0 w-24 md:w-60 bg-gradient-to-l from-[#0B0B0D] to-transparent z-30 pointer-events-none'></div>

          <div className='flex overflow-hidden'>
            <motion.div className='flex items-center gap-12 md:gap-24 whitespace-nowrap' animate={{ x: [0, -2000] }} transition={{ repeat: Infinity, duration: 30, ease: "linear" }}>
              {infiniteLogos.map((logo, i) => (
                <div key={i} className='flex items-center gap-5 flex-shrink-0 group'>
                  {/* Logos menores h-10 md:h-14 */}
                  <img
                    src={logo.src}
                    alt={logo.name}
                    style={{ animationDelay: logo.delay }}
                    className='h-10 md:h-14 w-auto transition-all max-md:animate-mobile-reveal md:grayscale md:opacity-30 md:group-hover:grayscale-0 md:group-hover:opacity-100'
                  />
                  {/* Nome menor text-xl md:text-4xl */}
                  <span className='text-xl md:text-4xl font-bold tracking-tighter uppercase opacity-20 md:group-hover:opacity-100 transition-all'>
                    {logo.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* ÁREA DE CARDS - Reduzi a largura máxima para max-w-5xl */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto'>
          {cards.map((card, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ scale: 1.01, y: -4 }}
              style={{ '--card-color': card.color, '--card-glow': `${card.color}22` }}
              // Reduzi padding p-10 md:p-14 para p-8 md:p-10
              className='relative bg-[#111113]/60 backdrop-blur-xl border border-[#1C1C1E] p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden group 
                         hover:border-white/10 transition-all duration-500 shadow-2xl'
            >
              <div className='absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shine pointer-events-none'></div>

              <div className='absolute top-0 left-0 w-full h-[1px] opacity-30 group-hover:opacity-100 transition-opacity'
                style={{ background: `linear-gradient(to right, transparent, ${card.color}, transparent)` }}></div>

              <span className='text-[10px] uppercase tracking-[0.4em] font-bold mb-3 block' style={{ color: card.color }}>
                {card.label}
              </span>
              {/* Título do card menor text-xl md:text-2xl */}
              <h3 className='text-xl md:text-2xl font-bold text-white mb-4 tracking-tight'>
                {card.title}
              </h3>
              {/* Texto menor text-base md:text-lg */}
              <p className='text-base md:text-lg text-[#D2D2D7] leading-relaxed font-light group-hover:text-[#F5F5F7] transition-colors'>
                {card.text}
              </p>

              <div className='absolute -bottom-10 -right-10 w-24 h-24 rounded-full blur-[50px] opacity-0 group-hover:opacity-10 transition-opacity'
                style={{ backgroundColor: card.color }}></div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Ferramentas