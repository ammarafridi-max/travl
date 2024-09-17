import styles from "./Services.module.css";
import Section from "../../../components/Section/Section";
import Container from "../../../components/Container/Container";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

export default function Services() {
  return (
    <Section className={styles.section}>
      <Container>
        <SectionTitle text="We offer a comprehensive range of services designed specifically for travel agencies, tour operators, DMCs, vacation rentals, and hotels. Our expertise spans across Web and Mobile Development, Digital Marketing, SEO, and IT Support.">
          Our Services
        </SectionTitle>
        <div className={styles.servicesList}>
          <ServiceCard
            img="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/service-icon-1-2.svg"
            title="Development"
            text="Our development is pixel perfect in all ways."
          />
          <ServiceCard
            img="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/service-icon-2-2.svg"
            title="eCommerce"
            text="We have a best team for your shopping websites."
          />
          <ServiceCard
            img="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/service-icon-3-2.svg"
            title="CRM"
            text="We enhance customer experiences for success."
          />
          <ServiceCard
            img="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/service-icon-4-2.svg"
            title="Web Design"
            text="We create vibrant, intuitive and minimalist web."
          />
          <ServiceCard
            img="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/service-icon-5-2.svg"
            title="IT Support"
            text="We offers expert assistance for your IT issues."
          />
        </div>
      </Container>
    </Section>
  );
}

function ServiceCard({ img, title, text }) {
  return (
    <div className={styles.serviceCard}>
      <img decoding="async" src={img} className={styles.serviceIcon} />
      <h3>
        <a href="https://wpriverthemes.com/synck/service-details/">{title}</a>
      </h3>
      <p>{text}</p>
    </div>
  );
}
