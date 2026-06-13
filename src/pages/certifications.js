import Head from "next/head";
import Image from "next/image";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import TransitionEffect from "@/components/TransitionEffect";
import Link from "next/link";
import { motion } from "framer-motion";

const CertCard = ({ title, issuer, badgeColor, credentialUrl, imageSrc, delay = 0 }) => {
  return (
    <motion.article
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="relative flex flex-col rounded-2xl border border-solid border-dark bg-light p-6 dark:border-light dark:bg-dark shadow-lg hover:shadow-2xl transition-shadow duration-300"
    >
      <div className="absolute -right-3 top-0 -z-10 h-[103%] w-[101%] rounded-[2rem] rounded-br-3xl bg-dark dark:bg-light" />
      <div className="overflow-hidden rounded-xl mb-4 bg-white dark:bg-light p-4 flex items-center justify-center">
        <Image
          src={imageSrc}
          alt={title}
          width={600}
          height={400}
          className="w-full h-48 object-contain hover:scale-105 transition-transform duration-500"
        />
      </div>
      <span
        className="inline-block w-fit rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider mb-3"
        style={{ backgroundColor: badgeColor, color: "#fff" }}
      >
        {issuer}
      </span>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      {credentialUrl && (
        <Link
          href={credentialUrl}
          target="_blank"
          className="mt-auto inline-flex items-center gap-1 text-primary font-semibold hover:underline dark:text-primaryDark"
        >
          View Credential →
        </Link>
      )}
    </motion.article>
  );
};

const AchievementStat = ({ number, suffix = "", label }) => (
  <div className="text-center">
    <span className="text-5xl font-black text-primary dark:text-primaryDark md:text-4xl sm:text-3xl">
      {number}{suffix}
    </span>
    <p className="mt-1 text-sm font-medium text-dark/60 dark:text-light/60">{label}</p>
  </div>
);

export default function Certifications() {
  return (
    <>
      <Head>
        <title>Certifications | Atharva Kishor Kumbhar</title>
        <meta
          name="description"
          content="Professional certifications by Atharva Kishor Kumbhar — Google Cloud, AWS, and more."
        />
      </Head>
      <TransitionEffect />
      <main className="mb-16 flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="!pt-16">
          <AnimatedText
            text="Certified & Validated!"
            className="mb-16 !text-8xl xl:!text-7xl lg:!text-6xl md:!text-5xl sm:!text-4xl sm:!mb-8"
          />

          {/* Achievement Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center gap-16 mb-20 flex-wrap md:gap-8"
          >
            <AchievementStat number="0.8" suffix="+" label="Years Experience" />
            <AchievementStat number="4" suffix="+" label="Certifications" />
            <AchievementStat number="3" suffix="+" label="Projects" />
            <AchievementStat number="3" suffix="+" label="Internships" />
          </motion.div>

          {/* Certification Cards */}
          <div className="grid grid-cols-2 gap-10 lg:gap-8 md:grid-cols-1 md:gap-y-16">
            <CertCard
              title="Associate Cloud Engineer Certification"
              issuer="Google Cloud"
              badgeColor="#34A853"
              credentialUrl="https://www.credly.com/badges/ef70bb16-2fcc-4543-8493-e61ce4751a86/public_url"
              imageSrc="/images/certificates/gcp-associate-cloud-engineer-new.png"
              delay={0}
            />
            <CertCard
              title="AWS Certified Cloud Practitioner"
              issuer="AWS"
              badgeColor="#FF9900"
              credentialUrl="https://www.credly.com/badges/1ec15dc2-92cd-42e0-915d-8ec477b5e4de/public_url"
              imageSrc="/images/certificates/aws-certified-cloud-practitioner.jpg"
              delay={0.1}
            />
            <CertCard
              title="AWS Certified AI Practitioner"
              issuer="AWS"
              badgeColor="#FF9900"
              credentialUrl="https://www.credly.com/badges/bce4f0d2-8892-4e51-8cd5-553e3d973067/public_url"
              imageSrc="/images/certificates/aws-certified-ai-practitioner.jpg"
              delay={0.2}
            />
            <CertCard
              title="Google Cloud Computing Foundations Certificate"
              issuer="Google Cloud"
              badgeColor="#34A853"
              credentialUrl="https://www.credly.com/badges/cc2e0601-b879-42ef-9db4-1e53465b17f7/public_url"
              imageSrc="/images/certificates/google-cloud-computing-foundations.png"
              delay={0.3}
            />
          </div>
        </Layout>
      </main>
    </>
  );
}
