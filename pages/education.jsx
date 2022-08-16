/* eslint-disable react/no-unknown-property */
export default function Education() {
  return (
    <div class='container container-sm pt-5' id='Education_nav'>
      <p className='display-5 text-center  text-uppercase p-4 border border-3 border-warning shadow-lg'>
        {" "}
        here is where we will display information and links we think important
        to taking care of your chicks
      </p>
      <p className='display-6 p-4'>
        Check out this article for steps on how to begin raising chickens in our
        backyards
        <a
          class='text-uppercase'
          href='https://www.purinamills.com/chicken-feed/education/detail/steps-on-how-to-start-raising-chickens'>
          {" "}
          just click here
        </a>
      </p>
      <p className='fs-3'>
        And
        <a
          class='text-uppercase text-danger text-decoration-none'
          href='https://www.amazon.com/gp/most-wished-for/lawn-garden/4619362011'>
          {" "}
          here{" "}
        </a>
        we have the most popular items placed on a wishlist for those home
        cluckers
      </p>
    </div>
  );
}
