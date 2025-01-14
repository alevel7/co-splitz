import React from 'react';
import LandingNav from './components/LandingNav';
import LandingHero from './components/LandingHero';
import LandingFeatures from './components/LandingFeatures';
import LandingTestimonials from './components/LandingTestimonials';
import LandingAbout from './components/LandingAbout';
import LandingFaq from './components/LandingFaq';
import LandingFooter from './components/LandingFooter';
import LandingNewsletter from './components/LandingNewsletter';

const Landing = () => {
  return (
    <div>
        <LandingNav />
        <LandingHero />
        <LandingFeatures />
        <LandingTestimonials />
        <LandingAbout/>
        <LandingFaq />
        <LandingNewsletter />
        <LandingFooter />
    </div>
  )
}

export default Landing
