import React from "react";

export function Header() {
    return(
        <header>
       <nav>
        <div class="nav-wrapper d-flex justify-content-between align-items-center">
          <div>
            <h1>Daniel Moreno - SDET</h1>
          </div>
          <div>
            <ul class="nav menu">
              <li class="nav-item">
                <a class="nav-link" href="#about-me">About Me</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#contact-me">Contact Me</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#work">Work</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#resume">Resume</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    )
}