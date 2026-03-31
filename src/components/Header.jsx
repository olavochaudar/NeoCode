import React, { useState } from 'react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Mapeamento dos links para facilitar a manutenção
  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'Quem Somos', href: '#sobre' }, // Link para o Hero.jsx
    { name: 'Projetos', href: '#projetos' }, // Link para o Projetos.jsx
  ];

  return (
    // Reduzi a altura e mantive o estilo premium
    <section className='w-full sticky top-0 z-[100] bg-[#0B0B0D]/80 backdrop-blur-md border-b border-[#1C1C1E] font-["Poppins"] transition-all duration-500'>

      {/* Container: Altura reduzida de h-20 md:h-28 para h-16 md:h-20 */}
      <div className='max-w-7xl mx-auto flex items-center justify-between px-6 h-16 md:h-20'>

        {/* Logo - Reduzida de h-10 md:h-16 para h-8 md:h-11 */}
        <div className='z-[110]'>
          <a href="#home">
            <img
              src="LogoNeoCode.png"
              alt="Logo"
              className='h-8 md:h-11 w-auto object-contain hover:drop-shadow-[0_0_8px_rgba(10,132,255,0.3)] transition-all'
            />
          </a>
        </div>

        {/* Menu Desktop - Gaps reduzidos para gap-8 */}
        <nav className='hidden md:block'>
          <ul className='flex items-center gap-8'>
            {menuItems.map((item) => (
              <li key={item.name} className='relative group'>
                <a href={item.href} className='text-[#D2D2D7] group-hover:text-[#F5F5F7] text-sm font-medium transition-colors'>
                  {item.name}
                </a>
                <span className='absolute -bottom-1 left-0 w-0 h-[1px] bg-[#0A84FF] transition-all duration-300 group-hover:w-full opacity-70'></span>
              </li>
            ))}
            <li>
              <a href="#contato" className='bg-[#F5F5F7] text-[#0B0B0D] px-5 py-2 rounded-full text-sm font-semibold hover:bg-white hover:shadow-[0_0_15px_rgba(10,132,255,0.4)] transition-all active:scale-95'>
                Contato
              </a>
            </li>
          </ul>
        </nav>

        {/* Botão Hambúrguer */}
        <button onClick={() => setIsOpen(!isOpen)} className='md:hidden z-[110] text-[#F5F5F7] outline-none'>
          <div className='w-6 flex flex-col gap-1.5'>
            <span className={`h-0.5 w-full bg-current transform transition duration-300 ${isOpen ? 'rotate-45 translate-y-2 text-[#0A84FF]' : ''}`}></span>
            <span className={`h-0.5 w-full bg-current transition duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`h-0.5 w-full bg-current transform transition duration-300 ${isOpen ? '-rotate-45 -translate-y-2 text-[#0A84FF]' : ''}`}></span>
          </div>
        </button>

        {/* MENU MOBILE */}
        <div className={`
          fixed inset-0 w-full h-screen bg-[#0B0B0D]/98 backdrop-blur-2xl flex flex-col items-center justify-center transition-all duration-500 ease-in-out md:hidden
          ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}>
          <ul className='flex flex-col items-center gap-10'>
            {menuItems.map((item) => (
              <li key={item.name} className='flex flex-col items-center group'>
                <a
                  onClick={() => setIsOpen(false)}
                  href={item.href}
                  className='text-[#F5F5F7] text-2xl font-light tracking-widest active:text-[#0A84FF] transition-colors'
                >
                  {item.name}
                </a>
                <span className='w-1 h-1 bg-[#0A84FF] rounded-full mt-2 opacity-0 group-active:opacity-100 transition-opacity'></span>
              </li>
            ))}
            <li className='mt-4'>
              <a
                onClick={() => setIsOpen(false)}
                href="#contato"
                className='bg-[#F5F5F7] text-[#0B0B0D] px-12 py-3.5 rounded-full text-lg font-bold shadow-[0_10px_30px_rgba(0,0,0,0.5)] active:border-[#0A84FF] active:text-[#0A84FF] transition-all'
              >
                Contato
              </a>
            </li>
          </ul>

          <div className='absolute bottom-16 w-24 h-[1px] bg-gradient-to-r from-transparent via-[#0A84FF]/30 to-transparent'></div>
        </div>

      </div>
    </section>
  )
}

export default Header