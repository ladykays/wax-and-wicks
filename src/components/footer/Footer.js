import React from "react";
import "./footer.css"

export const Footer = () => {
  return (
    <div className="footer w-full mt-10 pt-20 pb-20 bg-stone-100">
      <div className="flex justify-center">
        <ul className="flex items-center sm:flex-row flex-col text-md text-amber-900">
          <li className="list-item ">
           <a href="https://github.com/ladykays">
            <i class="fa-brands fa-github mr-1"></i>Ladykays</a> 
          </li>
          <li className="list-item ">
           <a href="https://github.com/Jessie93">
            <i class="fa-brands fa-github mr-1"></i>Jessie93</a> 
          </li>
          <li className="list-item ">
           <a href="https://github.com/ffionerin">
            <i class="fa-brands fa-github mr-1"></i>Ffionerin</a> 
          </li>
          <li className="list-item mr-0">
           <a href="https://github.com/Temioye">
            <i class="fa-brands fa-github mr-1"></i>Temioye</a> 
          </li>
        </ul>
      </div>
      <div className="copyright p-10 text-gray-400">
          <p>© Copyright 2023</p>
      </div>
    </div>
  )
}
