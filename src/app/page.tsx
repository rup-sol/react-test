import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./Navbar/navbar";
import Dashboard from "./Dashboard/dashboard";

export default function Home() {
  return (
    <>
      <Dashboard />
    </>
  );
}
