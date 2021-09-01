import Head from "next/head";
import { Fragment } from "react";

import ContactForm from "../components/contact/contact-form";

function ContactPage() {
  return (
    <Fragment>
      <Head>
        <title>Contact the creator</title>
        <meta name="description" content="send messages" />
      </Head>
      <ContactForm />
    </Fragment>
  );
}

export default ContactPage;
