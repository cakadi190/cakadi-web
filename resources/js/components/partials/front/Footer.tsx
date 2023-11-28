import { Link } from "@inertiajs/react";
import { ReactNode } from "react";
import {
  FaFacebook,
  FaFigma,
  FaHeart,
  FaInstagram,
  FaLinkedin,
  FaStackOverflow,
} from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";

interface SocialMediaInterface {
  name: string;
  url: string;
  icon: JSX.Element;
}

interface FooterLinksInterface {
  title: string;
  url: string;
  internal?: boolean;
  openNewTab?: boolean;
}

function SocialMediaPartial({
  socialMedia,
}: {
  socialMedia: SocialMediaInterface[];
}) {
  return socialMedia.map((data, index) => (
    <a
      key={index}
      className="hover:text-white text-lg duration-200 transition-all"
      aria-label="Cak Adi's Facebook"
      href={data.url}
    >
      {data.icon}
    </a>
  ));
}

function FooterLinks({ links }: { links: FooterLinksInterface[] }) {
  return links.map((data, index) => (
    <li key={index}>
      {data.internal ? (
        <Link
          href={data.url}
          className="text-white transition-all duration-200 hover:text-gray-300"
        >
          {data.title}
        </Link>
      ) : (
        <a
          className="text-white transition-all duration-200 hover:text-gray-300"
          href={data.url}
          target={data.openNewTab ? "_blank" : "_self"}
        >
          {data.title}
        </a>
      )}
    </li>
  ));
}

function FooterWidget({
  title,
  children,
}: {
  title: string;
  children: JSX.Element[] | ReactNode | ReactNode[] | JSX.Element;
}) {
  return (
    <div className="w-full">
      <h3 className="font-bold mb-3 font-heading">{title}</h3>
      {Array.isArray(children) ? children : [children]}
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="footer-main text-gray-300 bg-gray-900 border-t border-transparent dark:bg-gray-900/[.25] pb-6 pt-12 dark:border-gray-800">
      <div className="container mx-auto pb-8">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-6">
            <FooterWidget title="Tentang Saya">
              <p>
                Saya adalah seorang fullstack website developer asli dari Bumi
                Kartonyono Medot Janji &#x28;Kabupaten Ngawi, Jawa Timur&#x29;
                yang suka ngulik soal teknologi dan suka jalan-jalan sendirian.
              </p>
              <div className="flex gap-3 mt-4">
                <SocialMediaPartial
                  socialMedia={[
                    {
                      name: "Facebook",
                      url: "https://www.facebook.com/cakadi190",
                      icon: <FaFacebook />,
                    },
                    {
                      name: "StackOverflow",
                      url: "https://stackoverflow.com/users/17911271/amir-zuhdi-wibowo",
                      icon: <FaStackOverflow />,
                    },
                    {
                      name: "Twitter",
                      url: "https://www.twitter.com/cakadi190",
                      icon: <RiTwitterXFill />,
                    },
                    {
                      name: "Figma",
                      url: "https://www.figma.com/@cakadi190",
                      icon: <FaFigma />,
                    },
                    {
                      name: "Instagram",
                      url: "https://www.instagram.com/cakadi190",
                      icon: <FaInstagram />,
                    },
                    {
                      name: "Linkedin",
                      url: "https://www.linkedin.com/in/cakadi190",
                      icon: <FaLinkedin />,
                    },
                  ]}
                />
              </div>
            </FooterWidget>
          </div>
          <div className="col-span-6 md:col-span-2">
            <FooterWidget title="Kenali Saya">
              <ul className="flex flex-col gap-2">
                <FooterLinks
                  links={[
                    { title: "Karir", url: "/about-me/career", internal: true },
                    {
                      title: "Pendidikan",
                      url: "/about-me/education",
                      internal: true,
                    },
                    {
                      title: "Galeri",
                      url: "/about-me/gallery",
                      internal: true,
                    },
                    {
                      title: "Penghargaan",
                      url: "/about-me/penghargaan",
                      internal: true,
                    },
                    {
                      title: "Skill & Perkakas",
                      url: "/about-me/skill-and-tools",
                      internal: true,
                    },
                    {
                      title: "Layanan",
                      url: "/about-me/services",
                      internal: true,
                    },
                    {
                      title: "Portofolio Saya",
                      url: "/portofolio",
                      internal: true,
                    },
                  ]}
                />
              </ul>
            </FooterWidget>
          </div>
          <div className="col-span-6 md:col-span-2">
            <FooterWidget title="Sumber Daya">
              <ul className="flex flex-col gap-2">
                <FooterLinks
                  links={[
                    {
                      title: "Blog Pribadi",
                      url: "https://www.catatancakadi.my.id",
                      openNewTab: true,
                    },
                    {
                      title: "Referensi Ngoding",
                      url: "/resources/code-learning",
                      internal: true,
                    },
                    {
                      title: "Contekan Kode",
                      url: "/resources/snippet-code",
                      internal: true,
                    },
                    {
                      title: "Tempat Ngopi",
                      url: "/resources/tempat-ngopi",
                      internal: true,
                    },
                  ]}
                />
              </ul>
            </FooterWidget>
          </div>
          <div className="col-span-12 md:col-span-2">
            <FooterWidget title="Tautan Lain-lain">
              <ul className="flex flex-col gap-2">
                <FooterLinks
                  links={[
                    {
                      title: "Kredit",
                      url: "/kredit",
                      internal: true,
                    },
                    {
                      title: "Donasi Di trakteer.id",
                      url: "https://trakteer.id/cakadi190",
                      openNewTab: true,
                    },
                    {
                      title: "Donasi Di ko-fi.com",
                      url: "https://ko-fi.com/cakadi190",
                      openNewTab: true,
                    },
                  ]}
                />
              </ul>
            </FooterWidget>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 text-center pt-8 border-t border-gray-800 flex-col lg:text-left lg:flex-row dark:text-gray-400 lg:max-w-7xl flex justify-between">
        <p>
          &copy; 2003-{new Date().getFullYear()}{" "}
          <a
            className="text-white duration-200 transition-all hover:text-green-400"
            href="https://www.cakadi.my.id"
          >
            Cak Adi
          </a>
        </p>
        <p className="flex items-center gap-1 justify-center md:justify-end">
          Made with <FaHeart className="text-pink-500" /> by{" "}
          <a
            className="text-white duration-200 transition-all hover:text-green-400"
            href="https://www.dasakreativa.web.id"
          >
            Dasa Kreativa Studio
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
