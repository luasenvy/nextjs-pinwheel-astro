import Image from "next/image";

import PageHeader from "@/components/block/PageHeader";

import ContactImage from "@/public/images/contact-img.png";
import Shape2Image from "@/public/images/shape-2.png";

const contact = {
  title: "Contact",
  page_title: "Get’n touch with Our\nPinwheel team",
};

const contact_form_action = "#";
export default function Contact() {
  return (
    <>
      <section className="page-hero pb-6 pt-16">
        <div className="container">
          <PageHeader {...contact} />
        </div>
      </section>

      <section className="section pt-0">
        <div className="container">
          <div className="row">
            <div className="mb-10 text-center md:col-6 md:order-2 md:mb-0 md:pt-9">
              <div className="contact-img relative inline-flex pb-5 pl-5">
                <Image src={ContactImage} height={544} width={500} alt="" />
                <Image
                  className="absolute bottom-0 left-0 -z-[1] h-14 w-14"
                  src={Shape2Image}
                  alt=""
                  height={56}
                  width={56}
                />
              </div>
            </div>
            <div className="md:col-6 md:order-1">
              <form className="lg:max-w-[484px]" action={contact_form_action} method="POST">
                <div className="form-group mb-5">
                  <label className="form-label" htmlFor="name">
                    Full Name
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    id="name"
                    placeholder="Your Full Name"
                  />
                </div>
                <div className="form-group mb-5">
                  <label className="form-label" htmlFor="eamil">
                    Email Adrdess
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    id="email"
                    placeholder="Your  Email Address"
                  />
                </div>
                <div className="form-group mb-5">
                  <label className="form-label" htmlFor="reason">
                    Reason/Purpose
                  </label>
                  <select name="reason" id="reason" className="form-select" required>
                    <option value="">Select reason/purpose</option>
                    <option value="investment plane">Investment Plan</option>
                    <option value="investment plane-2">Investment Plan 2</option>
                    <option value="investment plane-3">Investment Plan 3</option>
                  </select>
                </div>
                <div className="form-group mb-5">
                  <label className="form-label" htmlFor="message">
                    Message Here
                  </label>
                  <textarea
                    className="form-control h-[150px]"
                    id="message"
                    cols={30}
                    rows={10}
                  ></textarea>
                </div>
                <input
                  className="btn btn-primary block w-full"
                  type="submit"
                  value="Send Message"
                />
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
