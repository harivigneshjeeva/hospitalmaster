import React from 'react';

const Home = () => {
  return (
    <main>
      <section className="relative flex items-center justify-center text-center text-white bg-cover bg-center h-[560px]" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAeRIjrxIvjawSXpNXLV-jLaAzfkdTFSMMgiAZAkmg7FRUKrqvRm0y1muUGPMvIJILgz-VKl8DaZseEfaqofd9xN9c_PsH39L9JbtkXYXLuGfVZL7sreVw3_z0CQ70l5Autf7f8BaXrcubtegeUCkgr6Iet7izyC_KtQuAJ8xfLnpDxl7O8Fy6XTllBZwQMTcWcDZWYyOoKiBdb_2Z2G5xySw5XsfOqGCtacgzbiWhOST6u0DuMwy_TdLZFZFZc-1s_HszW2x5h8EEs')"}}>
        <div className="absolute inset-0 bg-slate-900/40"></div>
        <div className="relative z-10 flex flex-col items-center px-4">
          <h1 className="text-5xl md:text-6xl font-black leading-tight tracking-tight uppercase">
            THE BEST DOCTOR
          </h1>
          <p className="mt-4 max-w-2xl text-lg font-light leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut volutpat rutrum eros sit amet sollicitudin.
          </p>
          <button className="mt-8 flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-8 bg-primary text-white text-base font-bold tracking-wide hover:bg-primary/90 transition-colors">
            <span className="truncate">VIEW MORE</span>
          </button>
        </div>
      </section>

      <section className="flex flex-1 justify-center py-10 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-7xl">
          <div className="text-center mb-12">
            <p className="text-primary font-semibold">WHERE PEOPLE COME FIRST</p>
            <h2 className="text-slate-900 dark:text-slate-50 text-3xl md:text-4xl font-bold leading-tight tracking-tight mt-2">TRUST US</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-slate-900 dark:text-slate-100 font-bold mb-4">FOR YOUR HEALTH, WE PROVIDE BEST QUALITY</p>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut volutpat rutrum eros sit amet sollicitudin. Suspendisse pulvinar, velit nec pharetra interdum, ante tellus ornare mi, et mollis tellus neque vitae elit.
              </p>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Mauris sit amet quam congue, pulvinar urna et, congue diam. Suspendisse eu lorem massa. Integer sit amet posuere tellus, id efficitur leo. In hac habitasse platea dictumst.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img alt="Doctor smiling" className="rounded-lg shadow-md w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVR78ORudjDSLGau_YQXqaz3ev3XL4EMbohuDgKVf9V5FC611INb6J_7Yxq_COCXu9cBBmai6XBqIPhplIZYaLXd3RZfpgSrK4XUaKO2VEac9--vx6QLND2IiPk22_qE8GqAjHE_KKykalng1ZfE6JTd_SiRRiGFDDMiyREhZnkm3KlbhYawCvxUkmW9xQcjaByrCZ3Lm6kgstWez9lDxLzOmOgusoNZ26ECgFoxy4qxDxsvQUB_QUottuEroBcVK91puqHcL6Ox_q"/>
              <img alt="Medical professional at work" className="rounded-lg shadow-md w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDX6pBBSZxt-RTY-gAmmdO5p4QjfRSsks9QNq9TxRmMzknyXeBRdejwhSXxBujNkrxpckTH2JXRHVfZEOkOmHBnY-vW_MraYaC2836I6JCiHl5GQPFruxkEn7Op5D83Mqka4a9cG7Uvj3ko5rkmVqQZ6mxJxfWxen57n9BDQgGmvVaQPnj0rVg0UoPe91jRU7gm1yJUwWNPaNTecUPw5QHS-yGEjdYwVhyhpLFSzxv86N1XeIzZPBoLKcrzt8Avk-aJFMJt6atiLAiC"/>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-1 justify-center py-10 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-slate-900">
        <div className="w-full max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-slate-900 dark:text-slate-50 text-3xl md:text-4xl font-bold leading-tight tracking-tight">CHOOSE DEPARTMENT</h2>
            <p className="text-slate-600 dark:text-slate-400 mt-4 max-w-2xl mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut volutpat rutrum eros sit amet sollicitudin. Cum sociis Theme natoque.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
              <span className="material-symbols-outlined text-primary text-5xl mb-4">healing</span>
              <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">FAMILY HEALTH CARE</h3>
              <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut volutpat rutrum eros.</p>
            </div>
            <div className="text-center p-6 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
              <span className="material-symbols-outlined text-primary text-5xl mb-4">medical_services</span>
              <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">GYNAECOLOGICAL CLINIC</h3>
              <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut volutpat rutrum eros.</p>
            </div>
            <div className="text-center p-6 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
              <span className="material-symbols-outlined text-primary text-5xl mb-4">biotech</span>
              <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">MEDICAL LABORATORY</h3>
              <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut volutpat rutrum eros.</p>
            </div>
            <div className="text-center p-6 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
              <span className="material-symbols-outlined text-primary text-5xl mb-4">cardiology</span>
              <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">CARDIAC CLINIC</h3>
              <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut volutpat rutrum eros.</p>
            </div>
            <div className="text-center p-6 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
              <span className="material-symbols-outlined text-primary text-5xl mb-4">dentistry</span>
              <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">DENTAL SURGERY</h3>
              <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut volutpat rutrum eros.</p>
            </div>
            <div className="text-center p-6 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
              <span className="material-symbols-outlined text-primary text-5xl mb-4">ophthalmology</span>
              <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">REHABILITATION CENTER</h3>
              <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut volutpat rutrum eros.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
