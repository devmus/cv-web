import React from 'react'
import { Header } from "../components/Header";
import { PageOne } from "../components/PageOne/PageOne";
import { PageTwo } from "../components/PageTwo/PageTwo";

export const Home = () => {
  return (
    <>
      <Header />
      <div className="page-container">
      <PageOne />
      <PageTwo />
      </div>
    </>
  )
}
