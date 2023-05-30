import { DiGithubAlt } from "react-icons/di";
import { FaLinkedinIn } from "react-icons/fa";
import { BsCode } from "react-icons/bs";
import { MdOutlineAlternateEmail } from "react-icons/md";
import styles from "./css/Footer.module.css";

const Footer = () => {
  return (
    <footer className="bg-light-beige">
      <section className="mx-auto w-full max-w-screen-xl p-4 grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold">thanks for stopping by!</h1>
          <p className="text-md text-gray-500 dark:text-gray-300 ">
            made with{" "}
            <BsCode className={`${styles.footer_text_icon} inline`} size={20} />{" "}
            by michelle li
          </p>
        </div>
        <div className="px-4 py-6">
          <section className="mx-auto w-full max-w-screen-xl flex mt-4 space-x-6 sm:justify-center md:mt-0">
            <a href="https://www.linkedin.com/in/michelleli0/" target="_blank">
              <FaLinkedinIn className={styles.footer_icon} size={25} />
            </a>
            <a href="https://github.com/michelleli01" target="_blank">
              <DiGithubAlt className={styles.footer_icon} size={25} />
            </a>
            <a href="mailto:myl39@cornell.edu" target="_blank">
              <MdOutlineAlternateEmail
                className={styles.footer_icon}
                size={25}
              />
            </a>
          </section>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
