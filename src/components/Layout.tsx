import { ChildrenProps } from "../types/types"
import { Footer } from "./Footer"
import { Header } from "./Header"

export const Layout = ({children}: ChildrenProps) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
  )