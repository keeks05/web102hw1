import './App.css'
import Fixture from "../components/Fixture.jsx"
function App() {

  return (
    <div className="App">
       <img src="../public/manu.png" />
       <h1>Manchester United List of Upcoming Games</h1>
       <h4>Upcoming fixtures for Manchester United FC across diffrent leagues, tournaments, and competitions</h4>
       <div className="scheduleContainer">
         <Fixture teamLogo="/barca.png" 
                  opponent="Barcelona" 
                  date="2-23-23" 
                  competition="Europa League"
                  time="12:00PM PST" />
         <Fixture teamLogo="/newcastle.png" 
                  opponent="Newcastle" 
                  date="2-26-23" 
                  competition="EFL Cup"
                  time="8:30AM PST"
                  />
         <Fixture teamLogo="/west_ham.png" 
                  opponent="West Ham" 
                  date="3-1-23" 
                  competition="FA Cup 5th Round"
                  time="11:45AM PST"
                  />
         <Fixture teamLogo="/liverpool.png" 
                  opponent="Liverpool" 
                  date="3-5-23" 
                  competition="Premier League"
                  time="8:30AM PST"
                  />
         <Fixture teamLogo="../public/real_betis.png" 
                  opponent="Real Betis" 
                  date="3-9-23"
                  competition="Europa League - Round of 16 - Leg 1 of 2" 
                  time="12:00PM PST"
                  />

         <Fixture teamLogo="southampton.png" 
                  opponent="Southampton" 
                  date="3-12-23" 
                  competition="Premier League"
                  time="7:00AM PST"
                  />
         <Fixture teamLogo="real_betis.png" 
                  opponent="Real Betis" 
                  date="3-16-23" 
                  competition="Europa League - Round of 16 - Leg 2 of 2"
                  time="10:45AM PST"
                  />
         <Fixture teamLogo="brighton.png" 
                  opponent="Brighton" 
                  date="3-19-23" 
                  competition="Premier League"
                  time="7:00AM PST"
                  />

         <Fixture teamLogo="newcastle.png" 
                  opponent="Newcastle" 
                  date="4-2-23" 
                  competition="Premier League"
                  time="8:30AM PST"
                  />
         <Fixture teamLogo="brentford.png" 
                  opponent="Brentford" 
                  date="4-5-23" 
                  competition="Premier League"
                  time="12:00PM PST"
                  />
         <Fixture teamLogo="everton.png" 
                  opponent="Everton" 
                  date="4-8-23" 
                  competition="Premier League" 
                  time="4:30AM PST"
                  />

       </div>
    </div>
  )
}

export default App
