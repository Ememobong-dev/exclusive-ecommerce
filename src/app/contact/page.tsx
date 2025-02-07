import IconCircleBacground from "@/components/IconCircleBacground";
import { Breadcrumb, Row, Col } from "antd";
import Link from "next/link";
import React from "react";
import contactPhone from "../../../public/assets/icons/contactPhone.svg";
import contactMail from "../../../public/assets/icons/contactMail.svg";
import InputIconGroup from "@/components/InputIconGroup";
import Button from "@/components/Button";
import Footer from "@/components/Footer";

const Page = () => {
  return (
    <>
      <div className="p-28">
        <Breadcrumb
          items={[
            {
              title: <Link href="/"> Home </Link>,
            },
            {
              title: "Contact",
            },
          ]}
          className="pb-20"
        />
        <div className="flex justify-between">
          <div className="bg-white shadow-lg p-10">
            <div className="flex flex-col mb-5 gap-5">
              <div className="flex gap-5 items-center">
                <IconCircleBacground icon={contactPhone} />
                <p>Call To Us</p>
              </div>
              <p>We are available 24/7, 7 days a week.</p>
              <p>Phone: +8801611112222</p>
            </div>
            <hr />
            <div className="flex flex-col mt-5 gap-5">
              <div className="flex gap-5 items-center">
                <IconCircleBacground icon={contactMail} />
                <p>Write To Us</p>
              </div>
              <p>Fill out our form and we will contact you within 24 hours.</p>
              <p>Emails: customer@exclusive.com</p>
              <p>Emails: support@exclusive.com</p>
            </div>
          </div>


          <div className="bg-white shadow-lg rounded-lg p-14 ">
            <Row gutter={[56, 42]}>
              <Col xs={8}>
                <div>
                  <InputIconGroup placeholder="Your name" />
                </div>
              </Col>
              <Col xs={8}>
                <div>
                  <InputIconGroup placeholder="Your Email" />
                </div>
              </Col>
              <Col xs={8}>
                <div>
                  <InputIconGroup placeholder="Your Phone" />
                </div>
              </Col>

              <Col xs={24}>
                <div>
                  <InputIconGroup textArea placeholder="Your Message" />
                </div>
              </Col>
            </Row>
            <div className="flex gap-3 mt-5 justify-end ">
              <Button variant="red">Send Message</Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;
