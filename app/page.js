import About from "./components/About";
// import Card from "./components/Card";
import CardSection from "./components/CardSection";
import ContactPage from "./components/Contact";
import DraftForm from "./components/Contact";
import Faqs from "./components/Faqs";
import HomePage from "./components/Hello";
import Section_1 from "./components/Section_1";
import Section_2 from "./components/Section_2";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <>
      <div>
        <section id="home">
          <HomePage />
        </section>
       
        <Section_1 id="section_1"/>
        <Section_2 id="section_2"/>
          <section id="services">
        <Services />
        </section>
        
        <CardSection/>
        <section id="about">
          <About/>
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>
        <section id="faqs">
          <Faqs />
        </section>
        <section>
          <ContactPage/>
        </section>
       
      </div>
    </>
  );
}
