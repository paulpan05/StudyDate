/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import authLayoutStyles from "../styles/auth-layout.module.scss"

interface AuthLayoutProps {
  readonly children: React.ReactNode | readonly React.ReactNode[]
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <>
      <main>
        <div className={authLayoutStyles.centerContent}>
          {children}
        </div>
      </main>
      <footer>
        © {new Date().getFullYear()}, Built with
          {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </>
  )
}

export default AuthLayout
