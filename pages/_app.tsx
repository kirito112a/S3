/* eslint-disable @next/next/no-sync-scripts */
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '@/components/layout'
import Navbar from '@/components/navbar'
import Head from 'next/head'
import Script from 'next/script'
import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";

export default function App({ Component, pageProps }: AppProps) {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <React.StrictMode>

        <Component {...pageProps} />

        <Head>
          <title>PGA Auto 180</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
            crossOrigin="anonymous"
          />

          <link rel="icon" type="image/PNG" href="/Logo.png" />

          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>


        </Head>
      </React.StrictMode>,


    </>
  );
}


