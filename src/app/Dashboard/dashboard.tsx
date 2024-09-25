"use client";
import Navbar from "../Navbar/navbar";
import styles from "./dashboard.module.css";

import Image from "next/image";
import Pagination from "../pagination";
import { SetStateAction, useState } from "react";

export default function Dashboard() {
  const [currentPage, setCurrentPage] = useState(1);
  const addressesPerPage = 15;
  // Get current addresses for the current page
  const indexOfLastAddress = currentPage * addressesPerPage;
  const indexOfFirstAddress = indexOfLastAddress - addressesPerPage;

  const addresses = [
    { fullAddress: "123 Main St, City, Country 456 Oak St, City, Country " },
    { fullAddress: "123 Main St, City, Country 456 Oak St, City, Country " },
    { fullAddress: "123 Main St, City, Country 456 Oak St, City, Country " },
    { fullAddress: "123 Main St, City, Country 456 Oak St, City, Country " },
    { fullAddress: "123 Main St, City, Country 456 Oak St, City, Country " },
    { fullAddress: "123 Main St, City, Country 456 Oak St, City, Country " },
    { fullAddress: "123 Main St, City, Country 456 Oak St, City, Country " },
    { fullAddress: "123 Main St, City, Country 456 Oak St, City, Country " },
    { fullAddress: "123 Main St, City, Country 456 Oak St, City, Country " },
    { fullAddress: "123 Main St, City," },

    { fullAddress: "123 Main St, City," },
    { fullAddress: "123 Main St, City," },
    { fullAddress: "123 Main St, City," },
    { fullAddress: "123 Main St, City," },
    { fullAddress: "123 Main St, City," },
    { fullAddress: "123 Main St, City," },
    { fullAddress: "123 Main St, City," },
    { fullAddress: "123 Main St, City," },
    { fullAddress: "123 Main St, City," },
    { fullAddress: "123 Main St, City," },
    { fullAddress: "123 Main St, City," },
    { fullAddress: "123 Main St, City," },
    { fullAddress: "123 Main St, City," },
  ];
  const [selectedNumber, setSelectedNumber] = useState("987654331"); // Default number
  const numbers = ["123456789", "987654331", "555666777"]; // Example numbers
  const [isOpen, setIsOpen] = useState(false); // To toggle dropdown

  const handleSelect = (number: SetStateAction<string>) => {
    setSelectedNumber(number); // Update the selected number
    setIsOpen(false); // Close dropdown after selection
  };

  const currentAddresses = addresses.slice(
    indexOfFirstAddress,
    indexOfLastAddress
  );

  // Change page
  const paginate = (pageNumber: SetStateAction<number>) =>
    setCurrentPage(pageNumber);
  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="mt-4 ms-5 d-flex">
          <div className="border-end pe-5">
            <div className="mb-5 ms-5 fs-6">
              <div className="">
                message and calls
                <div className="ms-3 mt-3 d-flex align-items-center">
                  status
                  <Image
                    src="/dropdownicon.svg"
                    alt="Dropdown Icon"
                    className="ms-3"
                    width={12}
                    height={12}
                  />
                </div>
                <ul className="ms-1 mt-2">
                  <li className="d-flex align-items-center ">
                    <input type="checkbox" className="me-2" />
                    <a className="dropdown-item" href="#">
                      Delivered
                    </a>
                  </li>
                  <li className="d-flex align-items-center mt-2">
                    <input type="checkbox" className="me-2" />
                    <a className="dropdown-item" href="#">
                      Received
                    </a>
                  </li>
                </ul>
                <div className="ms-3 mt-3 d-flex align-items-center">
                  Type
                  <Image
                    src="/dropdownicon.svg"
                    alt="Dropdown Icon"
                    className="ms-3"
                    width={12}
                    height={12}
                  />
                </div>
                <ul className="ms-1 mt-2">
                  <li className="d-flex align-items-center ">
                    <input type="checkbox" className="me-2" />
                    <a className="dropdown-item" href="#">
                      Case
                    </a>
                  </li>
                  <li className="d-flex align-items-center mt-2">
                    <input type="checkbox" className="me-2" />
                    <a className="dropdown-item" href="#">
                      Auction
                    </a>
                  </li>
                  <li className="d-flex align-items-center mt-2">
                    <input type="checkbox" className="me-2" />
                    <a className="dropdown-item" href="#">
                      Tax deed
                    </a>
                  </li>
                </ul>
                <div className="ms-3 mt-3 d-flex align-items-center">
                  Date
                  <Image
                    src="/dropdownicon.svg"
                    alt="Dropdown Icon"
                    className="ms-3"
                    width={12}
                    height={12}
                  />
                </div>
                <ul className="ms-1 mt-2">
                  <li className="d-flex align-items-center ">
                    <input type="checkbox" className="me-2" />
                    <a className="dropdown-item" href="#">
                      Weekly
                    </a>
                  </li>
                  <li className="d-flex align-items-center mt-2">
                    <input type="checkbox" className="me-2" />
                    <a className="dropdown-item" href="#">
                      Monthly
                    </a>
                  </li>
                  <li className="d-flex align-items-center mt-2">
                    <input type="checkbox" className="me-2" />

                    <a className="dropdown-item" href="#">
                      custom
                      <Image
                        src="/dropdownicon.svg"
                        alt="Dropdown Icon"
                        className="ms-2"
                        width={12}
                        height={12}
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="container-fluid ms-4 me-4">

            <div className="">
            <div className="row g-3"> {/* Apply grid gap here */}
    
    <div className="col-lg-3 col-md-6 col-sm-12"> {/* Each column */}
      <div className={`d-flex justify-content-between align-items-center p-3 ${styles.messageDelivered}`}>
        <span>Message Delivered</span>
        <span className="badge bg-light text-dark rounded-circle d-flex justify-content-center align-items-center p-3">200</span>
      </div>
    </div>
    
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div className={`d-flex justify-content-between align-items-center p-3 ${styles.messageResponse}`}>
        <span>Message Response</span>
        <span className="badge bg-light text-dark rounded-circle d-flex justify-content-center align-items-center p-3">200</span>
      </div>
    </div>
    
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div className={`d-flex justify-content-between align-items-center p-3 text-left ${styles.call}`}>
        <span>Call</span>
        <span className="badge bg-light text-dark rounded-circle d-flex justify-content-center align-items-center p-3">200</span>
      </div>
    </div>
    
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div className={`d-flex justify-content-between align-items-center p-3 text-left ${styles.callResponse}`}>
        <span>Call Response</span>
        <span className="badge bg-light text-dark rounded-circle d-flex justify-content-center align-items-center p-3">200</span>
      </div>
    </div>

  </div>
</div>


            <div className="">
              <div className="text-left">
                <div className="row">
                  <div className="col-lg-3 col-md-6 col-sm-12 ">
                    <div className="d-flex mt-4">
                      <span className="me-4">
                        <Image
                          alt="Dropdown Icon"
                          width={25}
                          height={25}
                          src="/User.svg"
                        />
                      </span>
                      <span>Address</span>
                    </div>

                    <div className="me-4 mt-2">
                      <div
                        className={`overflow-auto ${styles.address} border p-3`}
                      >
                        <div className="d-flex align-items-center mb-3 gap-3">
                          <input
                            type="text"
                            className="form-control me-2"
                            placeholder="Search addresses..."
                            aria-label="Search"
                          />

                          <div className="d-flex">
                            <div className="">
                              <span className="ms-3">
                                <Image
                                  alt="Bookmark Icon"
                                  width={15}
                                  height={15}
                                  src="/bookmark.svg"
                                />
                              </span>
                              <span className="me-2">select</span>
                            </div>

                            <div className="ms-2">
                              <span className="ms-2">
                                <Image
                                  alt="Spinner Icon"
                                  width={15}
                                  height={15}
                                  src="/spinner.svg"
                                />
                              </span>
                              reset
                            </div>
                          </div>
                        </div>

                        {/* Address List */}
                        {currentAddresses.map((address, index) => (
                          <div
                            key={index}
                            className="d-flex align-items-center p-2 mb-2"
                          >
                            <span className="me-2">
                              <Image
                                alt="Bookmark Icon"
                                width={20}
                                height={20}
                                src="/bookmark.svg"
                              />
                            </span>

                            {/* Address */}
                            <p className="mb-0">{address.fullAddress}</p>
                          </div>
                        ))}
                      <Pagination
                        totalItems={addresses.length}
                        itemsPerPage={addressesPerPage}
                        currentPage={currentPage}
                        paginate={paginate}
                      />
                    </div>
                      </div>

                  </div>

                  <div className="col-9">
                    <p className="mt-4">Analytic data of selected Address</p>
                    <div className="">
                      <div className="d-flex flex-wrap">

                      
                      <div className={`d-flex col-12 col-md-5 col-lg-3
                        justify-content-between align-items-center   px-4 py-3  mb-4 text-left ${styles.AnlyDelivered}`}>
                        <span>Message Delivered</span>
                        <span className="badge bg-light text-primary rounded-circle d-flex justify-content-center align-items-center p-2">
                          5
                        </span>
                      </div>
                      <div className={`d-flex col-12 col-md-5 col-lg-3 justify-content-between align-items-center  p-3 mb-4 text-left ${styles.AnlyResponse}`}>
                        <span>Message Response</span>
                        <span className="badge bg-light text-primary rounded-circle d-flex justify-content-center align-items-center p-2">
                          5
                        </span>
                      </div>
                      <div className={`d-flex col-12 col-md-5 col-lg-3 justify-content-between align-items-center  p-3 mb-4 text-left ${styles.anlyCall}`}>
                        <span>Call</span>
                        <span className="badge bg-light text-primary rounded-circle d-flex justify-content-center align-items-center p-2">
                          5
                        </span>
                      </div>
                      <div className={`d-flex col-12 col-md-5 col-lg-3 justify-content-between align-items-center  p-3 mb-4 text-left ${styles.AnlyCallRes}`}>
                        <span>Call</span>
                        <span className="badge bg-light text-primary rounded-circle d-flex justify-content-center align-items-center p-2">
                          5
                        </span>
                      </div>
                      </div>
                    </div>                   
                     <div className="d-flex gap-3 justify-content-between align-items-center">
                      {/* Left section with dropdown icon and text */}
                      <div className="d-flex flex-wrap align-items-center gap-2">
  {/* Bookmark Icon */}
  <span>
    <Image
      alt="Bookmark Icon"
      width={20}
      height={20}
      src="/Vector.png"
    />
  </span>

  {/* Text "Conversation From" */}
  <span className="text-nowrap">Conversation From</span>

  {/* Selected Number */}
  <span className="ms-2 text-nowrap">{selectedNumber}</span>

  {/* Dropdown Trigger */}
  <div className="dropdown ms-2">
    <span
      role="button"
      onClick={() => setIsOpen(!isOpen)}
    >
      <Image
        src="/dropdownicon.svg"
        alt="Dropdown Icon"
        width={22}
        height={10}
      />
    </span>

    {/* Dropdown Menu */}
    <ul className={`dropdown-menu ${isOpen ? "show" : ""}`}>
      {numbers.map((number, index) => (
        <li key={index}>
          <a
            href="#"
            className="dropdown-item"
            onClick={() => handleSelect(number)}
          >
            {number}
          </a>
        </li>
      ))}
    </ul>
  </div>
</div>


                      {/* Right section with search bar and icon below */}
                      <div className="text-center me-2">
                        <span>
                          <input
                            type="text"
                            className="form-control border-radius mb-1 text-center"
                            placeholder="Search To"
                            aria-label="Search"
                          />
                        </span>
                      </div>
                    </div>

                    <div className="container py-3">
                      {/* Chatbox Container */}
                      <div className={`card p-3`}>
                        {/* Outer container to provide padding and spacing */}
                        <div className={`p-3 rounded-3 ${styles.chatBox}`}>
                          <div className="text-center">
                            To: 987654324
                            <span className="">
                              <Image
                                alt="Bookmark Icon"
                                width={20}
                                height={20}
                                src="/bookmark.svg"
                              />
                            </span>
                          </div>
                          {/* Chat Content */}
                          <div className="d-flex flex-column justify-content-end">
                            {/* Incoming Message */}
                            <div className="d-flex flex-column align-items-start mb-3">
                              <div className="p-2 bg-light rounded-3 shadow-sm">
                                <p className="mb-0">Hey, how are you?</p>
                              </div>
                              <small className="text-muted">10:30 AM</small>
                            </div>

                            {/* Outgoing Message */}
                            <div className="d-flex flex-column align-items-end mb-3">
                              <div className="p-2 bg-secondary text-white rounded-3 shadow-sm">
                                <p className="mb-0">
                                  I'm good, thanks! What about you?
                                </p>
                              </div>
                              <small className="text-muted">10:31 AM</small>
                            </div>

                            {/* Incoming Message */}
                            <div className="d-flex flex-column align-items-start mb-3">
                              <div className="p-2 bg-light rounded-3 shadow-sm">
                                <p className="mb-0">
                                  I'm doing great, thanks for asking!
                                </p>
                              </div>
                              <small className="text-muted">10:32 AM</small>
                            </div>

                            {/* Outgoing Message */}
                            <div className="d-flex flex-column align-items-end mb-3">
                              <div className="p-2 bg-secondary text-white rounded-3 shadow-sm">
                                <p className="mb-0">Glad to hear that!</p>
                              </div>
                              <small className="text-muted">10:33 AM</small>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
