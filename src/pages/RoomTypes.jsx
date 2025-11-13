import React from 'react';

const RoomTypes = () => {
  return (
    <main>
      <section className="bg-gray-50 dark:bg-gray-800 py-8">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl font-bold text-primary uppercase">Room Types</h1>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-xl font-bold text-primary uppercase tracking-wider mb-12">Our Different Types of Rooms for Patients at Kumaran Medical Center</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="text-center">
              <img alt="General Ward" className="w-full h-auto object-cover mb-6 rounded-lg shadow-md" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7RRaMcvjJodFwA5HAMdExSaCNndnLws4aJJ8iMSt481MTD4Oc_u67HXkxcQ25AISCN0JWR8LslhDsLli9AWdzcFgBFMaLMwQOm_jfZBlHio5xlN7dNZ1GnbfLG5v6FqH0hTRaCQTfwPc0WsqKvRAnGEHpWNMAeomSHv7ALKqRNBVlmkd19MAaJmaMKgOUFDye4F21CL_-8GRr8vLpMBynOxkTF6TmVNHdQQXcrINYdK0BsF8o24H7rAs3Z8vQG9E5Mp9LhdUPRJWw"/>
              <h3 className="text-lg font-bold text-primary mb-3">GENERAL WARD</h3>
              <p className="text-sm leading-relaxed text-subtext-light dark:text-subtext-dark px-4">The General Ward room has 10-12 beds which is individually parted by the screens and the space is provided with patient bed along with the attenders bed, cupboard and a foot stool.</p>
            </div>
            <div className="text-center">
              <img alt="Single Room Non A/C" className="w-full h-auto object-cover mb-6 rounded-lg shadow-md" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCr0O5ftWTpFoxq0CNr74g5DB7mYkCdNKGF4fWE7zcyDGF6XwKAI5peN-3v4KfzYU8CMcQ7D9CUiqe0KTtVm2-P1qQ4eTI35HfFyurnMsVMeDlslJM_FevtEgahPSrv3nPN6Asf6CB84SOZSKRUteEemkUtzg6hPOALdWDj2WnXdHc94f16MEOJACqRmPcwHIaWFGereiApNhRyr6EKuDfrsRoc186zMlrU2oGlQPkjWAyKVUujbduRjeG72eh_rd9VrEfLnlGJpSm-"/>
              <h3 className="text-lg font-bold text-primary mb-3">SINGLE ROOM NON A/C</h3>
              <p className="text-sm leading-relaxed text-subtext-light dark:text-subtext-dark px-4">Each single room is a individual room that accommodates one patient along with the patient adjustable bed, attender bed, LED television, wifi, intercom, cupboard and a foot stool.</p>
            </div>
            <div className="text-center">
              <img alt="Single Room A/C" className="w-full h-auto object-cover mb-6 rounded-lg shadow-md" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAj0ookBvWSo9xOC0CBO0x9Yw5WLxYxrB5cLrLc0Rb3iRqVqfhdADZf7chEq_6foEIrQEOqFmt-9itsNbVf1R7lURz2he9FJNLch5BRzl0C_aHr45aQvzturS7MHn3z0qn-lC8-rT3sGTvFZzNu1W5GbUiiOEJHlLonLgJBplBhuKChNuOw7tZ7RMhHLDgz4nL-xXyuOhtYu23tWl3ko6cauxvHXIh46ihC-NoOk9oOUxf70iTR3P3AOHRnLI72sJ7_7niVB4KCHCgG"/>
              <h3 className="text-lg font-bold text-primary mb-3">SINGLE ROOM A/C</h3>
              <p className="text-sm leading-relaxed text-subtext-light dark:text-subtext-dark px-4">Each room is individually air-conditioned that accommodates one patient along with patient adjustable bed, attender bed, LED television, kettle, wifi, intercom, cupboard and a foot stool.</p>
            </div>
            {/* Add more room types as needed */}
          </div>
        </div>
      </section>
    </main>
  );
};

export default RoomTypes;
