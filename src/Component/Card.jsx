import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import patternDesktop from "../assets/pattern-divider-desktop.svg";
import patternMobile from "../assets/pattern-divider-mobile.svg";
import dice from "../assets/icon-dice.svg";
import { API_URL } from "../Util/api";
import { motion } from "framer-motion";

const Card = () => {
    const [id,setId] = useState(0)
    const [quote,setQuote] = useState("")

    const generateAdvice = () =>{
        fetch(API_URL)
        .then(res => res.json())
        .then(data => {
            setId(data.slip.id);
            setQuote(data.slip.advice)
            })
            .catch((err)=>console.log(err))
    } 
    useEffect(() => {
        generateAdvice();
      }, []);
    
      return (
        <motion.div
          initial={{
            opacity: 0,
            translateX: -500,
          }}
          animate={{
            opacity: 1,
            translateX: 0,
          }}
          transition={{
            delay: 0.5,
            x: { duration: 1 },
            default: { ease: "linear" },
          }}
          whileHover={{
            translateY: 20,
            transition: { duration: 0.3 },
          }}
          id="card"
          className="bg-neutral-darkGrayishBlue cursor-pointer flex flex-col justify-center w-[90%] h-[350px] md:w-[500px] md:h-[320px] px-[20px] py-[40px] text-center rounded-xl shadow-xl relative"
        >
          <p className="mb-4 uppercase tracking-[4px] text-primary-neonGreen text-[14px]">
            Advice #{id}
          </p>
          <div className="advice">
            <FontAwesomeIcon
              className="text-primary-lightCyan -translate-y-2"
              icon={faQuoteLeft}
            />
            <span className="text-[28px] font-[800] text-primary-lightCyan">
              {quote}
            </span>
            <FontAwesomeIcon
              className="text-primary-lightCyan -translate-y-2"
              icon={faQuoteRight}
            />
          </div>
          <img
            className="mt-6 hidden md:block mx-auto"
            src={patternDesktop}
            alt="pattern-image"
          />
          <img
            className="mt-6 md:hidden mx-auto"
            src={patternMobile}
            alt="pattern-image"
          />
          <button
            onClick={generateAdvice}
            className="absolute left-[50%] -translate-x-[50%] -bottom-[28px] md:-bottom-[25px] bg-primary-neonGreen w-[65px] h-[65px] md:w-[50px] md:h-[50px] rounded-full flex items-center justify-center cursor-pointer transition-all duration-200 hover:shadow-[0_0_20px_1px_rgba(82,255,168,1)]"
          >
            <img
              className="w-[25px] md:w-[20px] animate-spin"
              src={dice}
              alt="dice"
            />
          </button>
        </motion.div>
      );
    };
    
    export default Card;

