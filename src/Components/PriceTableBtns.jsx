import React from 'react'
import PrimaryButton from './PrimaryButton'

function PriceTableBtns({dollarAmount, accountAmt, getFundedLink}) {
  return (
    <div className="headingContainer md:mt-12 mt-8 flex flex-col items-center justify-center md:gap-10 gap-8">
            <h3 class="text-center lg:text-6xl md:text-4xl text-[32px] font-bold text-[var(--color-primary)]">
              <span className="text-white">{dollarAmount}</span> for
              <span className="text-white"> {accountAmt} </span> Account
            </h3>
            <div className="flex md:flex-row flex-col md:gap-6 gap-4">
              <div
          className={`${
            dollarAmount === "$375" && accountAmt === "50K" ? "hidden" : "block"
          }`}>
          <PrimaryButton  text="SIGNUP NOW" link="https://fundedlakedashboard.propaccount.com/en/sign-up" />
              </div>
              <PrimaryButton text="GET FUNDED" link={getFundedLink} />
            </div>
          </div>
  )
}

export default PriceTableBtns