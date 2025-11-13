import React from 'react';

const AboutUs = () => {
  return (
    <main>
      <section className="bg-surface-light dark:bg-surface-dark py-20 text-center hero-bg">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-primary mb-2">ABOUT US</h1>
          <p className="text-sm text-text-light dark:text-text-dark">
            <a className="hover:text-primary" href="#">KUMARAN MEDICAL CENTER</a> &gt; ABOUT US
          </p>
        </div>
      </section>

      <section className="py-24 bg-background-light dark:bg-background-dark">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img alt="Group of doctors" className="w-full rounded-lg shadow-lg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8jaPa5ybHoTzTULS4X323qYiTIXqgTYgP18_LHsrNeLFJmX0HdgvHzgwL3tA-Cr6Fq6LWM5UWrjTzmI3JsgIO45mRnTkJewMAqZL0LjXAfpsmRqzm8M7oe6iApO23X7KEW_1rhnR2jt-d-qyVW1--tTrz-Rg6FwGUnnZwyniy7pXj24em-ECrh9H3GTugq0X7hXNKOzmiS_BwSTUcMoSZfWdlFsp0DjvWGjAUWl-V2wu21nmbTJeCXeRkVDifXxZV-AIyqht51v8M"/>
              <button className="absolute inset-0 flex items-center justify-center">
                <span className="material-symbols-outlined text-6xl text-white bg-black bg-opacity-30 rounded-full p-4">play_circle</span>
              </button>
            </div>
            <div>
              <div className="border-b border-border-light dark:border-border-dark py-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <div className="icon-bg-circle bg-primary/10 dark:bg-primary/20">
                      <span className="material-symbols-outlined text-primary">tips_and_updates</span>
                    </div>
                    <h3 className="font-semibold text-heading-light dark:text-heading-dark">HOW TO LOSE WEIGHT?</h3>
                  </div>
                  <span className="material-symbols-outlined text-text-light dark:text-text-dark">remove</span>
                </div>
                <p className="mt-4 text-sm leading-6">
                  Lorem ipsum proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem.
                </p>
                <a className="flex items-center gap-2 text-primary font-semibold text-sm mt-4" href="#">
                  <span className="material-symbols-outlined">arrow_forward</span>
                  LEARN MORE
                </a>
              </div>
              <div className="border-b border-border-light dark:border-border-dark py-4 flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <div className="icon-bg-circle bg-gray-100 dark:bg-gray-700">
                    <span className="material-symbols-outlined text-text-light dark:text-text-dark">restaurant_menu</span>
                  </div>
                  <h3 className="font-semibold text-heading-light dark:text-heading-dark">HEALTHY EATING PLAN</h3>
                </div>
                <span className="material-symbols-outlined text-text-light dark:text-text-dark">add</span>
              </div>
              <div className="border-b border-border-light dark:border-border-dark py-4 flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <div className="icon-bg-circle bg-gray-100 dark:bg-gray-700">
                    <span className="material-symbols-outlined text-text-light dark:text-text-dark">fitness_center</span>
                  </div>
                  <h3 className="font-semibold text-heading-light dark:text-heading-dark">WHEN IS THE BEST TIME TO EXCERCISE?</h3>
                </div>
                <span className="material-symbols-outlined text-text-light dark:text-text-dark">add</span>
              </div>
              <div className="py-4 flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <div className="icon-bg-circle bg-gray-100 dark:bg-gray-700">
                    <span className="material-symbols-outlined text-text-light dark:text-text-dark">medication</span>
                  </div>
                  <h3 className="font-semibold text-heading-light dark:text-heading-dark">VITAMINS AND SUPPLEMENTS</h3>
                </div>
                <span className="material-symbols-outlined text-text-light dark:text-text-dark">add</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-footer-bg-light text-white choose-confidently-bg">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">CHOOSE CONFIDENTLY</h2>
              <p className="mb-6 leading-7">
                Lorem ipsum dolor sit amet, consectetuer. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum.
              </p>
              <img alt="Signature" className="h-16" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZLrh2tzNDpmIhM33Ohw9u6zfrxDXlYLNgjGBBBCYSx7OF6Qm7SnZz4q2E-3t0ccl4PeP8xNAiBO-1VPZ5-aPFsxP4OxDc_iBn0cZap0LWRGDGDCmmf31u47ZZ5K98uZIa_Amrl1r7TcxywocsbUvUZqC2yfsTzRy4gjprc-vUdNe3Ag_VdmlOLHFBBFBtc7iFdA6T8idqsF9KrROHG4C-UDygF7Wie_QBw3BQefwnsXL1i0w_1e745AscqVfNnLVcbq3CzuSOeNkt"/>
            </div>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-1 text-sm font-semibold">
                  <span>Oncology</span>
                  <span>65%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{width: '65%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1 text-sm font-semibold">
                  <span>Gynecology</span>
                  <span>90%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{width: '90%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1 text-sm font-semibold">
                  <span>Rehabilitation</span>
                  <span>77%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{width: '77%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1 text-sm font-semibold">
                  <span>User Experience</span>
                  <span>85%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{width: '85%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
