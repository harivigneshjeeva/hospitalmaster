import React from 'react';

const Facilities = () => {
  return (
    <main>
      <section className="bg-section-bg-light dark:bg-section-bg-dark py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-700 dark:text-gray-200">FACILITIES</h1>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold text-primary">THE FACILITIES AT KUMARAN MEDICAL CENTER</h2>
          </div>
          <div className="space-y-20">
            {/* Facility 1 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="md:order-2">
                <h3 className="text-xl font-semibold text-primary mb-4">DIGITAL X-RAY</h3>
                <div className="space-y-4 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  <p>In our hospitals, we use Digital Radiography systems. It is a top-notch digital image processing technology that uses x-ray-sensitive plates to directly capture data during the patient examination which is transferred immediately to a computer. Digital x-rays can be used to diagnose problems with bones, teeth, or any other organ.</p>
                  <p className="font-bold text-text-light dark:text-text-dark">Most common issues an x-ray might diagnose include:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Tumors</li>
                    <li>Digestive issues</li>
                    <li>Arthritis</li>
                    <li>Pulmonary (lung) problems</li>
                    <li>Enlarged heart</li>
                    <li>Various forms of cancer, including bone cancer</li>
                    <li>Blocked blood vessels</li>
                    <li>Osteoporosis</li>
                    <li>Fractures</li>
                    <li>Infections</li>
                  </ul>
                  <p className="font-bold text-text-light dark:text-text-dark">Benefits</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Clearer images</li>
                    <li>Sharper at any size</li>
                    <li>Exposes patient to only a fraction of the usual radiation</li>
                  </ul>
                </div>
              </div>
              <div className="md:order-1">
                <img alt="Digital X-Ray machine in a hospital room" className="w-full h-auto rounded-lg shadow-md" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzHmEb269aJaR4JmZ4dTJ7-N3aEQwEegBeBtb_v4uX08m800tvhSsgXhf3471rKNLMJIuwz0d95-nUsl12r_YRUk-FHennSfMaVAPu6W5YxvIgasUVgHpoPFuKTS3xgpmm4Le6hc9IwtZdcW0yF9ZETPyTEBx2BqJ7gEoBfgYx94isITSp7nLkgDdfiGkFzJaTbsN-F-CjE2NvWi5-zV7xl4mOhn6lqIX2PTmARSE5tUjIoZYX2c-YVghexUOWpRjIHqrx-jY_IxEk"/>
              </div>
            </div>
            {/* Add more facilities as needed */}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Facilities;
