import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, workItems }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className="my-16 first:mt-0 last:mb-0 w-[70%] mx-auto flex flex-col justify-between md:w-[80%] md:mx-0 md:ml-16 sm:w-[90%] sm:ml-14 xs:ml-10"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <ul className="font-medium w-full md:text-sm list-disc ml-6 mt-4 space-y-3 text-dark/80 dark:text-light/80 leading-relaxed">
          {workItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="DevSecOps Intern"
            company="Talakunchi Networks Pvt. Ltd."
            companyLink="#"
            time="Jan 2026 – Present"
            address="India"
            workItems={[
              "Built secure GitLab CI pipelines with automated SAST, SCA, SBOM generation, and build validation, reducing manual security checks by 40%.",
              "Hardened Dockerfiles for AI-integrated applications using minimal base images, non-root users, dependency control, and OWASP Docker practices, reducing container misconfigurations by 30%.",
              "Researched LLMSecOps workflows and defined security control points for AI/LLM pipelines, including secure input handling, artifact integrity validation, and secure deployment.",
              "Received cross-domain training in Penetration Testing and Secure Code Review (SCR), covering application security testing, vulnerability identification, OWASP-based review, and remediation validation."
            ]}
          />
          <Details
            position="GCP Cloud Engineer Intern"
            company="DC Info Tech Pvt Ltd"
            companyLink="#"
            time="May 2025 – Aug 2025"
            address="India"
            workItems={[
              "Created and managed GCP infrastructure including Compute Engine, Cloud Storage, IAM, firewall rules, and environment-specific resources.",
              "Automated cloud resource provisioning using Terraform and Bash scripting to create repeatable development, testing, and deployment environments, reducing manual provisioning effort by 30%.",
              "Configured Cloud Build, Compute Engine, and Cloud Storage for application deployment workflows, improving deployment consistency and reducing environment setup time by 35%."
            ]}
          />
          <Details
            position="Cloud & DevOps Intern"
            company="Compozent Technologies"
            companyLink="#"
            time="Dec 2024 – Jan 2025"
            address="India"
            workItems={[
              "Built CI/CD pipelines using Jenkins to automate source code checkout, build execution, Docker image creation, and deployment of applications to containerized environments.",
              "Created and managed Docker-based application deployments by writing Dockerfiles, building container images, pushing images to registries, and running applications in Kubernetes environments.",
              "Worked on AWS, Kubernetes, and Terraform-based infrastructure to provision cloud resources, manage deployments, and support automated application delivery in DevOps project environments."
            ]}
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
