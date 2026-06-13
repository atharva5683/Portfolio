import React from "react";
import Link from "next/link";
import Layout from "./Layout";
import { GithubIcon, LinkedInIcon, EmailIcon, PhoneIcon } from "./Icons";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light sm:text-base">
      <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className="flex items-center justify-center flex-wrap gap-6 lg:py-2">
          {/* Mobile View - Dialer */}
          <Link href="tel:+918108741281" className="hidden md:block w-6 hover:-translate-y-1 transition-transform">
            <PhoneIcon />
          </Link>
          
          {/* Desktop View - Floating Window */}
          <div className="relative block md:hidden group cursor-pointer w-6 hover:-translate-y-1 transition-transform">
            <PhoneIcon />
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden group-hover:block bg-dark text-light dark:bg-light dark:text-dark px-4 py-2 rounded-lg shadow-xl whitespace-nowrap text-sm font-bold z-50 border border-solid border-light dark:border-dark">
              My Number: 8108741281
            </div>
          </div>
          <Link href="mailto:atharvakumbhar669@gmail.com" target="_blank" className="w-6 hover:-translate-y-1 transition-transform">
            <EmailIcon />
          </Link>
          <Link href="https://www.linkedin.com/in/atharva-k-028664261/" target="_blank" className="w-6 hover:-translate-y-1 transition-transform">
            <LinkedInIcon />
          </Link>
          <Link href="https://github.com/atharva5683" target="_blank" className="w-6 hover:-translate-y-1 transition-transform">
            <GithubIcon />
          </Link>
        </div>
        <Link
          href="https://www.linkedin.com/in/atharva-k-028664261/"
          target="_blank"
          className="text-primary"
        >
          Say Hello
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;
