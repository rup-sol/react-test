import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons";
import Sidebar from "../Sidebar/sidebar";
import styles from "./navbar.module.css"

export default function Navbar() {
  return (
    <>
      <Sidebar />
      <nav className="navbar navbar-light">
        <div className="container-fluid">
          <div className="d-flex align-items-center justify-content-between w-100">

            {/* Left Section */}
            <div className="d-flex align-items-center">

              {/* Sidebar Toggle */}
              <div className="d-flex justify-content-center align-items-center bg-white m-2 p-2 rounded-circle">
                <span className="navbar-toggler-icon"></span>
              </div>

              {/* Brand/Logo */}
              <div className={`ms-2 ms-md-5 mt-1 fs-5 border-bottom ${styles.openphone}`}>
                OpenPhone
              </div>

              {/* Title */}
              <div className="ms-5 d-flex align-items-center mt-5 px-5 ">
                <Image
                  src="/check.png"
                  alt="Dropdown Icon"
                  width={25}
                  height={25}
                />
                <h5 className="mt-1 ms-4">Comprehensive view of All Address</h5>
              </div>
            </div>

            {/* Right Section */}
            <div className="d-flex align-items-center me-4">

              {/* User Icon and Name */}
              <div className="d-flex align-items-center me-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="bi bi-person-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                  <path
                    fillRule="evenodd"
                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                  />
                </svg>
                <span className="ms-3">userName</span>
              </div>

              {/* Notification Bell */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-bell m-2 rounded-circle bg-light"
                viewBox="0 0 16 16"
              >
                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6" />
              </svg>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
