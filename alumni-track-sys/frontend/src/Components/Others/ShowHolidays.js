import React, { useRef } from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid";

export default function Showholiday() {
  const [events, setEvents] = React.useState([]);
  const calendarRef = useRef(null);

  // const onEventAdded = event => {
  //  let calendarApi = calendarRef.current.getApi();
  // calendarApi.addEvent(event);
  //  };
  let ClgId = 8747;

  const handleDatesSet = () => {
    fetch(`http://localhost:3045/api/GetEvents/${ClgId}`)
      .then((resp) => resp.json())
      .then((resp) => {
        console.log("events are=>", resp);
        setEvents(resp);
      })
      .catch((err) => console.log("Err =>", err));
  };
  return (
    <>
      <div
        style={{
          // position: "relative",
          zIndex: 0,
          marginLeft: "-13px",
          width: "100%",
          marginTop: "30px",
          width: "1000px",
          height: "100px",
        }}
      >
        <FullCalendar
          sx={{
            ".fc fc-media-screen fc-direction-ltr fc-theme-standard": {
              width: "650px",
              height: "500px",
            },
          }}
          style={{ width: "750px", height: "500px" }}
          ref={calendarRef}
          events={events}
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          //  eventAdd={(event) => handleEventAdd(event)}
          datesSet={(date) => handleDatesSet(date)}
        />
      </div>
    </>
  );
}
