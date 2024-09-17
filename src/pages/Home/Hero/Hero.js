import styles from "./Hero.module.css";
import Section from "../../../components/Section/Section";
import Container from "../../../components/Container/Container";
import PrimaryButton from "../../../components/Buttons/PrimaryButton";

export default function Hero() {
  return (
    <Section className={styles.section}>
      <Container>
        <div className="col-12 col-lg-6">
          <h1>Seamless IT for your business, boosting your growth.</h1>
          <p className={styles.text}>
            We provide the expertise and support to propel your business forward
            in the digital landscape.
          </p>
          <PrimaryButton>Learn More</PrimaryButton>
        </div>
        <div className="col-12 col-lg-6"></div>
      </Container>
    </Section>
  );
}
