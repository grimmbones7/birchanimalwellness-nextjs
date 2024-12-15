import React from "react";
import Image from "next/image";
import { Clock, FileText, Mail, MapPin, Phone } from "lucide-react";
import HeaderOverlay from "../../components/HeaderOverlay";
import Link from "next/link";

const ContactSection = () => {
  return (
    <div className="bg-primary py-16">
      <HeaderOverlay
        title="Contact"
        backgroundImage="/Headerbanner/lightwood.png"
      />
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-8 mb-12">
          <div className="card bg-primary-100 shadow-xl">
            <div className="card-body m-4 ">
              <h1 className="card-title flex justify-center items-center text-xl">
                <Clock className="w-6 h-6 mr-2" />
                <b>Hours of Operation</b>
              </h1>
              <p>
                <b>Stouffville</b>: Monday to Friday <br />
              </p>
              <p className="text-2xl font-semibold">9am to 5pm</p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <div className="card-body m-4 items-center">
              <h1 className="card-title flex justify-center items-center text-xl">
                <Mail className="w-6 h-6 mr-2" />
                <b>Contact Information</b>
              </h1>
              <p>
                <a
                  href="mailto:birchanimalwellness@gmail.com"
                  className="link link-primary"
                >
                  birchanimalwellness@gmail.com
                </a>
              </p>
              <p className="flex items-center mt-2">
                <Phone className="w-5 h-5 mr-2" />
                <a href="tel:6474600082" className="link link-primary">
                  647 460 0082
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2 flex justify-center">
            <div className="card bg-base-100 shadow-xl w-full">
              <div className="grid grid-cols-1 md:grid-cols-1 gap-4 p-3 mx-5">
                <div className="bg-white rounded-lg overflow-hidden w-full">
                  <div className="bg-white p-4 flex justify-center items-center">
                    <h2 className="text-2xl font-semibold text-center">
                      Stouffville
                    </h2>
                  </div>
                  <div className="relative h-64 w-full">
                    <Image
                      src="/Policies/Stouffville.png"
                      alt="Stouffville Service Area Map"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </div>
              </div>
              <div className="card-body p-4">
                <h1 className="card-title flex items-center text-xl">
                  <MapPin className="w-6 h-6 mr-2" />
                  Location Policy
                </h1>
                <p> Base travel fee is $5 + $5 per 10 mins drive</p>
                <div className="mt-4">
                  <h3 className="font-semibold">
                    Distance therapies available worldwide:
                  </h3>
                  <ul className="list-disc list-inside">
                    <li>Flower Essences</li>
                    <li>Reiki</li>
                    <li>Animal Communication</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Waiver Section */}
          <div className="gap-4">
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body m-4 pb-12">
                <h1 className="card-title flex items-center text-xl">
                  <FileText className="w-6 h-6 mr-2" />
                  <b>Waiver</b>
                </h1>
                <p>
                  Please print and bring a signed copy to your first appointment
                </p>
                <div className="card-actions justify-center mt-4 w-3/4">
                  <Link
                    href="/path-to-your-waiver.docx"
                    download
                    className="btn btn-primary"
                  >
                    <div className="btn px-6 py-2  bg-[#6b8e23] hover:bg-[#5a7a1e] text-white font-bold rounded-full transition-colors duration-300 ease-in-out">
                      Download Waiver
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Therapy Policy Section */}

            <div className="mt-10 card bg-base-100 shadow-xl">
              <div className="card-body m-4 pb-12">
                <h1 className="card-title flex items-center text-xl">
                  <FileText className="w-6 h-6 mr-2" />
                  <b>Therapy Policy</b>
                </h1>
                <p>
                  <b>
                    Not all therapies are available for all species of animal.
                  </b>{" "}
                  Please see what is available by viewing the services page for
                  your species.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
