import React from "react";

export function Resume(){
    return(
    <div id="resume" class="row section-wrapper">
        <div class="section-title-holder">
          <h2 class="section-title">Resume</h2>
        </div>
        <div class="content-section">
          <h4>
            Here you should be able to download an updated version of my CV
          </h4>
          <div>
            <button id="resume-download" class="btn btn-primary">
              <a
                href="./assets/files/CV_DanielMoreno_2022.pdf"
                download="CV_DanielMoreno_2022.pdf"
                target="_blank"
                >Download! <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-box-arrow-down" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M3.5 10a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 0 0 1h2A1.5 1.5 0 0 0 14 9.5v-8A1.5 1.5 0 0 0 12.5 0h-9A1.5 1.5 0 0 0 2 1.5v8A1.5 1.5 0 0 0 3.5 11h2a.5.5 0 0 0 0-1h-2z"/>
                    <path fill-rule="evenodd" d="M7.646 15.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 14.293V5.5a.5.5 0 0 0-1 0v8.793l-2.146-2.147a.5.5 0 0 0-.708.708l3 3z"/>
                  </svg> </a>
            </button>
          </div>
        </div>
      </div>
    )
}