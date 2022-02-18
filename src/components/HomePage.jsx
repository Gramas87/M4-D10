import {container, row, col,} from "bootstrap"

const HomePage = () =>{
    return(
     <>
      <div class="container-fluid">
        {/* <!-- sidebar section --> */}
        <div class="row">
          <div class="col-2 m-sidebar text-white">
            <aside class="d-flex flex-column">
              <div class="d-flex mt-1">
                <i class="bi bi-spotify m-bi-spotify"></i>
                <span
                  class="text-1-three-rem fw-bold ms-1 d-flex justify-content-center align-items-center"
                  >Spotify</span
                >
              </div>
              <div class="d-flex mt-4">
                <i class="bi bi-house-fill m-bi-house-fill"></i>
                <span
                  class="fw-bold ms-1 m-text-small d-flex justify-content-center align-items-center"
                  >Home</span
                >
              </div>
              <div class="d-flex mt-1">
                <i class="bi bi-search m-bi-search mid-gray-text"></i>
                <span
                  class="ms-1 mid-gray-text m-text-small d-flex justify-content-center align-items-center"
                  >Search</span
                >
              </div>
              <div class="d-flex align-items-center mt-1 mid-gray-text">
               
                <span
                  class="ms-1 m-text-small d-flex justify-content-center align-items-center"
                  >Your library</span
                >
              </div>
              <div class="d-flex mt-4">
                <i class="mid-gray-text bi bi-plus-square m-bi-plus-square"></i>
                <span
                  class="mid-gray-text ms-1 m-text-small d-flex justify-content-center align-items-center"
                  >Create playlist</span
                >
              </div>
              <div class="d-flex mt-1 mid-gray-text">
                
                <span
                  class="ms-1 mb-4 -text-small d-flex justify-content-center align-items-center"
                  >Liked songs</span
                >
              </div>
              <span class="ml-0 mt-1 m-text-smaller dark-gray-text"
                >Song 1</span
              >
              <span class="ml-0 mt-1 m-text-smaller dark-gray-text"
                >Song 2</span
              >
              <span class="ml-0 mt-1 m-text-smaller dark-gray-text"
                >Song 3</span
              >
              <span class="ml-0 mt-1 m-text-smaller dark-gray-text"
                >Song 4</span
              >
              <span class="ml-0 mt-1 m-text-smaller dark-gray-text"
                >Song 5</span
              >
              <div class="d-flex align-items-baseline">
                <span class="m-truncate ml-0 mt-1 m-text-smaller dark-gray-text"
                  >One hell of a song name</span
                ><i
                  class="bi bi-people-fill m-bi-people-fill dark-gray-text ms-1"
                ></i>
              </div>
              <span class="ml-0 mt-1 m-text-smaller dark-gray-text"
                >Song 6</span
              >
              <span class="ml-0 mt-1 m-text-smaller dark-gray-text"
                >Song 7</span
              >
              <div class="d-flex align-items-baseline">
                <span class="m-truncate ml-0 mt-1 m-text-smaller dark-gray-text"
                  >One hell of a song name</span
                ><i
                  class="bi bi-people-fill m-bi-people-fill dark-gray-text ms-1"
                ></i>
              </div>
              <span class="ml-0 mt-1 m-text-smaller dark-gray-text"
                >Song 8</span
              >
              <div class="d-flex align-items-baseline">
                <span class="m-truncate ml-0 mt-1 m-text-smaller dark-gray-text"
                  >One hell of a song name</span
                ><i
                  class="bi bi-people-fill m-bi-people-fill dark-gray-text ms-1"
                ></i>
              </div>
              <div class="d-flex align-items-baseline">
                <span class="m-truncate ml-0 mt-1 m-text-smaller dark-gray-text"
                  >One hell of a song name</span
                ><i
                  class="bi bi-people-fill m-bi-people-fill dark-gray-text ms-1"
                ></i>
              </div>
              <div class="d-flex align-items-baseline">
                <i
                  class="bi bi-arrow-down-circle m-bi-arrow-down-circle-fill dark-gray-text me-1"
                ></i>
                <span class="fw-bold ml-0 mt-1 m-text-smaller dark-gray-text"
                  >Install app</span
                >
              </div>
            </aside>
          </div>

          {/* <!-- main section --> */}

          <div class="col-10 main-section px-0">
          
            <div class="mx-3">
            <div class="top-title">Good Morning</div>
             {/* <!-- this is where the playlist container start --> */}

            <div class="row mb-3">
              <div class="col-md d-flex pl-0 ml-3 card-top align-items-center">   
                <img src="assets/proxima.png" class="card-top-img" alt="" />
                <div
                  class="card-top-content2 line-clamp ml-3"
                >
                (Livestream) Interstellar Missions to Proxima centaury
                </div>
               
              </div>

              <div class="col-md d-flex pl-0 ml-3 card-top align-items-center">
                <img src="assets/instr.png" alt="" />
                <div
                  class="d-flex align-items-center card-top-content line-clamp ml-3"
                >
                  Instrumental
                </div>
                <img src="assets/playhoverbtn.png" class="playhover" alt="" />
              </div>
              <div class="col-md d-flex pl-0 ml-3 card-top align-items-center">
                <img src="assets/Ludwig.png" alt="" />
                <div
                  class="d-flex align-items-center card-top-content line-clamp ml-3"
                >
                  Ludwig van Beethoven
                </div>
                <img src="assets/playhoverbtn.png" class="playhover" alt="" />
              </div>
              <div class="col-md d-flex pl-0 ml-3 card-top align-items-center">
                <img src="assets/topContent2.png" alt="" />
                <div
                  class="d-flex align-items-center card-top-content line-clamp ml-3"
                >
                  Pop punk
                </div>
                <img src="assets/playhoverbtn.png" class="playhover" alt="" />
              </div>
              <div class="col-md d-flex pl-0 ml-3 card-top align-items-center">
                <img src="assets/noise.png" alt="" />
                <div
                  class="d-flex align-items-center card-top-content line-clamp ml-3"
                >
                  Noise-Alternative
                </div>
                <img src="assets/playhoverbtn.png" class="playhover" alt="" />
              </div>
            </div>

            <div class="row">
              <div
                class="col-md d-flex pl-0 ml-3 line-clamp card-top align-items-center"
              >
                <img src="assets/preferiti.png" alt="" />
                <div
                  class="d-flex align-items-center card-top-content line-clamp ml-3"
                >
                  Aggiunto ai preferiti
                </div>
                <img src="assets/playhoverbtn.png" class="playhover" alt="" />
              </div>

              <div
                class="col-md d-flex pl-0 ml-3 line-clamp card-top align-items-center"
              >
                <img src="assets/topContent1.png" alt="" />
                <div
                  class="d-flex align-items-center card-top-content line-clamp ml-3"
                >
                  Children of Bodom
                </div>
                <img src="assets/playhoverbtn.png" class="playhover" alt="" />
              </div>
              <div
                class="col-md d-flex pl-0 ml-3 line-clamp card-top align-items-center"
              >
                <img src="assets/2021.png" alt="" />
                <div
                  class="d-flex align-items-center card-top-content line-clamp ml-3"
                >
                  I tuoi brani preferiti del 2021
                </div>
                <img src="assets/playhoverbtn.png" class="playhover" alt="" />
              </div>
              <div
                class="col-md d-flex pl-0 ml-3 line-clamp card-top align-items-center"
              >
                <img src="assets/meditation.png" alt="" />
                <div
                  class="card-top-content2 line-clamp ml-3"
                >
                  Active Brain to 100% Potential: Genius Brain and become a webdev
                </div>
                
              </div>
              <div
                class="col-md d-flex pl-0 ml-3 line-clamp card-top align-items-center"
              >
                <img src="assets/classica.png" alt="" />
                <div
                  class="d-flex align-items-center card-top-content line-clamp ml-3"
                >
                  Classica
                </div>
                <img src="assets/playhoverbtn.png" class="playhover" alt="" />
              </div>
            </div>
             {/* <!-- this is where the playlist container end --> */}
            <div class="d-flex pt-4 justify-content-between">
              <a class="text-white mid-title" href="#">Recently Played</a>
              <a href="#">
                <div class="see-all">see all</div>
              </a>
            </div>
              {/* <!-- this is where the main content container start --> */}
            <div class="home-container d-flex justify-content-between">
              
              
              
            </div>

            <div class="d-flex titles pt-4 justify-content-between">
              <a class="text-white mid-title" href="#">My favourites</a>
              <a href="#">
                <div class="see-all">see all</div>
              </a>
            </div>
            {/* <!-- this is where the another main content container start --> */}
            <div class="home-container2 d-flex justify-content-between">
              

              

              

              

              

              

              

              
            </div>

            <div class="d-flex titles pt-4 justify-content-between">
             <div class= "d-flex flex-column">
            <a class="text-white mid-title" href="#">Shows to try</a>
            <div class="subtitle"> Podcasts we think youll'get hooked on</div>
          </div>

              <a href="#">
                <div class="see-all justify-content-end">see all</div>
              </a>
            </div>
            {/* <!-- this is where the another main content container start --> */}
            <div class="home-container3 d-flex justify-content-between">
              
              
            </div>
            
          </div>
        </div>
        </div>
      </div>
      </>
)
 }

 export default HomePage