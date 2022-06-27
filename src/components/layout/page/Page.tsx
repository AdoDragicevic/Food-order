import Nav from "../nav/Nav";
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