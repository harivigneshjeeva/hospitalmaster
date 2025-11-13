import React, { useEffect } from 'react';

const DepartmentDetails = () => {
  useEffect(() => {
    const tabs = document.querySelectorAll('.tab-item');
    const tabContents = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const targetId = tab.dataset.target;
        const targetContent = document.getElementById(targetId);
        // Deactivate all tabs and hide all content
        tabs.forEach(t => t.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));
        // Activate the clicked tab and show its content
        tab.classList.add('active');
        targetContent.classList.add('active');
      });
    });
  }, []);

  return (
    <main>
      <section className="bg-surface-light dark:bg-surface-dark py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-primary tracking-wider">CARDIOLOGY</h1>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-4 text-subtext-light dark:text-subtext-dark leading-relaxed">
            <p>Our cardiology department is equipped with state-of-the-art modern equipment necessary to provide holistic cardiac care from emphasizing the preventive aspects to the at-risk population and preventing the occurrence of cardiac illness to providing 24 hours emergency cardiac care to critically ill cardiac patients.</p>
            <p>We do have a daycare coronary unit for performing elective coronary angiograms. We have 24 hours availability of interventional cardiologists for performing timely interventions through primary angioplasties. We also have a state-of-the-art intensive coronary care unit run by highly trained interventional cardiologists, dedicated intensivists, and a motivated team of staff nurses.</p>
            <p>In our Echo &amp; Non-Invasive Cardiology Unit, we perform various non-invasive cardiac tests including various types of echocardiograms, stress testing, and others mentioned below.</p>
          </div>
        </div>
      </section>
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold mb-6 text-text-light dark:text-text-dark">Procedures Undertaken</h2>
            <div className="flex flex-col md:flex-row border border-primary">
              <div className="flex-shrink-0 w-full md:w-1/3">
                <ul className="flex flex-col" id="procedure-tabs">
                  <li><button className="tab-item w-full text-left p-4 font-semibold text-sm active" data-target="interventional-cardiology">INTERVENTIONAL CARDIOLOGY UNIT</button></li>
                  <li><button className="tab-item w-full text-left p-4 font-semibold text-sm" data-target="echo-non-invasive">ECHO & NON-INVASIVE CARDIOLOGY UNIT</button></li>
                  <li><button className="tab-item w-full text-left p-4 font-semibold text-sm" data-target="preventive-cardiology">PREVENTIVE CARDIOLOGY UNIT</button></li>
                  <li><button className="tab-item w-full text-left p-4 font-semibold text-sm" data-target="intensive-cardiac-care">INTENSIVE CARDIAC CARE UNIT</button></li>
                  <li><button className="tab-item w-full text-left p-4 font-semibold text-sm" data-target="cardiac-intervention">CARDIAC INTERVENTION</button></li>
                  <li><button className="tab-item w-full text-left p-4 font-semibold text-sm" data-target="vascular-intervention">VASCULAR INTERVENTION</button></li>
                </ul>
              </div>
              <div className="w-full md:w-2/3 p-6 md:p-8">
                <div className="tab-content active" id="interventional-cardiology">
                  <ul className="space-y-3 list-disc pl-5 text-subtext-light dark:text-subtext-dark">
                    <li>Angiography (Coronary and Peripheral)</li>
                    <li>Coronary Angioplasty(PTCA) & Stenting (Primary & Elective)</li>
                    <li>Coronary Interventional Procedures with IVUS, OCT, FFR Guidance</li>
                    <li>Rotational Atherectomy</li>
                    <li>Carotid, Renal, and Peripheral Vessel Angioplasty & Stenting</li>
                    <li>Complex Angioplasties (Coronary and Peripheral)</li>
                    <li>Valvuloplasties like Balloon Mitral Valvotomy</li>
                    <li>Closure of Congenital Heart Defects (ASD, VSD, PDA)</li>
                    <li>Pacemaker Implantation - Single & Dual Chamber</li>
                    <li>CRT/AICD/COMBO Device Implantation</li>
                    <li>Pericardiocentesis</li>
                    <li>Left and Right Heart Cath Study</li>
                    <li>IVC Filter Placement</li>
                    <li>Cerebral Angiogram</li>
                  </ul>
                </div>
                <div className="tab-content" id="echo-non-invasive">
                  <ul className="space-y-3 list-disc pl-5 text-subtext-light dark:text-subtext-dark">
                    <li>Echocardiography (2D and 3D)</li>
                    <li>Stress Echocardiography</li>
                    <li>Holter Monitoring</li>
                    <li>Treadmill Test (TMT)</li>
                  </ul>
                </div>
                <div className="tab-content" id="preventive-cardiology">
                  <ul className="space-y-3 list-disc pl-5 text-subtext-light dark:text-subtext-dark">
                    <li>Cardiac Risk Assessment</li>
                    <li>Lifestyle Counseling</li>
                    <li>Dietary Management</li>
                    <li>Lipid Management Clinic</li>
                  </ul>
                </div>
                <div className="tab-content" id="intensive-cardiac-care">
                  <ul className="space-y-3 list-disc pl-5 text-subtext-light dark:text-subtext-dark">
                    <li>24/7 Monitoring</li>
                    <li>Post-operative Cardiac Care</li>
                    <li>Management of Acute Coronary Syndromes</li>
                    <li>Ventilator Support</li>
                  </ul>
                </div>
                <div className="tab-content" id="cardiac-intervention">
                  <ul className="space-y-3 list-disc pl-5 text-subtext-light dark:text-subtext-dark">
                    <li>Coronary Artery Bypass Grafting (CABG)</li>
                    <li>Valve Repair and Replacement</li>
                    <li>Aortic Surgery</li>
                  </ul>
                </div>
                <div className="tab-content" id="vascular-intervention">
                  <ul className="space-y-3 list-disc pl-5 text-subtext-light dark:text-subtext-dark">
                    <li>Peripheral Artery Disease (PAD) Intervention</li>
                    <li>Aneurysm Repair</li>
                    <li>Varicose Vein Treatment</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DepartmentDetails;
