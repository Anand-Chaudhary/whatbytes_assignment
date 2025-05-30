"use client"

import React from 'react'
import { Facebook, Twitter, Instagram } from 'lucide-react'

const Fotter = () => {
  return (
    <footer className="bg-[#0a2140] text-white px-6 py-8 flex flex-wrap justify-around items-start">
      {/* Filters Section */}
      <div className="flex-1 min-w-[150px] mb-6 max-w-xs">
        <h2 className="text-lg font-semibold mb-2">Filters</h2>
        <ul className="space-y-1">
          <li><a href="#" className="hover:underline">All</a></li>
          <li><a href="#" className="hover:underline">Electronk</a></li>
        </ul>
        <p className="text-sm mt-4">© 2024 American</p>
      </div>

      {/* About Us Section */}
      <div className="flex-1 min-w-[150px] mb-6 max-w-xs">
        <h2 className="text-lg font-semibold mb-2">About Us</h2>
        <ul className="space-y-1">
          <li><a href="#" className="hover:underline">About Us</a></li>
          <li><a href="#" className="hover:underline">Contact</a></li>
        </ul>
      </div>

      {/* Follow Us Section */}
      <div className="flex-1 min-w-[150px] mb-6 max-w-xs">
        <h2 className="text-lg font-semibold mb-2">Follow Us</h2>
        <div className="flex gap-4 text-2xl ">
          <a href="#" className="bg-blue-500 h-9 w-9 flex justify-center items-center rounded-full"><Facebook /></a>
          <a href="#" className="bg-blue-500 h-9 w-9 flex justify-center items-center rounded-full"><Twitter /></a>
          <a href="#" className="hover:text-pink-400 h-9 w-9 flex justify-center items-center bg-blue-500 rounded-full"><Instagram /></a>
        </div>
      </div>
    </footer>
  )
}

export default Fotter
