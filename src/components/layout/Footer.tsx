import Link from "next/link";
import FooterNewsletterForm from "../footer/FooterNewsletterForm";
import InstagramIcon from "../icons/InstagramIcon";
import FacebookIcon from "../icons/FacebookIcon";

export default function Footer() {
  return (
    <footer className=" bg-white">
      <hr className="border-neutral-300" />
      <div className="container mx-auto py-16 px-8 grid grid-cols-3 gap-10">
        <div className="col-span-1">
          <h4 className="mb-4 font-bold">Links</h4>
          <ul className="font-light flex flex-col gap-2">
            <li>
              <Link href={"/"}>About</Link>
            </li>
            <li>
              <Link href={"/"}>Blog</Link>
            </li>
            <li>
              <Link href={"/"}>Feedback</Link>
            </li>
            <li>
              <Link href={"/"}>Contact</Link>
            </li>
          </ul>
        </div>
        <div className="col-span-1">
          <h4 className="mb-4 font-bold">Store Info</h4>
          <address className="not-italic font-light leading-7 ">
            123 Le Duan, District 1
            <br />
            Ho Chi Minh City, Vietnam
            <br />
            Hotline: +84 123 456 789
            <br />
            {"Email: "}
            <Link href={"/"}>hello@lumen.studio</Link>
          </address>
        </div>
        <div className="col-span-1">
          <h4 className="mb-4 font-bold">Stay in touch</h4>
          <p className="mb-4 font-light">
            Join our newsletter for new drops and private sales.
          </p>
          <FooterNewsletterForm />
          <div className="mt-6 flex gap-4 items-center">
            <a>
              <InstagramIcon />
            </a>
            <a>
              <FacebookIcon />
            </a>
          </div>
        </div>
      </div>
      <hr className="border-neutral-300" />
      <div className="container mx-auto py-6 px-8 flex justify-between">
        <p className="font-light text-xs">© 2025 LUMEN</p>
        <p className="font-light text-xs">Build by anotherath x Mike Bui</p>
      </div>
    </footer>
  );
}
