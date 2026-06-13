import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { GithubIcon } from "@/components/Icons";
import TransitionEffect from "@/components/TransitionEffect";
import { motion } from "framer-motion";

const FramerImage = motion(Link);

const FeaturedProject = ({ type, title, summary, link, github }) => {
  return (
    <article className="relative flex w-full items-center justify-between rounded-3xl rounded-br-2xl border border-solid border-dark bg-light p-12 shadow-2xl dark:border-light dark:bg-dark lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
      <div className="absolute -right-3 top-0 -z-10 h-[103%] w-[101%] rounded-[2.5rem] rounded-br-3xl bg-dark dark:bg-light xs:-right-2 xs:h-[102%] xs:w-[100%] xs:rounded-[1.5rem]" />
      <div className="flex w-full flex-col items-start justify-between lg:w-full lg:pl-0 pl-6">
        <span className="text-xl font-medium text-primary dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <h2 className="my-2 w-full text-left text-4xl font-bold lg:text-3xl xs:text-2xl">
          {title}
        </h2>
        <p className="my-2 rounded-md font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          {github && (
            <Link href={github} target="_blank" className="w-10">
              <GithubIcon />
            </Link>
          )}
          {link && (
            <Link
              href={link}
              target="_blank"
              className="ml-4 rounded-lg bg-dark p-2 px-6 text-lg font-semibold text-light hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:text-light dark:hover:border-light sm:px-4 sm:text-base"
            >
              Visit Project
            </Link>
          )}
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, link, github }) => {
  return (
    <article className="relative flex w-full flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 dark:border-light dark:bg-dark xs:p-4">
      <div className="absolute -right-3 top-0 -z-10 h-[103%] w-[102%] rounded-[2rem] rounded-br-3xl bg-dark dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />
      <h3 className="mt-2 w-full text-left text-2xl font-bold lg:text-2xl">{title}</h3>
      <span className="mt-1 text-primary font-medium dark:text-primaryDark lg:text-base md:text-sm">{type}</span>
      <div className="mt-2 flex w-full items-center justify-between">
        {link ? (
          <Link href={link} target="_blank" className="rounded text-lg font-medium underline md:text-base">
            Visit
          </Link>
        ) : (
          <span className="text-sm opacity-50">Private</span>
        )}
        {github && (
          <Link href={github} target="_blank" className="w-8 md:w-6">
            <GithubIcon />
          </Link>
        )}
      </div>
    </article>
  );
};

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects | Atharva Kishor Kumbhar</title>
        <meta
          name="description"
          content="DevSecOps and Cloud Engineering projects by Atharva Kishor Kumbhar."
        />
      </Head>
      <TransitionEffect />
      <main className="mb-16 flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="!pt-16">
          <AnimatedText
            text="Cloud Meets Security!"
            className="mb-16 !text-8xl xl:!text-7xl lg:!text-6xl md:!text-5xl sm:!text-4xl sm:!mb-8"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                href="#"
                type="DevOps / Kubernetes / CI/CD"
                title="CI/CD Pipeline for Spring Boot Application on Kubernetes"
                summary="Designed and implemented an end-to-end CI/CD pipeline for a Java Spring Boot application to automate build, test, code quality analysis, artifact management, and Kubernetes deployment. Integrated Jenkins, Docker, SonarQube, Datree, Helm, Kubernetes, and Nexus. Provisioned scalable infrastructure using Terraform and IaC best practices."
                link="https://github.com/atharva5683/springboot-aws-deploy"
                github="https://github.com/atharva5683/springboot-aws-deploy"
              />
            </div>

            <div className="col-span-12">
              <FeaturedProject
                href="#"
                type="DevSecOps / AWS / Secure CI/CD"
                title="DevSecOps CI/CD Pipeline for Spring Boot Application"
                summary="Developed a DevSecOps CI/CD pipeline for a Spring Boot application on AWS to automate deployment with integrated security checks. Integrated SAST, container image scanning, dependency scanning, and DAST into the CI/CD workflow using Trivy, Snyk, SonarQube, and OWASP ZAP. Supported compliance-focused deployment on AWS."
                link="https://github.com/atharva5683/springboot-aws-deploy"
                github="https://github.com/atharva5683/springboot-aws-deploy"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                href="#"
                type="Cloud-Native Microservices / AWS EKS"
                title="Python Microservices Application on Kubernetes"
                summary="Built and deployed a containerized Python microservices application on AWS EKS using Docker, Terraform, Kubernetes, and Helm. Improved scalability and operational reliability through container orchestration. Configured Kubernetes deployments, services, Helm charts, and database connectivity with MongoDB and PostgreSQL."
                link="https://github.com/atharva5683/microservices-python-app"
                github="https://github.com/atharva5683/microservices-python-app"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
