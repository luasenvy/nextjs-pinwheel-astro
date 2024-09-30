import Shape from "@/components/Shape";
import PageHeader from "@/components/block/PageHeader";

const termAndConditions = {
  title: "Terms & Condition Of Pinwheel",
};

export default function TermsAndConditions() {
  return (
    <>
      <Shape />
      <section className="page-hero pb-14 pt-16">
        <div className="container">
          <PageHeader {...termAndConditions} />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="content">
            <h3 id="1-definitions">1. Definitions</h3>
            <p>
              We collect certain identifying personal data when you sign up to our Service such as
              your name, email address, PayPal address (if different from email address), and
              telephone number. The personal data we collect from you is disclosed only in
              accordance with our Terms of Service and/or this Privacy Policy.Conclude collects
              Slack account and access information from Users for the purposes of connecting to the
              Slack API and to authenticate access to information on the Conclude website. Whenever
              you visit our Site, we may collect non-identifying information from you, such as
              referring URL, browser, operating system, cookie information, and Internet Service
              Provider. Without a subpoena, voluntary compliance on the part of your Internet
              Service Provider, or additional records from a third party, this information alone
              cannot usually be used to identify you.The term “personal data” does not include any
              anonymized and aggregated data made on the basis of personal data, which are wholly
              owned by Conclude.
            </p>
            <h3 id="2-general-terms">2. General Terms</h3>
            <h4 id="service-provided-as-is">Service Provided AS IS</h4>
            <p>
              The Service is provided for free during this pilot project, and is provided “as is”
              with no warranty. Conclude will provide User support for the Service, however;
              Conclude is not committed to any level of service or availability of the Service. A
              further description of the Service and our user support is available at the Site.
            </p>
            <h4 id="interoperation-with-slack">Interoperation with Slack</h4>
            <p>
              The Service interoperates with Slack.com, and depends on the continuing availability
              and access to Slack. If for any reason Conclude cannot access or use Slack (including
              without limitation, change in terms or increase in fees charged by Slack), Conclude
              may not be able to provide all of the functions of its Service. No refund or credit,
              if applicable, will be provided for temporary unavailability of Slack (for example,
              maintenance windows).
            </p>
            <h4 id="company-liability">Company Liability</h4>
            <p>
              If you enter into this agreement on behalf of a company, you hereby agree that the
              company is responsible under this Agreement for all actions and omissions conducted by
              its designated users of the Service.
            </p>
            <h3 id="4-rules-of-use">4. Rules of Use</h3>
            <ol>
              <li>must keep passwords secure and confidential;</li>
              <li>
                are solely responsible for User Data and all activity in their account while using
                the Service;
              </li>
              <li>
                must use commercially reasonable efforts to prevent unauthorized access to their
                account, and notify Conclude promptly of any such unauthorized access; and
              </li>
              <li>
                may use the Service only in accordance with Conclude’s online user guide and all
                applicable laws and regulations.
              </li>
            </ol>
            <h4 id="you-must-not">You must not</h4>
            <ul>
              <li>Enhance or improve User experience, our Site, or our Service.</li>
              <li>Process transactions.</li>
              <li>Send emails about our Site or respond to inquiries.</li>
              <li>As this Privacy Policy and our Terms of Service.</li>
            </ul>
            <h3 id="5-intellectual-property-rights">5. Intellectual Property Rights</h3>
            <p>
              Your information may be transferred to — and maintained on — computers located outside
              of your state, province, country or other governmental jurisdiction where the privacy
              laws may not be as protective as those in your jurisdiction. If you choose to provide
              information to us, Conclude transfers Personal Information to Google Cloud Platform
              and processes it there. Your consent to this Privacy Policy followed by your
              submission of such information represents your agreement to that transfer.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
