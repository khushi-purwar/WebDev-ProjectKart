import React from "react";
import { Link } from "react-router-dom";
import Cards from '../Others/Cards'
import Profile from '../../pages/Alumni/Profile'

export default function Dashboard(props) {
  return (
    <>
    {props.name == "MITS" ?
    <div style={{ marginLeft: "300px", width: "1236px" }}>
      <div className="flex-grow ">
        <main className="flex flex-col space-y-10 px-6 py-5 max-w-6xl mx-auto">
          <h1 className="text-3xl"></h1>
          <section className="p-6 sm:p-8 flex items-center bg-color shadow-md rounded-lg">
            <div className="mr-6">
              <header className="text-xl text-indigo-50 mb-3">
                WELCOME BACK {props.name} ...
              </header>
              <p className="sm:max-w-md text-black leading-tight mb-5">
                Get a better overview...{" "}
              </p>
              <div className="flex flex-wrap">
                <button className="py-2 px-5 text-indigo-700 font-semibold bg-white rounded-full  mb-3 mr-5">
                  New Updates
                </button>
                <button className="py-2 px-5 text-white font-semibold bg-indigo-900 rounded-full mb-3 mr-5">
                  Post
                </button>
              </div>
            </div>
       
          </section>
          {/* <div style={{display : 'flex' , justifyContent : 'center'}} >
          <Link to="events" >
          <img style={{width : '400px' , height : '400px'}} src="https://camo.githubusercontent.com/366e44bda8cd8313fa3043f9ad8c50a205696527268fb410e22db006a917afa9/68747470733a2f2f70726f6a656374732e776f6a74656b6d616a2e706c2f72656163742d63616c656e6461722f72656163742d63616c656e6461722e6a7067" alt="" />
          </Link>


          </div> */}
<Cards/>

        </main>
      </div>
    </div>
    :

    <div style={{ marginLeft: "300px", width: "1236px" }}>
      <div className="flex-grow ">
        <main className="flex flex-col space-y-10 px-6 py-5 max-w-6xl mx-auto">
          <h1 className="text-3xl"></h1>
          <section className="p-6 sm:p-8 flex items-center bg-color shadow-md rounded-lg">
            <div className="mr-6">
              <header className="text-xl text-indigo-50 mb-3">
                WELCOME BACK {props.name} ...
              </header>
              <p className="sm:max-w-md text-black leading-tight mb-5">
                Get a better overview...{" "}
              </p>
              <div className="flex flex-wrap">
                <button className="py-2 px-5 text-indigo-700 font-semibold bg-white rounded-full  mb-3 mr-5">
                  New Updates
                </button>
                <button className="py-2 px-5 text-white font-semibold bg-indigo-900 rounded-full mb-3 mr-5">
                  Post
                </button>
              </div>
            </div>
       
          </section>
          {/* <div style={{display : 'flex' , justifyContent : 'center'}} >
          <Link to="events" >
          <img style={{width : '400px' , height : '400px'}} src="https://camo.githubusercontent.com/366e44bda8cd8313fa3043f9ad8c50a205696527268fb410e22db006a917afa9/68747470733a2f2f70726f6a656374732e776f6a74656b6d616a2e706c2f72656163742d63616c656e6461722f72656163742d63616c656e6461722e6a7067" alt="" />
          </Link>


          </div> */}
{/* <Cards/> */}


<Profile/>

        </main>
      </div>
    </div>
}

    </>
  );
}
