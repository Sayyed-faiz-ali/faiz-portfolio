import React from 'react';
import Root from '../../public/react.gif';
import Root1 from '../../public/fullstack.gif';
import Root2 from '../../public/responsive.gif';

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-28 bg-secondary/30">
    <div className="container mx-auto px-4 md:px-6 py-16">
      <div className="text-center mb-16">
        <p className="text-sm md:text-base uppercase tracking-wider mb-4 text-muted-foreground">
          Our Services
        </p>
        <h2 className="text-3xl md:text-4xl font-bold">What We Offer</h2>
      </div>
  
      <div className="grid grid-cols-1 hover:scale-95 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Responsive Service */}
        <div className="service-card hover:scale-100 bg-background rounded-lg p-6 shadow-lg">
          <div className="text-center mb-6">
            <div className="icon mb-4">
              <img src={Root2} alt="Responsive Design" className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-medium">Responsive Design</h3>
          </div>
          <p className="text-sm text-center">
            I specialize in creating websites that are not just visually stunning but also highly adaptable. My responsive designs ensure that your site looks and works perfectly on any device, providing an exceptional user experience regardless of screen size.
          </p>
        </div>
  
        {/* Frontend Service */}
        <div className="service-card bg-background rounded-lg p-6 shadow-lg">
          <div className="text-center mb-6">
            <div className="icon mb-4">
              <img src={Root} alt="Frontend Development" className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-medium">Frontend Development</h3>
          </div>
          <p className="text-sm text-center">
            We build user-friendly and responsive front-end interfaces using modern frameworks like React, Vue, and Angular.
          </p>
        </div>
  
        {/* Backend Service */}
        <div className="service-card bg-background rounded-lg p-6 shadow-lg">
          <div className="text-center mb-6">
            <div className="icon mb-4">
              <img src={Root1} alt="Backend Development" className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-medium">Backend Development</h3>
          </div>
          <p className="text-sm text-center">
            We build powerful backend systems with technologies like Node.js, Python, Ruby on Rails, and more.
          </p>
        </div>
      </div>
    </div>
  </section>
  
  );
};

export default Services;
