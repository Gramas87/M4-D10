import {container, row, col,} from "bootstrap"
import {useState, UseEffect, useEffect} from "react"
import SingleSong from "./SingleSong"

const HomePage = () =>{
    
  const [albums, setAlbums] = useState([])
 
  useEffect(() => {
    fetchArtist1()
  }, [])
  
  const fetchArtist1 = async (search = "madonna") =>{
  try {
    let response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${search}`,)
    if (response.ok) {
      let artist = await response.json()
      setAlbums(artist)
    }
  } 
  catch (error) {
    console.log(error)
  }

  }
  

  
  
  
  return(
     <>
      <div className="container-fluid">
        {/* <!-- sidebar section --> */}
        <div className="row">
          <div className="col-2 m-sidebar text-white">
            <aside className="d-flex flex-column">
              <div className="d-flex mt-1">
                <i className="bi bi-spotify m-bi-spotify"></i>
                <span
                  className="text-1-three-rem fw-bold ms-1 d-flex justify-content-center align-items-center"
                  >Spotify</span
                >
              </div>
              <div className="d-flex mt-4">
                <i className="bi bi-house-fill m-bi-house-fill"></i>
                <span
                  className="fw-bold ms-1 m-text-small d-flex justify-content-center align-items-center"
                  >Home</span
                >
              </div>
              <div className="d-flex mt-1">
                <i className="bi bi-search m-bi-search mid-gray-text"></i>
                <span
                  className="ms-1 mid-gray-text m-text-small d-flex justify-content-center align-items-center"
                  >Search</span
                >
              </div>
              <div className="d-flex align-items-center mt-1 mid-gray-text">
               
                <span
                  className="ms-1 m-text-small d-flex justify-content-center align-items-center"
                  >Your library</span
                >
              </div>
              <div className="d-flex mt-4">
                <i className="mid-gray-text bi bi-plus-square m-bi-plus-square"></i>
                <span
                  className="mid-gray-text ms-1 m-text-small d-flex justify-content-center align-items-center"
                  >Create playlist</span
                >
              </div>
              <div className="d-flex mt-1 mid-gray-text">
                
                <span
                  className="ms-1 mb-4 -text-small d-flex justify-content-center align-items-center"
                  >Liked songs</span
                >
              </div>
              <span className="ml-0 mt-1 m-text-smaller dark-gray-text"
                >Song 1</span
              >
              <span className="ml-0 mt-1 m-text-smaller dark-gray-text"
                >Song 2</span
              >
              <span className="ml-0 mt-1 m-text-smaller dark-gray-text"
                >Song 3</span
              >
              <span className="ml-0 mt-1 m-text-smaller dark-gray-text"
                >Song 4</span
              >
              <span className="ml-0 mt-1 m-text-smaller dark-gray-text"
                >Song 5</span
              >
              <div className="d-flex align-items-baseline">
                <span className="m-truncate ml-0 mt-1 m-text-smaller dark-gray-text"
                  >One hell of a song name</span
                ><i
                  className="bi bi-people-fill m-bi-people-fill dark-gray-text ms-1"
                ></i>
              </div>
              <span className="ml-0 mt-1 m-text-smaller dark-gray-text"
                >Song 6</span
              >
              <span className="ml-0 mt-1 m-text-smaller dark-gray-text"
                >Song 7</span
              >
              <div className="d-flex align-items-baseline">
                <span className="m-truncate ml-0 mt-1 m-text-smaller dark-gray-text"
                  >One hell of a song name</span
                ><i
                  className="bi bi-people-fill m-bi-people-fill dark-gray-text ms-1"
                ></i>
              </div>
              <span className="ml-0 mt-1 m-text-smaller dark-gray-text"
                >Song 8</span
              >
              <div className="d-flex align-items-baseline">
                <span className="m-truncate ml-0 mt-1 m-text-smaller dark-gray-text"
                  >One hell of a song name</span
                ><i
                  className="bi bi-people-fill m-bi-people-fill dark-gray-text ms-1"
                ></i>
              </div>
              <div className="d-flex align-items-baseline">
                <span className="m-truncate ml-0 mt-1 m-text-smaller dark-gray-text"
                  >One hell of a song name</span
                ><i
                  className="bi bi-people-fill m-bi-people-fill dark-gray-text ms-1"
                ></i>
              </div>
              <div className="d-flex align-items-baseline">
                <i
                  className="bi bi-arrow-down-circle m-bi-arrow-down-circle-fill dark-gray-text me-1"
                ></i>
                <span className="fw-bold ml-0 mt-1 m-text-smaller dark-gray-text"
                  >Install app</span
                >
              </div>
            </aside>
          </div>

          {/* <!-- main section --> */}

          <div className="col-10 main-section px-0">
          
            <div className="mx-3">
            <div className="top-title">Good Morning</div>
             {/* <!-- this is where the playlist container start --> */}

            <div className="row mb-3">
              <div className="col-md d-flex pl-0 ml-3 card-top align-items-center">   
                <img src="assets/proxima.png" className="card-top-img" alt="" />
                <div
                  className="card-top-content2 line-clamp ml-3"
                >
                (Livestream) Interstellar Missions to Proxima centaury
                </div>
               
              </div>

              <div className="col-md d-flex pl-0 ml-3 card-top align-items-center">
                <img src="assets/instr.png" alt="" />
                <div
                  className="d-flex align-items-center card-top-content line-clamp ml-3"
                >
                  Instrumental
                </div>
                <img src="assets/playhoverbtn.png" className="playhover" alt="" />
              </div>
              <div className="col-md d-flex pl-0 ml-3 card-top align-items-center">
                <img src="assets/Ludwig.png" alt="" />
                <div
                  className="d-flex align-items-center card-top-content line-clamp ml-3"
                >
                  Ludwig van Beethoven
                </div>
                <img src="assets/playhoverbtn.png" className="playhover" alt="" />
              </div>
              <div className="col-md d-flex pl-0 ml-3 card-top align-items-center">
                <img src="assets/topContent2.png" alt="" />
                <div
                  className="d-flex align-items-center card-top-content line-clamp ml-3"
                >
                  Pop punk
                </div>
                <img src="assets/playhoverbtn.png" className="playhover" alt="" />
              </div>
              <div className="col-md d-flex pl-0 ml-3 card-top align-items-center">
                <img src="assets/noise.png" alt="" />
                <div
                  className="d-flex align-items-center card-top-content line-clamp ml-3"
                >
                  Noise-Alternative
                </div>
                <img src="assets/playhoverbtn.png" className="playhover" alt="" />
              </div>
            </div>

            <div className="row">
              <div
                className="col-md d-flex pl-0 ml-3 line-clamp card-top align-items-center"
              >
                <img src="assets/preferiti.png" alt="" />
                <div
                  className="d-flex align-items-center card-top-content line-clamp ml-3"
                >
                  Aggiunto ai preferiti
                </div>
                <img src="assets/playhoverbtn.png" className="playhover" alt="" />
              </div>

              <div
                className="col-md d-flex pl-0 ml-3 line-clamp card-top align-items-center"
              >
                <img src="assets/topContent1.png" alt="" />
                <div
                  className="d-flex align-items-center card-top-content line-clamp ml-3"
                >
                  Children of Bodom
                </div>
                <img src="assets/playhoverbtn.png" className="playhover" alt="" />
              </div>
              <div
                className="col-md d-flex pl-0 ml-3 line-clamp card-top align-items-center"
              >
                <img src="assets/2021.png" alt="" />
                <div
                  className="d-flex align-items-center card-top-content line-clamp ml-3"
                >
                  I tuoi brani preferiti del 2021
                </div>
                <img src="assets/playhoverbtn.png" className="playhover" alt="" />
              </div>
              <div
                className="col-md d-flex pl-0 ml-3 line-clamp card-top align-items-center"
              >
                <img src="assets/meditation.png" alt="" />
                <div
                  className="card-top-content2 line-clamp ml-3"
                >
                  Active Brain to 100% Potential: Genius Brain and become a webdev
                </div>
                
              </div>
              <div
                className="col-md d-flex pl-0 ml-3 line-clamp card-top align-items-center"
              >
                <img src="assets/classNameica.png" alt="" />
                <div
                  className="d-flex align-items-center card-top-content line-clamp ml-3"
                >
                  Classica
                </div>
                <img src="assets/playhoverbtn.png" className="playhover" alt="" />
              </div>
            </div>
             {/* <!-- this is where the playlist container end --> */}
            <div className="d-flex pt-4 justify-content-between">
              <a className="text-white mid-title" href="#">Recently Played</a>
              <a href="#">
                <div className="see-all">see all</div>
              </a>
            </div>
              {/* <!-- this is where the main content container start --> */}
            <div className="home-container d-flex justify-content-between">
            <SingleSong />
            <SingleSong />
            <SingleSong />
            <SingleSong />

            <SingleSong/>
              
              
            </div>

            <div className="d-flex titles pt-4 justify-content-between">
              <a className="text-white mid-title" href="#">My favourites</a>
              <a href="#">
                <div className="see-all">see all</div>
              </a>
            </div>
            {/* <!-- this is where the another main content container start --> */}
            <div className="home-container2 d-flex justify-content-between">
            

              

              

              

              

              

              
            </div>

            <div className="d-flex titles pt-4 justify-content-between">
             <div className= "d-flex flex-column">
            <a className="text-white mid-title" href="#">Shows to try</a>
            <div className="subtitle"> Podcasts we think youll'get hooked on</div>
          </div>

              <a href="#">
                <div className="see-all justify-content-end">see all</div>
              </a>
            </div>
            {/* <!-- this is where the another main content container start --> */}
            <div className="home-container3 d-flex justify-content-between">
              
              
            </div>
            
          </div>
        </div>
        </div>
      </div>
      </>
)
 }

    export default HomePage