import React from 'react';

const DoctorProfile = () => {
  return (
    <main>
      <section className="bg-surface-light dark:bg-surface-dark py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block relative mb-6">
            <img alt="Portrait of Dr. S. Gurusanthiya" className="w-48 h-48 rounded-full object-cover border-4 border-white dark:border-gray-300 shadow-xl" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAqeXg1zOtDk-4sZEldMeo3_7HOT-t2WYLgfqzzz4HR7osXoAmEhaaVLmW67H8r01OlZXyWbmsYhZm5zB737Q_h0Ck9vTQov3oay3Ox3dgVUrhwTSoeaTkalITuXlNFtaYHoVFhwOjfqxadLipqnDFMUC8EjLCl8jK3SeYGWdGwHiBLxMeWdWzYPI75k2Uov-nkPhUnsRzRc13JVhSPuIb4THBlyYFsrXcitUNFfPN_lN-iRc-iYbNdPo0jrPxi1nCAs5_iFwcc11n"/>
          </div>
          <h1 className="text-3xl font-bold text-primary tracking-wide">DR. S. GURUSANTHIYA MBBS,MD,EDAIC</h1>
          <p className="text-lg text-subtle-light dark:text-subtle-dark mt-2 tracking-widest">ANAESTHESIOLOGY</p>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-12">
            <div>
              <h2 className="text-xl font-bold text-primary mb-4">ACADEMIC EXCELLENCE:</h2>
              <ul className="list-disc list-inside space-y-3 text-text-light dark:text-text-dark">
                <li>Did under graduation – MBBS – From Madurai Medical College.</li>
                <li>Did postgraduation –MD – From Madurai Medical College.</li>
                <li>European Diploma in Anesthesiology and Intensive care</li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-bold text-primary mb-4">EXPERIENCE:</h2>
              <ul className="list-disc list-inside space-y-3 text-text-light dark:text-text-dark">
                <li>3 Years – Worked as a Senior Resident in the department of anaesthesiology at Sri Ramakrishna Hospital, Coimbatore.</li>
                <li>Worked as a senior resident for 5 months at Amrita institute of medical sciences.</li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-bold text-primary mb-4">SPECIAL AREAS OF INTEREST</h2>
              <ul className="list-disc list-inside space-y-3 text-text-light dark:text-text-dark">
                <li>Cardiac Anaesthesia.</li>
                <li>Anesthesia for hepatobiliary surgery.</li>
                <li>Pediatric Anaesthesia.</li>
                <li>Obstetric Anaesthesia.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DoctorProfile;
