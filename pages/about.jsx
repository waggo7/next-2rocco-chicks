/* eslint-disable react/no-unknown-property */
import Image from "next/image";

export default function About() {
  return (
    <div id='aboutusdiv' class='text-center'>
      <div className='container-fluid text-center row-cols-1'>
        <Image
          src='/images/lisaClark.jpeg'
          alt='grandma and grandson'
          width='200%'
          height='200%'
        />
        <p className='h1'>anthony suck many cock</p>
        {/* <p class="fs-12 text-center"> Lisa Torraco has been a practicing lawyer for 29 years. She is an aggressive and experienced litigator representing clients in both federal and state court. Her practice includes criminal defense investigations, pre-indictment preventative work, criminal appeals and criminal litigation in courts throughout the Southwest. She strives to win. Her practice includes litigation of matters involving murder, kidnapping, racketeering, drug trafficking, habeas corpus matters, and other crimes and appeals. In addition, Lisa Torraco represents individuals and corporations in administrative matters related to criminal prosecutions, such as child abuse, CYFD termination of parental rights and related matters, civil and domestic violence restraining orders, educational discipline matters, and taxation and revenue motor vehicle litigation.</p> */}
      </div>
    </div>
  );
}
