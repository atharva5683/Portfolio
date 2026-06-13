import Head from "next/head";
import Image from "next/image";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import HireMe from "@/components/HireMe";
import TransitionEffect from "@/components/TransitionEffect";
import profilePic from "../../public/images/profile/developer-pic-1.png";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [isBottom, setIsBottom] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsBottom(entry.isIntersecting);
      },
      { root: null, threshold: 0 }
    );
    if (bottomRef.current) {
      observer.observe(bottomRef.current);
    }
    return () => {
      if (bottomRef.current) observer.unobserve(bottomRef.current);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Atharva Kishor Kumbhar | DevSecOps & Cloud Engineer Portfolio</title>
        <meta
          name="description"
          content="Portfolio of Atharva Kishor Kumbhar — DevSecOps Intern, Cloud & DevOps Engineer, GCP Cloud Engineer, Kubernetes & CI/CD Practitioner."
        />
      </Head>
      <TransitionEffect />
      <article className="flex min-h-screen items-center text-dark dark:text-light sm:items-start relative w-full">
        <Layout className="!pt-0 md:!pt-16 sm:!pt-16">
          <div className="flex w-full items-start justify-between md:flex-col">
            <div className="w-1/2 lg:hidden md:inline-block md:w-full relative flex items-center justify-center">
              <div className="relative w-full aspect-square rounded-full border-4 border-solid border-primary shadow-[0_0_40px_rgba(212,175,55,0.4)] overflow-hidden bg-dark">
                <Image
                  src={profilePic}
                  alt="Atharva Kishor Kumbhar"
                  className="h-full w-full object-cover scale-110 hover:scale-125 transition-transform duration-700 ease-in-out"
                  sizes="100vw"
                  priority
                />
              </div>
            </div>
            <div className="flex w-1/2 flex-col items-center self-center lg:w-full lg:text-center pl-16 xl:pl-8 lg:pl-0">
              <AnimatedText
                text="Building secure cloud-native delivery systems."
                className="!text-left !text-6xl xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              <p className="my-4 text-base font-medium md:text-sm sm:!text-xs">
                I am a DevSecOps and Cloud Engineering professional focused on building secure, automated, and scalable cloud-native delivery pipelines. My work combines CI/CD automation, Kubernetes, Terraform, Docker, GitLab CI, Jenkins, AWS, GCP, and security tools such as SonarQube, Trivy, Snyk, OWASP ZAP, and more.
              </p>
              <div className="mt-2 flex items-center self-start lg:self-center">
                <Link
                  href="/AtharvaKumbharResume.pdf"
                  target="_blank"
                  className="flex items-center rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-lg font-semibold
                  capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark
                  dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
                  md:p-2 md:px-4 md:text-base"
                  download={true}
                >
                  Resume <LinkArrow className="ml-1 !w-6 md:!w-4" />
                </Link>
                <Link
                  href="mailto:atharvakumbhar669@gmail.com"
                  className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe isBottom={isBottom} />
        <div ref={bottomRef} className="absolute bottom-0 left-0 w-full h-4 pointer-events-none" />
        <div className="absolute right-8 bottom-8 inline-block w-24 md:hidden">
          <Image
            src={lightBulb}
            alt="Atharva Kumbhar"
            className="relative h-auto w-full"
          />
        </div>
      </article>
    </>
  );
}
