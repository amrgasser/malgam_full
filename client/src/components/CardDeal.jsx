import React from "react";
import styled from "styled-components";

import { card } from "../assets";
import { expectations } from "../constants/expectations";
import styles, { layout } from "../style";
import Button from "./Button";
import { Grid, Tooltip, Typography, tooltipClasses } from "@mui/material";

// const HtmlTooltip = styled(({ className, ...props }) => (
//   <Tooltip {...props} classes={{ popper: className }} />
// ))(({ theme }) => ({
//   [`& .${tooltipClasses.tooltip}`]: {
//     backgroundColor: '#f5f5f9',
//     color: 'rgba(0, 0, 0, 0.87)',
//     maxWidth: 220,
//     fontSize: '12px',
//     border: '1px solid #dadde9',
//   },
// }));

const CardDeal = () => (
  <section className={`${layout.section} gap-10 lg:gap-20`}>
    <div className={layout.sectionInfo}>
      <div className="">
        <h2 className={`${styles.paragraph} text-center `}>
          What you can expect from MCVR as standard:
        </h2>
        <div className="flex flex-row justify-between w-full">
          {
            expectations.map((e, index) => {
              return (
                <ul key={index} className="bg-gray2-gradient m-[2px] rounded-[10px] px-4 py-3">
                  <Tooltip title={`${e.exlpanation}`} >
                    <p className={`${styles.paragraph} text-[12px]`}>{e.expectation}</p>
                  </Tooltip>
                </ul>
              )
            })
          }
        </div>
        <h2 className={`${styles.paragraph} text-center `}>
          Exceptional customer service, competitive pricing and peace of mind are all things that will come as standard with every interaction with us.
        </h2>
        <p className={`${styles.paragraph} mt-5 text-center`}>
          We don’t just enjoy what we do, we LOVE it! Click <span href="/about">here </span>to learn more about us and our business.
        </p>
      </div>
      {/* <div className={layout.sectionInfo}>
      <h2 className={`${styles.paragraph} text-center `}>
        What you can expect from MCVR as standard:
      </h2>
      <div className="flex flex-row">
        {
          expectations.map((e, index) => {
            return (
              <ul key={index} className="bg-gray2-gradient m-[2px] rounded-[10px] px-4 py-3">
                <Tooltip title={`${e.exlpanation}`} >
                  <p className={`${styles.paragraph} text-[12px]`}>{e.expectation}</p>
                </Tooltip>
              </ul>
            )
          })
        }

      </div> */}
    </div>
  </section>
);

export default CardDeal;
