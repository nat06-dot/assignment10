import styles from "./topmenu.module.css";
import Image from "next/image";
import TopMenuItem from "./TopMenuItem";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";

export default async function Topmenu() {
  const session = await getServerSession(authOptions);

  return (
    <div
      className={styles.menucontainer}
      style={{ display: "flex", alignItems: "center", flexWrap: "nowrap" }}
    >
      <Image
        src={"/img/logo.png"}
        className={styles.logoimg}
        alt="logo"
        width={0}
        height={0}
        sizes="100vh"
      />
      <TopMenuItem title="Booking" pageRef="/booking" />
      <TopMenuItem title="My Booking" pageRef="/mybooking" />
      {session ? (
        <TopMenuItem title="Sign-Out" pageRef="/api/auth/signout" />
      ) : (
        <TopMenuItem title="Sign-In" pageRef="/api/auth/signin" />
      )}
    </div>
  );
}
