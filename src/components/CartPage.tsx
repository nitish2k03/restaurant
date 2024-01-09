import React from "react";
import Image from "next/image";
const CartPage = () => {
  return (
    <div className="md:flex h-[100vh] items-center">
      <div className="flex flex-col text-red-400 text-sm sm:text-lg font-bold flex-1">
        <div className="h-[20vh] flex w-full items-center justify-around">
          <div className="relative h-2/3 w-1/3">
            <Image
              src="/temporary/p1.png"
              alt=""
              fill
              className="object-contain"
            />
          </div>
          <div>
            <div>SICILLIAN PIZZA</div>
            <div>Large</div>
          </div>
          <div>$24.90</div>
          <button>X</button>
        </div>
        <div className="h-[20vh] flex w-full items-center justify-around">
          <div className="relative h-2/3 w-1/3">
            <Image
              src="/temporary/p2.png"
              alt=""
              fill
              className="object-contain"
            />
          </div>
          <div>
            <div>BACON DELUXE</div>
            <div>Extra BBQ</div>
          </div>
          <div>$29.90</div>
          <button>X</button>
        </div>
        <div className="h-[20vh] flex w-full items-center justify-around">
          <div className="relative h-2/3 w-1/3">
            <Image
              src="/temporary/p4.png"
              alt=""
              fill
              className="object-contain"
            />
          </div>
          <div>
            <div>P. ARRABBIATA</div>
            <div>Medium</div>
          </div>
          <div>$26.90</div>
          <button>X</button>
        </div>
      </div>
      <div className="bg-fuchsia-100 w-full md:w-1/3  flex justify-center flex-col text-red-400 p-5 flex-initial md:h-full">
        <div className="flex justify-between">
          <div>Subtotal(3 items)</div>
          <div>$81.70</div>
        </div>
        <div className="flex justify-between">
          <div>Service Cost</div>
          <div>$0.00</div>
        </div>
        <div className="flex justify-between">
          <div className="flex justify-between">Delivery Cost</div>
          <div className="text-green-400">FREE !</div>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between">
          <div>Total(INCL GST)</div>
          <div>$81.70</div>
        </div>
        <button className="bg-red-400 text-white font-bold rounded  p-2 mt-4 self-end ">
          Checkout
        </button>
      </div>
    </div>
  );
};
export default CartPage;
