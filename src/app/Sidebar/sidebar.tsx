import styles from '../Sidebar/sidebar.module.css';
import Image from 'next/image';

function Sidebar() {
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
        <a className="nav-link mb-4" href="#">Dashboard</a>
        <Image
              src="/mapingi.svg"
              alt="Logo"
              className="logo2 mt-4"
              width={50}
              height={50}
            />
        <a className="nav-link" href="#">Map Address</a>
      </div>
      <div className='d-flex flex-column justify-content-end aligh-items-end flex-grow-1 mb-4 fs-6'>
        Logout

      </div>
    </nav>
    </>
  );
}

export default Sidebar;
