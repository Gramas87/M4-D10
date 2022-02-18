import {Container, Row, Col } from "react-bootstrap";
import {container, row, col} from "bootstrap";


const MusicPlayer = () => {
    return(
        <section>
        <div
          className="container fluid m-music-player-section-height d-flex justify-content-between"
        >
          {/* <!-- left side music player--> */}

          <div className="d-flex align-items-center">
            <img src="https://picsum.photos/60" />
            <p className="text-white m-text-small fw-bold ms-3 mb-1">
              Another One Bite The Dust - Remastered 2011 <br />
              <span className="dark-gray-text m-text-small">Queen</span>
            </p>
            <i className="bi bi-heart m-bi-heart text-white ms-3"></i>
            <i className="bi bi-tv m-bi-tv text-white ms-3"></i>
          </div>

          {/* <!-- mid music player --> */}
          <div className="d-flex flex-column mt-2">
            <div className="d-flex justify-content-center align-items-center">
              <i className="bi bi-shuffle m-bi-shuffle me-2 text-white"></i>
             
              <i
                className="bi bi-play-circle-fill m-bi-play-circle-fill me-2 text-white"
              ></i>
              
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <span className="mid-gray-text me-3">0.25</span>
              <span className="mid-gray-text d-block m-music-player1"></span>
              <span className="mid-gray-text d-block m-music-player2"></span>
              <span className="mid-gray-text ms-3">0.59</span>
            </div>
          </div>
          {/* <!-- right side music player --> */}
          <div className="d-flex align-items-center">
            <i className="bi bi-music-note-list mid-gray-text me-3"></i>
            <i className="bi bi-pc-display mid-gray-text me-3"></i>
            <i className="bi bi-volume-up mid-gray-text ms-3"></i>
            <span className="mid-gray-text d-block m-music-player3"></span>
          </div>
        </div>
      </section>
    )
    
}

export default MusicPlayer