import Link from "next/link";
import { SiGmail } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer
      className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10"
      id="contact"
    >
      <nav className="grid grid-flow-col gap-4">
        <Link href="#about" className="link link-hover">
          About us
        </Link>
        <Link href="#portfolio" className="link link-hover">
          Portfolio
        </Link>
        <Link href="#stack" className="link link-hover">
          Stack
        </Link>
        <Link href="#contact" className="link link-hover">
          Contact
        </Link>
      </nav>

      <nav>
        <div className="grid grid-flow-col gap-4">
          <a
            href="https://www.youtube.com/@phuriphatsuknukul972"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
            </svg>
          </a>
          <a
            href="https://www.facebook.com/phuriphat.suknukul"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </a>
          {/* Gmail icon */}
          <a href="mailto:phuriphatsuknukul@gmail.com" className="text-white">
            <SiGmail size={24} />
          </a>

          {/* GitHub icon */}
          <a
            href="https://github.com/phuriphatSK"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
            <FaGithub size={24} />
          </a>
        </div>
      </nav>

      <aside>
        <p>© {new Date().getFullYear()} Built with ❤️ by Phuriphat</p>
      </aside>
    </footer>
  );
};
