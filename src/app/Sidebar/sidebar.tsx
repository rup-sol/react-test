import styles from '../Sidebar/sidebar.module.css';
import Image from 'next/image';
import Link from 'next/link'; // Import Link from Next.js

function Sidebar() {
  const handleLogout = () => {
    console.log("Logout clicked"); // Debugging line
    localStorage.removeItem("authToken");
    window.location.href = "/"
  };
  return (
    <>
      <nav className={`navbar bg-white position-fixed vh-100 p-2 d-flex flex-column ${styles.bgCustom}`}>
        <div className="d-flex flex-column justify-content-center align-items-center flex-grow-1 mt-4">
          <Image
            src="/upicon.svg"
            alt="Logo"
            className="logo2"
            width={50}
            height={50}
          />
          <Link href="/Dashboard" legacyBehavior>
            <a className="nav-link mb-4">Dashboard</a>
          </Link>

          <Image
            src="/mapingi.svg"
            alt="Logo"
            className="logo2 mt-4"
            width={50}
            height={50}onClick={handleLogout}
          />

          <Link href="/conversationmapping" legacyBehavior>
            <a className="nav-link">Map Address</a>
          </Link>
        </div>

        <div className="d-flex flex-column justify-content-end align-items-end flex-grow-1 mb-4 fs-6">
  <button className="btn btn-link p-0 text-decoration-none" onClick={handleLogout}>
    Logout
  </button>
</div>

      </nav>
    </>
  );
}

export default Sidebar;
