import React from 'react';

const Doctors = () => {
  return (
    <main>
      <div className="bg-gray-100 dark:bg-gray-800 py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold text-primary uppercase">Doctors</h1>
        </div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="space-y-12">
          {/* Doctor 1 */}
          <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-8">
            <div className="grid grid-cols-2 gap-4">
              <img alt="Doctor G. Praveen Kumar" className="w-full h-auto object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAj6RxNgvPKy9hEJpgtG62eDeOxeDYJ0U99x21fgo5JXG7xLwEoi2akSfdKamhErGUM6Gfjco7sz3xeXTkZb5F_7oOtjS_aVOmJOTaobyfjwtgPXKjGjGK6L_Cnrhr0JOzmbCfEsv5US4xWitBBT-bYu3YWHBbDgkCNHI5iGqNIucemF8emi2FXroBdPmUkrYZsJYLI2IIt-a8sbpwnH16Xf5Pn7oOCExJGrhMw4bro1TnY-cJMytEv7hBWP2-DCrbqlvCeG59Py498"/>
              <img alt="Doctor S. Gurusanthiya" className="w-full h-auto object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAti2GWHpDU-2wwyJiYCZorquVBiaXrY_YbTZWbtQ4Oc3uSYnwikjjIPzuBs450yMfa3nLwgaYIEO5cQAXV5sc11_iN1cIgWhu62e1dbO6FilwijLJxSsFHAPFwimEbwqEcH1APJpzlUHrFmq6rrlV0L3Ks5D5rtmAbFYELw4kUqp1aVJ4AUMxk77KCvjZ6UKAMrddJnaseSu6c11j1WvDz7nC8JS7uu5vmivneBPRiDWGNjt83oTd-aGGuqURflM7PuM8JwPOBDV9M"/>
            </div>
            <div className="md:col-span-2 md:pl-8">
              <h2 className="text-lg font-semibold text-primary">Dr. S. Gurusanthiya MBBS,MD,EDAIC</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider">ANAESTHESIOLOGY</p>
            </div>
          </div>
          {/* Doctor 2 */}
          <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-8">
            <div className="grid grid-cols-2 gap-4">
              <img alt="Doctor G. Praveen Kumar" className="w-full h-auto object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsVh1Ni5jfVvIdUZNI_8kFmI6ZMlovmAhobTuhIEOB8xXc1qpk4se9TDLBV1TeQwUFO-DnEClR3dd5QcTNF80A83iRBklUrRj7EmD_aj-GiRjqDZ7xQEzDGbls0ku6ELEIKs400PGD4Uqor5wr_IkrtpqFFJX874CU7c2Al1J6wUJkZtb1bLX3tYy7bUXl7BCfbO4hj-M4SjW1v0yARDTG_1amd4zuT0EjTiQsQaIWQ_3mxj7MpzwwtMBJ49xKXbSVmItTekGfWpzh"/>
              <img alt="Doctor K. Karthik" className="w-full h-auto object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOWjqsdl9yAI0y2dbYRs3fY1Ko2WusPUa1QVpp3VG1aPbpaQwWnOAI4vcdY8x-y92mEYT_cJj8PcFi33FsYT_wxVJlT5XSsne_JZUm85pYmWLEkwR7w2tla2uqGKxKdeKq_ZkcGOgC8tSJxZXzfbs35mi9Gv57TY1Cs8To9mrLdAwuzAMsSlalKg1iDfO53IQztGxcGSLm4dyEo0scqVUwYnvpLq6h_xvPQGrNI4TKqxzKLFAoT_jb1hR7fQRYyb0Ho9242vSA5Qy4"/>
            </div>
            <div className="md:col-span-2 md:pl-8">
              <h2 className="text-lg font-semibold text-primary">Dr. K. Karthik MD., DNB</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider">CARDIOLOGY</p>
            </div>
          </div>
          {/* Add more doctors as needed */}
        </div>
      </div>
    </main>
  );
};

export default Doctors;
