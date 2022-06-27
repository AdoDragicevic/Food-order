import Nav from "../nav/Nav";
import Modal from "../modal/Modal";
import { ReactNode } from "react";

const Page = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Nav />
      {children}
    </>
  )
}

export default Page;