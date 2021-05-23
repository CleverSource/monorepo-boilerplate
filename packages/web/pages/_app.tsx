import React from "react";
import App from "next/app";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props as any;
    return (
      <>
        <Component {...pageProps} />
      </>
    );
  }
}

export default MyApp;
