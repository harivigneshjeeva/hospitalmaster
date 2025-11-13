import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-12 pb-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <img alt="Kumaran Medical Center Logo White" className="h-12 mb-4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZmkn3ghEIYKirRZqdFjaQRiZ2s-WfcHF5DtNZJlyQMAwlRPVxX8qvspvFGFi3renk47IbINoXNJ1G9zSaWdYFsCvG7ZYmXf1_cU86mlD6Md0xLeaQv-8GaOD2BY6rrmD8hungw-_iwvTVkxvg1YlEI_16vSczhmrLSy4kKLVcI6EJLxQiA-jcTIfdsS2whWBtbdKmlgFebXF9Gsf5P3FkGYvMFdp40k6W4hfECoN7B8jCwTdbxu3ShicFdSkVcS71QJ3z6PzuGG8p"/>
            <h3 className="font-bold text-lg mb-2">ABOUT US</h3>
            <p className="text-sm leading-relaxed">
              Kumaran Medical Center is a 200 bedded Multispecialty Hospital located in Sathy Main Road, Kurumbapalayam, providing 24x7 services started with a vision to bridge the unmet need in healthcare.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">RECENT POSTS</h3>
            <div className="space-y-4 text-sm">
              <div className="border-b border-white/20 pb-4">
                <a className="hover:underline" href="#">Reverse the Signs of Aging with Botox at Kumaran Medical Center</a>
                <p className="text-xs opacity-70 mt-1">November 7, 2025</p>
              </div>
              <div>
                <a className="hover:underline" href="#">உலக ஹார்ட் டே 2025(World Heart Day) – “ஒரு துடிப்பையும் தவறவிடாதீர்கள்”</a>
                <p className="text-xs opacity-70 mt-1">September 27, 2025</p>
              </div>
            </div>
          </div>
          <div className="hidden lg:block"></div>
          <div>
            <h3 className="font-bold text-lg mb-2">FOLLOW US</h3>
            <div className="flex space-x-3">
              <a className="w-8 h-8 rounded-full border border-white flex items-center justify-center social-icon transition-colors" href="#">
                <svg aria-hidden="true" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path clipRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" fillRule="evenodd"></path></svg>
              </a>
              <a className="w-8 h-8 rounded-full border border-white flex items-center justify-center social-icon transition-colors" href="#">
                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.012 3.584-.07 4.85c-.148 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.012-3.584.07-4.85C2.25 3.854 3.714 2.31 6.965 2.163 8.23.109 8.61.1 12 .1zm0 2.162c-3.24 0-3.582.012-4.849.07-2.28.104-3.486 1.15-3.59 3.59-.058 1.266-.07 1.606-.07 4.849s.012 3.583.07 4.849c.104 2.44 1.31 3.486 3.59 3.59 1.267.058 1.609.07 4.849.07s3.582-.012 4.849-.07c2.28-.104 3.486-1.15 3.59-3.59.058-1.266.07-1.606.07-4.849s-.012-3.583-.07-4.849c-.104-2.44-1.31-3.486-3.59-3.59C15.582 4.335 15.24 4.325 12 4.325z"></path><path d="M12 8.25c-2.071 0-3.75 1.679-3.75 3.75s1.679 3.75 3.75 3.75 3.75-1.679 3.75-3.75-1.679-3.75-3.75-3.75zm0 5.625c-1.036 0-1.875-.84-1.875-1.875s.84-1.875 1.875-1.875 1.875.84 1.875 1.875-.839 1.875-1.875 1.875zm4.875-5.812a1.125 1.125 0 11-2.25 0 1.125 1.125 0 012.25 0z"></path></svg>
              </a>
              <a className="w-8 h-8 rounded-full border border-white flex items-center justify-center social-icon transition-colors" href="#">
                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
              </a>
              <a className="w-8 h-8 rounded-full border border-white flex items-center justify-center social-icon transition-colors" href="#">
                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.039c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10-4.477-10-10-10zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm-2.5-8.5c0-.828.672-1.5 1.5-1.5h2c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5h-2c-.828 0-1.5-.672-1.5-1.5z"></path></svg>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/20 mt-8 pt-6 text-sm flex flex-col md:flex-row justify-between items-center">
          <p className="mb-2 md:mb-0">Developed & Maintained by Kho Social</p>
          <p>Kumaran Medical Center © All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
