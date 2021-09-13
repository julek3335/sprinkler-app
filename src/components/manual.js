import React, { useState } from "react"
import { Card, Button, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import { db } from "../firebase"

export default function Manual() {

  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }


// sending state to DB
    function sendDbK1(state){
         db.ref('/valves').update({K1 : state})
      }
    
      function sendDbK2(state){
        db.ref('/valves').update({K2 : state})
      }
      function sendDbK3(state){
        db.ref('/valves').update({K3 : state})
      }
      function sendDbT1(state){
        db.ref('/valves').update({T1 : state})
      }
      function sendDbT2(state){
        db.ref('/valves').update({T2 : state})
      }
      function sendDbT3(state){
        db.ref('/valves').update({T3 : state})
      }
      function sendDbT4(state){
        db.ref('/valves').update({T4 : state})
      }
      function sendDbT5(state){
        db.ref('/valves').update({T5 : state})
      }
    

    //reads data from DB and cahnges button class
    function dbRead(pwd){
        
      db.ref('/valves/' + pwd).on("value",function(snapshot){
        console.log(snapshot.val())
        if (snapshot.val() === 0 ) {
          document.getElementById('buttonOff'+pwd).className = "btn btn-secondary w-100 mt-3"
          document.getElementById('buttonOn'+pwd).className = "btn btn-primary w-100 mt-3"
        }else{
          document.getElementById('buttonOff'+ pwd).className = "btn btn-primary w-100 mt-3"
          document.getElementById('buttonOn'+pwd).className = "btn btn-secondary w-100 mt-3"
        }
      })

    }
dbRead('K1')
dbRead('K2')
dbRead('K3')
dbRead('T1')
dbRead('T2')
dbRead('T3')
dbRead('T4')
dbRead('T5')




return(
    <container>
        <h1>Sterowanie manualne</h1>
    <Card>
    <Card.Body>
      <h2>Sekcja kroplująca 1</h2>
      <Link id="buttonOnK1" onClick={() => sendDbK1(1)} className="btn btn-primary w-100 mt-3"> On</Link>
      <Link id="buttonOffK1" onClick={() => sendDbK1(0)} className="btn btn-primary w-100 mt-3"> Off</Link>

    </Card.Body>
  </Card>

  <Card>
    <Card.Body>
      <h2>Sekcja kroplująca 2</h2>
      <Link id="buttonOnK2" onClick={() => sendDbK2(1)} className="btn btn-primary w-100 mt-3"> On</Link>
      <Link id="buttonOffK2" onClick={() => sendDbK2(0)} className="btn btn-primary w-100 mt-3"> Off</Link>

    </Card.Body>
  </Card>

  <Card>
    <Card.Body>
      <h2>Sekcja kroplująca 3</h2>
      <Link id="buttonOnK3" onClick={() => sendDbK3(1)} className="btn btn-primary w-100 mt-3"> On</Link>
      <Link id="buttonOffK3" onClick={() => sendDbK3(0)} className="btn btn-primary w-100 mt-3"> Off</Link>

    </Card.Body>
  </Card>

  <Card>
    <Card.Body>
      <h2>Sekcja tryskacze 1</h2>
      <Link id="buttonOnT1" onClick={() => sendDbT1(1)} className="btn btn-primary w-100 mt-3"> On</Link>
      <Link id="buttonOffT1" onClick={() => sendDbT1(0)} className="btn btn-primary w-100 mt-3"> Off</Link>

    </Card.Body>
  </Card>

  <Card>
    <Card.Body>
      <h2>Sekcja tryskacze 2</h2>
      <Link id="buttonOnT2" onClick={() => sendDbT2(1)} className="btn btn-primary w-100 mt-3"> On</Link>
      <Link id="buttonOffT2" onClick={() => sendDbT2(0)} className="btn btn-primary w-100 mt-3"> Off</Link>

    </Card.Body>
  </Card>

  <Card>
    <Card.Body>
      <h2>Sekcja tryskacze 3</h2>
      <Link id="buttonOnT3" onClick={() => sendDbT3(1)} className="btn btn-primary w-100 mt-3"> On</Link>
      <Link id="buttonOffT3" onClick={() => sendDbT3(0)} className="btn btn-primary w-100 mt-3"> Off</Link>

    </Card.Body>
  </Card>

  <Card>
    <Card.Body>
      <h2>Sekcja tryskacze 4</h2>
      <Link id="buttonOnT4" onClick={() => sendDbT4(1)} className="btn btn-primary w-100 mt-3"> On</Link>
      <Link id="buttonOffT4" onClick={() => sendDbT4(0)} className="btn btn-primary w-100 mt-3"> Off</Link>

    </Card.Body>
  </Card>

  <Card>
    <Card.Body>
      <h2>Sekcja tryskacze 5</h2>
      <Link id="buttonOnT5" onClick={() => sendDbT5(1)} className="btn btn-primary w-100 mt-3"> On</Link>
      <Link id="buttonOffT5" onClick={() => sendDbT5(0)} className="btn btn-primary w-100 mt-3"> Off</Link>

    </Card.Body>
  </Card>

  <div className="w-100 text-center mt-3">
            <Link to="/time">sterowanie czasowe</Link>
          </div>

  <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
        </div>


  </container>

  
  
)
}
