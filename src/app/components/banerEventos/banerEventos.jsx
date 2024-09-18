"use client";
import React, { useState, useRef } from "react";
import "./BanerE.css"; 

export default function BannerEventos() {
    return (<div className="m-10 p-5  rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-white-300 mb-4 text-center">
       Eventos locales, Fiestas provinciales y Notas de interes      </h1>
        <img
          className="w-full h-auto rounded-lg border-4 border-yellow-300 shadow-xl"
          src={`/eventos/bannerE.jpg`}
          alt="Celebración"
        />
      </div>)
     
  
}
