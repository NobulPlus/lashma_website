import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ReactGA from 'react-ga4';

const Privacy = () => {
  useEffect(() => {
    ReactGA.send({ hitType: 'pageview', page: window.location.pathname + window.location.search });
  }, []);

  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>LASHMA | Privacy Policy</title>
        <meta name="description" content="Lagos State Health Management Agency Privacy Policy" />
        <link rel="canonical" href="/privacy-policy" />
      </Helmet>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-20 pt-44 bg-gray-100 text-gray-800 font-sans">
        <h2 className="text-3xl font-bold text-[#2B373B] mb-6">Privacy Policy</h2>
        <p className="text-sm text-gray-600 mb-4">Last updated: July 11, 2025</p>

        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-[#2B373B] mb-4">Introduction</h3>
          <p>
            The Lagos State Health Scheme Law, Law No.4 of 25 May 2015 establishes the Lagos State Health Management Agency (LASHMA), Lagos0101 State Health Scheme (LSHS) and Lagos State Health Fund (LASHEF). The Lagos State Health Scheme is mandatory for all residents of Lagos State, all employees in the public and private sectors, including the self-employed and the unemployed. The overall goal of the LSHS is to ensure all residents of Lagos have unhindered access to quality healthcare services in an efficient, sustainable, and equitable manner.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-[#2B373B] mb-4">Background</h3>
          <p>
            LASHMA as an agency is responsible for the coordination of all activities that pertain to health insurance in Lagos State especially the LSHS as stated in the law that set up the scheme. Access to health care services for the general public commenced on 1 July 2019.
          </p>
          <p>
            This Privacy Policy describes our policies and procedures on the collection, use, processing, retention and disposal of your Personal Data as regulated by the NDPR when you use our Service and informs you about your privacy rights and how the law protects you. We use your Personal Data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this Privacy Policy.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-[#2B373B] mb-4">Interpretation and Definitions</h3>
          <h4 className="text-xl font-medium text-[#2B373B] mb-2">Interpretation</h4>
          <p>
            The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
          </p>
          <h4 className="text-xl font-medium text-[#2B373B] mb-2 mt-4">Definitions</h4>
          <div className='list-style-disc'>
          <ul className="list-disc pl-6 mb-4 list-outside">
            <li><strong>Account</strong> means a unique account created for You to access our Service or parts of our Service.</li>
            <li><strong>Affiliate</strong> means an entity that controls, is controlled by or is under common control with a party; where “control” means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.</li>
            <li><strong>Cookies</strong> are small files that are placed on your computer, mobile device or any other device by a website, containing the details of your browsing history on that website among its many uses.</li>
            <li><strong>Country</strong> refers to Nigeria.</li>
            <li><strong>Device</strong> means any device that can access the Service such as a computer, a mobile phone, a digital tablet, etc.</li>
            <li><strong>NDPR</strong> means Nigerian Data Protection Regulation 2019.</li>
            <li><strong>Personal Data</strong> is any information that is associated or relates to a specific individual and can be used to identify that person.</li>
            <li><strong>Service</strong> refers to the Website, mobile applications and all activities as it relates to ICT platform provider (Prognosis).</li>
            <li><strong>Service Provider</strong> means any natural or legal person who processes the data on behalf of Lagos State Health Management Agency (LASHMA). It refers to third-party companies or individuals employed by LASHMA or its Concessionaires to facilitate or provide the Service on behalf of LASHMA or its Concessionaires, to perform services related to the Service or to assist LASHMA or its Concessionaires, in analysing how the Service is used.</li>
            <li><strong>Third-party Service</strong> refers to any website or any network website through which a User can log in or create an Account to use the Service.</li>
            <li><strong>Prognosis Platforms</strong> refer to the LASHMA website and mobile application.</li>
            <li><strong>Usage Data</strong> refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself.</li>
            <li><strong>We</strong>, <strong>Us</strong> or <strong>Our</strong> in this Policy refers to LASHMA and/or its Concessionaires.</li>
            <li><strong>Website</strong> refers to the LASHMA website accessible from <a href="https://www.lashma.com" className="text-[#eb580c] hover:underline">www.lashma.com</a>.</li>
            <li><strong>You</strong> means the individual accessing or using our Service, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</li>
          </ul>
          </div>
        </section>

        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-[#2B373B] mb-4">Scope and Consent</h3>
          <p>
            You accept this Privacy Policy when you sign up for, access, or use our services, content, features, technologies or functions offered on our Website, mobile application, and all related sites, and services (collectively referred to as “ICT platform Services provider”). This Privacy Policy is intended to govern the use of ICT Platform Provider Services by You unless otherwise agreed through contract. You reserve the right to exercise your data protection rights as listed under your rights under the NDPR.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-[#2B373B] mb-4">Collecting Personal Data</h3>
          <p>
            Your data is collected electronically and manually when You visit our website or mobile application (“ICT Platforms Provider”) and register to use any of our services.
          </p>
          <h4 className="text-xl font-medium text-[#2B373B] mb-2 mt-4">Types of Data Collected</h4>
          <h5 className="text-lg font-medium text-[#2B373B] mb-2">Personal Data</h5>
          <p>
            While using our Service, we may ask You to provide us with certain Personally Identifiable Information [PII] that can be used to contact or identify You. PII may include, but is not limited to: email address, first name and last name, phone number, address, ZIP/Postal code, city and Usage Data.
          </p>
          <h5 className="text-lg font-medium text-[#2B373B] mb-2 mt-4">Usage Data</h5>
          <p>
            Usage Data is collected automatically when using our Service. Usage Data may include information such as your Device's internet protocol address (IP address), browser type, browser version, the pages of our Service that You visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data. When You access the Service by or through a mobile device, we may collect certain information automatically. We may also collect information that your browser sends whenever You visit our Service or when You access the Service by or through a mobile device.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-[#2B373B] mb-4">Use of Your Personal Data</h3>
          <p>We may use your Personal Data for the following purposes:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>To provide and maintain our Service with a secure, smooth, efficient, and customized experience customer support, including to monitor the usage of our Service.</li>
            <li>To manage your Account, manage risk, detect, prevent, and/or remediate fraud, violations of policies or other potentially prohibited or illegal activities.</li>
            <li>To attend to and manage your requests, process transactions, verify your identity, resolve disputes, collect fees, and troubleshoot problems.</li>
            <li>To manage and protect our information technology infrastructure, perform creditworthiness and solvency checks.</li>
            <li>Compare information for accuracy and verify it with third parties.</li>
            <li>To contact You via email, telephone calls, SMS, or other equivalent forms of electronic communication, such as a mobile application's push notifications regarding updates or informative communications related to the functionalities, products or contracted services, including the security updates, when necessary or reasonable for their implementation.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-[#2B373B] mb-4">Retention of Your Personal Data</h3>
          <p>
            We will retain your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your Personal Data to the extent necessary to comply with our Services, legal obligations, resolve disputes, and enforce our legal agreements and policies. We will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of our Service, or we are legally obligated to retain this data for longer time periods.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-[#2B373B] mb-4">Protection and Storage of Personal Data</h3>
          <p>
            We protect your information using physical, technical, and administrative security measures to reduce the risks of loss, misuse, unauthorized access, disclosure, and alteration. Some of the safeguards we use are firewalls and data encryption, physical access controls to our data centres, and information access authorization controls. We have also taken additional measures by ensuring our system complies with industry information security standards. The security of your Personal Data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-[#2B373B] mb-4">Transfer of Your Personal Data</h3>
          <p>
            Your information, including Personal Data, is processed at our operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to — and maintained on — computers located outside of your state, province, Country or other governmental jurisdiction. Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer. We will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy and no transfer of your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of your data and other Personal Data.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-[#2B373B] mb-4">Sharing Personal Data with Other LASHMA-ICT Platform Users</h3>
          <p>
            When transacting with others, we may provide those parties with information to complete the transaction, such as your name, User ID, contact details, or other information needed to promote the reliability and security of the transaction. If a transaction is held, fails, or is later invalidated, we may also provide details of the unsuccessful transaction. Your card information may be available for your subsequent re-use if You chose to be remembered at previous attempts.
          </p>
          <p>
            We work with third parties, including HMO, Health Provider, Marketing Agent and Payment platform channels to facilitate the receipt of your payments for LASHMA and its concessionaires. Kindly note that third parties, such as Health service Provider, TPA’s and Payment Platform Providers involved in transactions may have their own privacy policies, and neither LASHMA nor its Concessionaires allow the other transacting party to use this information for anything other than providing ICT platform Services. LASHMA is not responsible for their actions, including their information protection practices.
          </p>
          <p>
            Neither LASHMA nor its Concessionaires will disclose your credit/debit card number or bank account number to anyone excluding its merchants, except with your express permission. In addition to the above, LASHMA or its Concessionaires may share your Personal Data for the following purposes:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Fraud prevention and risk management.</li>
            <li>For customer service purposes.</li>
            <li>For compliance with applicable laws, anti-money laundering and counterterrorist financing verification requirements.</li>
            <li>With Service Providers, to enable them monitor and analyse the use of our Service and support our Line of business operations.</li>
            <li>With Our Affiliates and partners where necessary.</li>
            <li>With other users - when You share Personal Data or otherwise interact in the public areas with other users, such information may be viewed by all users and may be publicly distributed outside. If You interact with other users or register through a Third-Party administration Service, your contacts on the Third-Party Service may see your Personal Data.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-[#2B373B] mb-4">Disclosure of Your Personal Data</h3>
          <h4 className="text-xl font-medium text-[#2B373B] mb-2">Business Transactions</h4>
          <p>
            If LASHMA Concessionaire is involved in a merger, acquisition or asset sale, your Personal Data may be transferred.
          </p>
          <h4 className="text-xl font-medium text-[#2B373B] mb-2 mt-4">Law Enforcement</h4>
          <p>
            Under certain circumstances, LASHMA or its Concessionaires may be required to disclose your Personal Data if required to do so by law or in response to valid requests by government authorities.
          </p>
          <h4 className="text-xl font-medium text-[#2B373B] mb-2 mt-4">Other Legal Requirements</h4>
          <p>
            LASHMA or its Concessionaires may disclose your Personal Data in good faith and belief that such action is necessary to:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Comply with a legal obligation.</li>
            <li>Protect and defend the rights or property of LASHMA or its Concessionaire.</li>
            <li>Prevent or investigate possible wrongdoing in connection with the Service.</li>
            <li>Protect the personal safety of Users of the Service or the public.</li>
            <li>Protect against legal liability.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-[#2B373B] mb-4">Your Rights Under the NDPR</h3>
          <p>You have data protection rights and are entitled to the following:</p>
          <ol className="list-decimal pl-6 mb-4">
            <li><strong>The right to access</strong> – You have the right to request copies of your Personal Data. LASHMA or its Concessionaires may charge a reasonable fee for this service, in consideration of the administrative cost that will be incurred in accomplishing the request.</li>
            <li><strong>The right to rectification</strong> – You have the right to request for the correction of any information You believe and have proven to have been captured inaccurately. You also have the right to request for the completion of any information You believe is incomplete.</li>
            <li><strong>The right to erasure</strong> – You have the right to request to erase your Personal Data, under certain conditions some of which are listed in the NDPR, however not limited to regulatory requirements or law enforcement agencies.</li>
            <li><strong>The right to restrict processing</strong> – You have the right to request the restriction of the processing of your Personal Data, under certain conditions some of which are listed in the NDPR.</li>
            <li><strong>The right to object to processing</strong> – You have the right to object to the processing of your Personal Data, under certain conditions.</li>
            <li><strong>The right to data portability</strong> – You have the right to request the transfer of data collected to another organization, or directly to You, where technically feasible, without unnecessary hindrance.</li>
          </ol>
          <p>Any requests emanating from any of the rights above shall be handled between two (2) to four (4) working weeks.</p>
        </section>

        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-[#2B373B] mb-4">Tracking Technologies and Cookies</h3>
          <p>
            We use Cookies and similar tracking technologies to track the activity on Our Service and store certain information. “.net code “is the tracking technologies used is to collect and track information and to improve and analyse Our Service. You can instruct your browser to refuse all Cookies or to indicate when a Cookie is being sent. Cookies can be “Persistent” or “Session” Cookies. Persistent Cookies remain on your personal computer or mobile device when You go offline, while Session Cookies are deleted as soon as You close your web browser.
          </p>
          <p>We use both session and persistent Cookies for various purposes such as:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>To provide You with services available through the Website and to enable You to use some of its features.</li>
            <li>To authenticate users and prevent fraudulent use of your Accounts.</li>
            <li>To remember choices You make when You use the Website, such as remembering your login details or language preference so as to provide You with a more personal experience and to avoid You having to re-enter your preferences every time You use the Website.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-[#2B373B] mb-4">Changes to This Privacy Policy</h3>
          <p>
            We may update our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on the ICT Platforms. We may also notify You via email, prior to the change becoming effective and update the “Last updated” date at the top of this Privacy Policy. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on the ICT Platforms and other services related to LASHMA.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-[#2B373B] mb-4">Contact Us</h3>
          <p>If you have any questions or concerns about this Privacy Policy, you can contact us:</p>
          <ul className="list-disc pl-6">
            <li>By email: <a href="mailto:ileraeko@lashma.com" className="text-[#eb580c] hover:underline">ileraeko@lashma.com</a></li>
            <li>Call us: <a href="tel:0800275527462" className="text-[#eb580c] hover:underline">0800-ASKLASHMA (0800 275527462)</a></li>
          </ul>
        </section>

        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-[#2B373B] mb-4">Declaration</h3>
          <p>
            I have read all the terms and conditions within this Notice and hereby agree/disagree to the use of my Personal Data for the above-mentioned purposes.
          </p>
        </section>
      </main>
    </>
  );
};

export default Privacy;