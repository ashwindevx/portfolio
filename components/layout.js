import Paper from "../public/paper.jpg";
import Image from "next/image";

export default function Layout({ children }) {
  return (
    <>
      <div className="h-full">
        <div className="relative w-fit"></div>
        <main>{children}</main>
      </div>
    </>
  );
}
