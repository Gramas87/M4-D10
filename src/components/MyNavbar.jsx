import {navbar, nav} from "react-bootstrap";


const MyNavbar = () =>{
    return(
        <>
        {/* <!-- this is the navbar --> */}
        
        <nav class="navbar navbar-expand-lg">
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <div class="nav-arrows-con">
                  <a class="nav-link" href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      class="bi chevron bi-chevron-left"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                      />
                    </svg>
                  </a>
                </div>
              </li>
              <li class="nav-item disabled">
                <div class="nav-arrows-con disabled ml-3">
                  <a class="nav-link" href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      class="bi chevron bi-chevron-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                      />
                    </svg>
                  </a>
                </div>
              </li>
            </ul>
            {/* <!-- SEARCHBAR --> */}
            <div class="input-group mb-3 w-25 mr-5">
              <input type="text" class="form-control" id="search-input" placeholder="Search artists" aria-label="Recipient's username" aria-describedby="button-addon2"/>
              <div class="input-group-append">
                <button class="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
              </div>
            </div>
            {/* <!-- SEARCHBAR END --> */}
            <span class="navbar-text">
              <div
                class="collapse navbar-collapse d-flex h-100"
                id="navbarNavDropdown"
              >
                <ul class="navbar-nav">
                  <div class="dropdown profile d-flex">
                    <a
                      class="btn dropdown-toggle profile text-white justify-content-start dropdown-item1"
                      href="#"
                      role="button"
                      id="dropdownMenuLink"
                      data-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img
                        src="assets/diego.jpg"
                        class="img-fluid justify-content-start"
                        id="profilePic"
                        alt=""
                      />
                      <span class="profile">Diego "Ziba" Banovaz</span>
                    </a>
                  </div>
                </ul>
              </div>

              <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a class="dropdown-item1" href="#">Account</a>
                <a class="dropdown-item1" href="#">Profile</a>
                <a class="dropdown-item1" href="#">Exit</a>
              </div>
            </span>
          </div>
        </nav>
        </>
    )
}

export default MyNavbar