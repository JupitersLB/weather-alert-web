import React, { FC } from 'react'
import Head from 'next/head'

export const LayoutBase: FC = ({ children }) => {
  return (
    <>
      <Head>
        <title>Weather Alert Web App</title>
        <meta
          name="description"
          content="An app to provide weather alerts based on your desired destinations"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </>
  )
}