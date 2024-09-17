import React from "react";
import Link from "next/link";
export default function Contacto() {
  return (
    <div>
      <div>
        {" "}
        <h1>Contacto</h1>
      </div>
      <button>
        <Link href="/">
          <b>PROXIMAMENTE</b> Go back to home
        </Link>
      </button>
    </div>
  );
}
