import Head from "next/head";
import Image from "next/image";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";
import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import profilePic from "../../public/images/profile/developer-pic-2.jpg";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

export default function About() {
  return (
    <>
      <Head>
        <title>About | Atharva Kishor Kumbhar</title>
        <meta
          name="description"
          content="Learn about Atharva Kishor Kumbhar — DevSecOps Intern, Cloud Engineer, and Kubernetes practitioner."
        />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="!pt-16">
          <AnimatedText
            text="Passion Fuels Purpose!"
            className="mb-16 !text-8xl xl:!text-7xl lg:!text-6xl md:!text-5xl sm:!text-4xl sm:mb-8"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                About Me
              </h2>
              <p className="font-medium">
                I am Atharva Kishor Kumbhar, a DevSecOps Intern and Cloud &amp; DevOps Engineer based in Mumbai, India. I specialize in secure CI/CD pipeline development, cloud infrastructure automation, Kubernetes deployments, Docker containerization, and DevSecOps security integration.
              </p>
              <p className="my-4 font-medium">
                My experience includes building GitLab CI and Jenkins pipelines, automating infrastructure with Terraform and Bash, managing AWS and Google Cloud resources, and integrating security tools such as SonarQube, Trivy, Snyk, OWASP ZAP, Datree, Burp Suite, Fortify, HCL AppScan, and Checkmarx One.
              </p>
              <p className="font-medium">
                I have worked on cloud-native projects involving Spring Boot, Python microservices, Kubernetes, Helm, Nexus, AWS EKS, MongoDB, PostgreSQL, and observability tools such as Prometheus, Grafana, and AWS CloudWatch. What makes me stand out is my ability to combine DevOps speed with security discipline, ensuring that applications are not only delivered faster but also deployed with strong security controls.
              </p>
            </div>

            <div className="relative col-span-3 h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:border-light dark:bg-dark xl:col-span-4 md:order-1 md:col-span-8 flex items-center justify-center">
              <div className="absolute -right-3 top-0 -z-10 h-[103%] w-[102%] rounded-[2rem] rounded-br-3xl bg-dark dark:bg-light" />
              <div className="relative w-full h-auto rounded-2xl overflow-hidden border-2 border-solid border-primary shadow-lg bg-dark">
                <Image
                  src={profilePic}
                  alt="Atharva Kishor Kumbhar"
                  className="h-auto w-full object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                />
              </div>
            </div>

            <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={4} />+
                </span>
                <h2 className="mb-4 text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Certifications
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={3} />+
                </span>
                <h2 className="mb-4 text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Projects Completed
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={3} />+
                </span>
                <h2 className="mb-4 text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Internships
                </h2>
              </div>
            </div>
          </div>

          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
}
