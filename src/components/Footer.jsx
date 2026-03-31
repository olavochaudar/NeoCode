import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-[#0B0B0D] text-[#F5F5F7] font-["Poppins"] pt-20 pb-12 border-t border-[#1C1C1E] relative overflow-hidden'>

      {/* Detalhe de luz sutil no fundo para profundidade */}
      <div className='absolute top-0 right-0 w-[300px] h-[300px] bg-[#0A84FF] rounded-full blur-[180px] opacity-[0.03] pointer-events-none'></div>

      <div className='max-w-7xl mx-auto px-6 relative z-10'>

        {/* PARTE SUPERIOR: GRID DE CONTEÚDO */}
        <div className='grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-20'>

          {/* Coluna 1: Branding Sutil */}
          <div className='md:col-span-1 space-y-6'>
            <img
              src="LogoNeoCode.png"
              alt="Neo Code"
              className='h-8 w-auto brightness-110 opacity-90'
            />
            <p className='text-[#6E6E73] text-sm leading-relaxed max-w-xs'>
              Codificando o futuro, pixel por pixel. Criamos experiências digitais extraordinárias com precisão e inovação.
            </p>
          </div>

          {/* Coluna 2: Links Internos */}
          <div className='space-y-6'>
            <h4 className='text-xs font-semibold uppercase tracking-[0.2em] text-[#D2D2D7]'>Explorar</h4>
            <ul className='space-y-4 text-sm text-[#6E6E73]'>
              <li><a href="#home" className='hover:text-[#0A84FF] transition-colors duration-300'>Início</a></li>
              <li><a href="#sobre" className='hover:text-[#0A84FF] transition-colors duration-300'>Sobre Nós</a></li>
              <li><a href="#projetos" className='hover:text-[#0A84FF] transition-colors duration-300'>Portfólio</a></li>
              <li><a href="#contato" className='hover:text-[#0A84FF] transition-colors duration-300'>Contato</a></li>
            </ul>
          </div>

          {/* Coluna 3: Expertise */}
          <div className='space-y-6'>
            <h4 className='text-xs font-semibold uppercase tracking-[0.2em] text-[#D2D2D7]'>Expertise</h4>
            <ul className='space-y-4 text-sm text-[#6E6E73]'>
              <li><span className='cursor-default'>Web Design UI/UX</span></li>
              <li><span className='cursor-default'>Desenvolvimento Web</span></li>
              <li><span className='cursor-default'>Sistemas Cloud</span></li>
              <li><span className='cursor-default'>Design Criativo</span></li>
            </ul>
          </div>

          {/* Coluna 4: Redes Sociais */}
          <div className='space-y-6'>
            <h4 className='text-xs font-semibold uppercase tracking-[0.2em] text-[#D2D2D7]'>Social</h4>
            <ul className='space-y-4 text-sm text-[#6E6E73]'>
              <li><a href="https://instagram.com/neocode.oficial" target="_blank" className='hover:text-[#BF5AF2] transition-colors duration-300'>Instagram</a></li>
              <li><a href="https://wa.me/5515996599321" target="_blank" className='hover:text-[#30D158] transition-colors duration-300'>WhatsApp</a></li>
              <li><a href="#" className='hover:text-white transition-colors duration-300'>LinkedIn</a></li>
              <li><a href="#" className='hover:text-white transition-colors duration-300'>Twitter X</a></li>
            </ul>
          </div>

        </div>

        {/* PARTE INFERIOR: LEGAL E STATUS */}
        <div className='border-t border-[#1C1C1E] pt-10 flex flex-col md:flex-row justify-between items-center gap-6'>

          {/* Copyright e Links de Documentos */}
          <div className='flex flex-wrap justify-center items-center gap-4 md:gap-6 text-[10px] md:text-xs text-[#6E6E73] font-medium'>
            <span>© {currentYear} Neo Code. Todos os direitos reservados.</span>
            <span className='hidden md:block w-[1px] h-3 bg-[#1C1C1E]'></span>
            <a href="#" className='hover:text-[#F5F5F7] transition-colors'>Privacidade</a>
            <span className='hidden md:block w-[1px] h-3 bg-[#1C1C1E]'></span>
            <a href="#" className='hover:text-[#F5F5F7] transition-colors'>Termos de Serviço</a>
          </div>

          {/* Indicador de Status "Ativo" */}
          <div className='flex items-center gap-2.5 text-[10px] md:text-xs text-[#6E6E73] bg-[#111113] px-4 py-2 rounded-full border border-[#1C1C1E]'>
            <div className='w-1.5 h-1.5 bg-[#30D158] rounded-full animate-pulse shadow-[0_0_8px_#30D158]'></div>
            <span className='tracking-wider font-semibold uppercase opacity-80'>System Operational</span>
          </div>

        </div>

      </div>
    </footer>
  )
}

export default Footer