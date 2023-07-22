import React from "react";
import "./HeaderComponent.css";

export function HeaderComponent() {
  return (
    <div className="navParent">
      <a href="/">
        <img
          className="logo"
          src="https://i0.wp.com/logotaglines.com/wp-content/uploads/2021/01/Swiggy-Logo-Tagline-Slogan.jpg?fit=1200%2C900&ssl=1"
          alt="Not Loaded"
        />
      </a>
      <ul className="nav-items">
        <li>Home</li>
        <li>About</li>
        <li>Contacts</li>
        <li>Cart - 0</li>
      </ul>
    </div>
  );
}
