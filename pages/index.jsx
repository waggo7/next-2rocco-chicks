/* eslint-disable react/no-unknown-property */
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.css";

import Photo from "../public/images/zia.jpg";
import Store from "./stores";
export default function HomePage() {
  return (
    <div>
      <div class='mt-5'>
        <br />
        <br />
        <div class='container text-center'>
          <h1 class='display-3 fw-bold text-uppercase '>
            Welcome to Lisa&apos;s Cute Coup
          </h1>
          <p
            class='fs-5 text-uppercase text-center p-3'
            style={{ width: "100%" }}>
            I love chickens so much i want to share it with anyone who is
            willing! check out my site to see what you like.
          </p>
        </div>
      </div>
      <div class='text-center float-right'>
        <Image src={Photo} alt='zia_here' width='100%' height='100%' />
      </div>
      <Store />
    </div>
  );
}
