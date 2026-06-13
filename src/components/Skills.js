import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y, url }) => {
  // Use name length for deterministic unique floating animations per pill
  const floatDuration = 3 + (name.length % 4); 
  const floatY = 4 + (name.length % 6);

  return (
    <motion.div
      className="absolute flex items-center justify-center z-10"
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5, type: "spring", stiffness: 40 }}
      viewport={{ once: true }}
    >
      <motion.a
        href={url || `https://www.google.com/search?q=${encodeURIComponent(name + ' technology')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-[0_0_15px_rgba(0,0,0,0.3)] hover:shadow-[0_0_30px_rgba(0,0,0,0.7)] dark:text-dark dark:bg-light dark:shadow-[0_0_15px_rgba(255,255,255,0.4)] hover:dark:shadow-[0_0_30px_rgba(255,255,255,0.9)] border border-solid border-transparent hover:border-light dark:hover:border-dark cursor-pointer lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold xs:shadow-none xs:dark:shadow-none"
        whileHover={{ scale: 1.15 }}
        animate={{ y: [-floatY, floatY, -floatY] }}
        transition={{ duration: floatDuration, repeat: Infinity, ease: "easeInOut" }}
      >
        {name}
      </motion.a>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32">
        Skills
      </h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-circularLightSm sm:dark:bg-circularDarkSm lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]">
        <motion.a
          href="https://www.google.com/search?q=DevSecOps"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center rounded-full font-bold text-xl bg-dark text-light p-8 shadow-dark cursor-pointer dark:text-dark dark:bg-light lg:p-6 md:p-4 xs:text-xs xs:p-2 z-20 border-2 border-solid border-primary dark:border-primaryDark"
          whileHover={{ scale: 1.1 }}
          animate={{
            boxShadow: [
              "0px 0px 20px rgba(212,175,55,0.3)",
              "0px 0px 70px rgba(212,175,55,1)",
              "0px 0px 20px rgba(212,175,55,0.3)"
            ]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          DevSecOps
        </motion.a>

        <Skill name="Docker" x="-20vw" y="2vw" url="https://www.docker.com/" />
        <Skill name="Kubernetes" x="-5vw" y="-10vw" url="https://kubernetes.io/" />
        <Skill name="Terraform" x="20vw" y="6vw" url="https://www.terraform.io/" />
        <Skill name="AWS" x="0vw" y="12vw" url="https://aws.amazon.com/" />
        <Skill name="GCP" x="-20vw" y="-15vw" url="https://cloud.google.com/" />
        <Skill name="Jenkins" x="15vw" y="-12vw" url="https://www.jenkins.io/" />
        <Skill name="GitLab CI" x="32vw" y="-5vw" url="https://about.gitlab.com/stages-devops-lifecycle/continuous-integration/" />
        <Skill name="SonarQube" x="0vw" y="-20vw" url="https://www.sonarsource.com/products/sonarqube/" />
        <Skill name="Trivy" x="-25vw" y="18vw" url="https://trivy.dev/" />
        <Skill name="Snyk" x="18vw" y="18vw" url="https://snyk.io/" />
        <Skill name="Python" x="-35vw" y="-5vw" url="https://www.python.org/" />
        <Skill name="Java" x="28vw" y="14vw" url="https://dev.java/" />
        <Skill name="Helm" x="-12vw" y="10vw" url="https://helm.sh/" />
        <Skill name="Git" x="10vw" y="-5vw" url="https://git-scm.com/" />
        <Skill name="Prometheus" x="-10vw" y="-22vw" url="https://prometheus.io/" />
        <Skill name="Grafana" x="22vw" y="-18vw" url="https://grafana.com/" />
        <Skill name="OWASP ZAP" x="-32vw" y="8vw" url="https://www.zaproxy.org/" />
        <Skill name="Bash" x="35vw" y="2vw" url="https://www.gnu.org/software/bash/" />
      </div>
    </>
  );
};

export default Skills;
