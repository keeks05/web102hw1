import React from "react";

const Fixture = (props) => {
   return (
      <div>
         <img src={props.teamLogo}/>
         <p><b>Oponnent: </b> <span>{props.opponent}</span></p>
         <p><b>Date: </b>{props.date} at {props.time}</p>
         <p><b>Competition: </b> {props.competition}</p>
         <button><a href="https://seatpick.com/manchester-united-vs-fc-barcelona-tickets" target="_blank">Buy Tickets</a></button>
      </div>
   )
}

export default Fixture;