/* eslint-disable react/no-unknown-property */
import "bootstrap/dist/css/bootstrap.css";
import Education from "./education";
import Image from "next/image";
import Link from "next/link";
import products from "../products.json";
export default function Store() {
  return (
    <div class='container'>
      <div class='row rows-col-2 ' id='chickdiv'>
        {products.map((product) => {
          return (
            <div
              class='card d-grid text-center border-3 border-warning m-4 '
              style={{ height: "500px", width: "500px" }}
              id='chickencontainer'
              key={product.id}>
              <Image
                class='card-img '
                style={{ opacity: "72%" }}
                src={product.image}
                alt='imagine a chicken here'
                width='150px'
                height='150px'
              />
              <div class='card-img-overlay '>
                <h1 class='card-title pb-5 text-capitalize'>{product.title}</h1>
                {/* <div class='card-body  text-center ' id='prod_disc'> */}

                <p class='card-text  bg-light opacity-75 shadow shadow-lg collapse-horizontal'>
                  {product.description}
                  <br />
                </p>
                <a href='./education' class='btn-primary text-capitalize m-3'>
                  or check out our infomational page{" "}
                </a>
                <a
                  id='addbtn'
                  class='btn mt-4 snipcart-add-item btn btn-primary'
                  data-item-id={product.id}
                  data-item-image={product.image}
                  data-item-name={product.title}
                  data-item-price={product.price}>
                  Add to Cart
                </a>
                {/* </div> */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
// <div class=' text-center' id='storecontainer'>
//   <div
//     id='storeheader'
//     className='fs-2 text-center border border-4 text-uppercase text-dark text-opacity-15 bg-dark bg-opacity-25'>
//     {" "}
//     Here are the lovely ladies we have available
//   </div>

//   <div class='card-group' key={product.id}>
//     <div class='card m-3 text-center pt-2 border border-2 ' id='cardId'>
//       <Image
//         class='card-img-top '
//         src={product.image}
//         alt='product.title'
//         width='100%'
//         height='100%'
//       />
//       <div class='card-body'>
//         <h1 class='card-title pb-2'>{product.title}</h1>

//         <p class='card-text pb-2 text-uppercase'>
//           {product.description}
//         </p>
//         <p class='card-text'>{product.price}</p>

//         <button
//           className='snipcart-add-item btn btn-primary pb-2'
//           data-item-id={product.id}
//           data-item-image={product.image}
//           data-item-name={product.title}
//           data-item-price={product.price}>
//           Add to Cart
//         </button>
//       </div>
//     </div>

//   </div>
