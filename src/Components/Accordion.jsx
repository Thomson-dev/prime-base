/** @format */

import React from "react";
const data = [
  {
    qustion: "What Is Crypto Renting?",
    content:
      "Crypto renting works like any other renting business: someone pays you for the use of something, for example, a property, land, or a vehicle. In our case, you rent your Crypto to Prime Base for a predefined period, sign a rental agreement, and Prime Base pays you for the use of your Crypto.",
  },
  {
    qustion: "Is Crypto Renting Just like a Crypto Saving Account?",
    content:
      "Crypto renting works like any other renting business: someone pays you for the use of something, for example, a property, land, or a vehicle. In our case, you rent your Crypto to Prime Base for a predefined period, sign a rental agreement, and Prime Base pays you for the use of your Crypto.",
  },

  {
    qustion: "Why Rent Your Crypto?",
    content:
      "Many people buy Crypto as an investment and keep it in a digital wallet somewhere, without any use and only as an investment. Now you can earn a profit using that Crypto and without selling it!",
  },

  {
    qustion: "What Fees Does Prime Base Change For Crypto Rating?",
    content: "None! There are no fees for Crypto Renting.",
  },

  {
    qustion: "Will I Be Taxed On My Rental Income?",
    content:
      "In most cases, a taxpayer must report all rental income on their tax return.",
  },
];
const Accordion = () => {


  return (
    <div>
  {data.map((item, i)=>(
    <div className="">
      <div className="py-10 border-t-2  flex justify-between items-center ">
        <h1 className="text-[1.1rem] tracking-wider font-bold">{item.qustion}</h1>
      <span>+</span>
      </div>
      <div className=" content ">
        {item.content}
      </div>
    </div>
  ))}
    </div>
  );
};

export default Accordion;
