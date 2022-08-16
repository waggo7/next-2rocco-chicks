/* eslint-disable react/no-unknown-property */
import Link from "next/link";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.css";
import Photo from "../public/images/zia.jpg";
import About from "../pages/about";
export default function NavBar() {
  return (
    <nav
      class='navbar navbar-expand sticky-top justify-self-start bg-dark bg-opacity-80'
      id='topnav'>
      <div class='container align-items-center collapse'>
        <div class='navbar navbar-brand' id='navbarcontainer'>
          <Image
            class='navbar-header btn '
            src={Photo}
            alt='zia_here'
            width='100%'
            height='100%'
          />

          <div class='navbar-brand '>
            <Link href='/'>
              <a class='fs-3 text-decoration-none m-2 p-2 '>Home</a>
            </Link>
            <Link href='/about'>
              <a class='fs-3 text-decoration-none m-2'>About Us</a>
            </Link>

            {/* <Link
                            href='/stores'>
                            <a class='fs-3 text-decoration-none m-4' >
                            Chickens</a>
                          </Link> */}
            <Link href='/education'>
              <a class='fs-3  text-decoration-none m-4'>Education</a>
            </Link>
          </div>
        </div>
        <form role='search' class='flex' id='search'>
          <input type='search' id='searchinput' class='form-control-lg' />

          <button
            class='btn btn-outline-warning m-2'
            id='search-btn'
            type='submit'>
            Search
          </button>
        </form>
      </div>
    </nav>

    // </div>
  );
}
