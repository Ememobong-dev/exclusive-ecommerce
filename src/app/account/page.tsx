import Button from "@/components/Button";
import Footer from "@/components/Footer";
import InputIconGroup, { LabelInput } from "@/components/InputIconGroup";
import { Breadcrumb, Row, Col } from "antd";
import Link from "next/link";
import React from "react";

const Page = () => {
  const accountNavs = [
    {
      name: "manage my account",
      children: ["My profile", "Address Book", "my payment options"],
    },
    {
      name: "my orders",
      children: ["My returns", "My cancellations"],
    },
    {
      name: "wishlist",
    },
  ];

  return (
    <>
      <div className="p-28">
        <div className="flex justify-between items-center pb-20">
          <Breadcrumb
            items={[
              {
                title: <Link href="/"> Home </Link>,
              },
              {
                title: "My Account",
              },
            ]}
          />
          <div>
            <p>welcome</p>
            <p></p>
          </div>
        </div>
        <Row>
          <Col xs={10}>
            <div className="flex flex-col gap-10">
              {accountNavs.map((item, index) => (
                <>
                  <div key={index}>
                    <h3 className="text-xl capitalize"> {item.name} </h3>
                    {item.children && (
                      <>
                        {item.children.map((child, i) => (
                          <div key={i} className="pl-6">
                            <span className="text-black/50 text-lg leading-relaxed capitalize">
                              {" "}
                              {child}{" "}
                            </span>
                          </div>
                        ))}
                      </>
                    )}
                  </div>
                </>
              ))}
            </div>
          </Col>
          <Col xs={14}>
            <div className="bg-white rounded-lg shadow-md p-14 ">
              <h3 className="text-2xl text-red-secondary-two">
                Edit Your Profile
              </h3>
              <Row gutter={[56, 22]}>
                <Col xs={12}>
                  <div>
                    <LabelInput labelFor="" labelTitle="First Name" />
                    <InputIconGroup placeholder="John" />
                  </div>
                </Col>
                <Col xs={12}>
                  <div>
                    <LabelInput labelFor="" labelTitle="Last Name" />
                    <InputIconGroup placeholder="Doe" />
                  </div>
                </Col>
                <Col xs={12}>
                  <div>
                    <LabelInput labelFor="" labelTitle="Email" />
                    <InputIconGroup placeholder="johndoe@gmail.com" />
                  </div>
                </Col>
                <Col xs={12}>
                  <div>
                    <LabelInput labelFor="" labelTitle="Address" />
                    <InputIconGroup placeholder="Kingstone, 5653, United State" />
                  </div>
                </Col>
                <Col xs={24}>
                  <div>
                    <LabelInput labelFor="" labelTitle="Pasword Changes" />
                    <div className="flex flex-col gap-5">
                      <InputIconGroup placeholder="Current Password" />
                      <InputIconGroup placeholder="New Password" />
                      <InputIconGroup placeholder="Confirm New Password" />
                    </div>
                  </div>
                </Col>
              </Row>
              <div className="flex gap-3 mt-5 justify-end ">
                <Button variant="white">Cancel</Button>
                <Button variant="red">Save changes</Button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <Footer />
    </>
  );
};

export default Page;
