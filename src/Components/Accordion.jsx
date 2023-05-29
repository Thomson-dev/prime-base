/** @format */

import React, { useState } from "react";

import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { icons } from "react-icons";
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
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };

  return (
    <div>
      {data.map((item, i) => (
        <div className="border-b-2">
          <div
            className="py-10  cursor-pointer  flex justify-between items-center "
            onClick={() => toggle(i)}
          >
            <h1 className="md:text-[1.1rem] text-[18px] tracking-wider font-medium">
              {item.qustion}
            </h1>
            <span>
              {selected === i ? (
                <IoIosArrowUp className="font-extrabold" />
              ) : (
                <IoIosArrowDown className="font-extrabold" />
              )}
            </span>
          </div>
          <div
            className={
              selected === i
                ? " content show pb-10 md:leading-7 leading-6 text-[17px] tracking-wide font-normal"
                : "content text-[17px] leading-[30px] tracking-wide font-normal"
            }
          >
            {" "}
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
