import React from "react";
import "./Cards.css";

export default function Cards() {
  return (
    <div
      style={{ width: "1050px", boxShadow: "0 0 0" }}
      className="containerCard"
    >
      <div className="card">
        <div className="face face1">
          <div className="content">
            <span className="stars" />
            <h2 className="java">Track Your Alumnis</h2>
            <p className="java">
              Here you can track your every single alumni, can view their
              profiles , what they are doing right now , and can search your
              alumnis yearwise.
            </p>
          </div>
        </div>
        <div className="face face2">
          <h2>01</h2>
        </div>
      </div>
      <div className="card">
        <div className="face face1">
          <div className="content">
            <span className="stars" />
            <h2 className="python">Update College Events</h2>
            <p className="python">
              Here you can update your calendar for your upcoming events for all
              your alumnis.
            </p>
          </div>
        </div>
        <div className="face face2">
          <h2>02</h2>
        </div>
      </div>
      <div className="card">
        <div className="face face1">
          <div className="content">
            <span className="stars" />
            <h2 className="cSharp">Connect With Chat or Video Call</h2>
            <p className="cSharp">
              You can connect to your college alumni with a chat or a video call
              with ease.
            </p>
          </div>
        </div>
        <div className="face face2">
          <h2>03</h2>
        </div>
      </div>
    </div>
  );
}
