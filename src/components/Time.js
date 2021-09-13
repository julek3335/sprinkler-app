import React, { useState } from "react"
import { Card, Button, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import { db } from "../firebase"


export default function Time() {

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

let startTime= dbRead("startTime")
let valveTime=[dbRead("K1"),dbRead("K2"),dbRead("K3"),dbRead("T1"),dbRead("T2"),dbRead("T3"),dbRead("T4"),dbRead("T5")]
let sumOfValveTime = 0

// reads time that vave should be open
function dbRead(pwd){
  let result
db.ref('/time/' + pwd).on("value",function(snapshot){
  result = snapshot.val()
})
return result
}

//set placeholder for input fields
function dbPlaceholder(pwd,n){
  let result
db.ref('/time/' + pwd).on("value",function(snapshot){
  //console.log(snapshot.val())
  result = snapshot.val()
  document.getElementById(n).value = result
})
}


// gets data from input fields then sends them to DB
  function setTime(){
    startTime = document.getElementById("sTime").value+":00"

    for (let i = 1; i <9;i ++){
      valveTime[i-1]=document.getElementById("time"+i).value
    }

  sendDbK1(Number(valveTime[0]))
  sendDbK2(Number(valveTime[1]))
  sendDbK3(Number(valveTime[2]))
  sendDbT1(Number(valveTime[3]))
  sendDbT2(Number(valveTime[4]))
  sendDbT3(Number(valveTime[5]))
  sendDbT4(Number(valveTime[6]))
  sendDbT5(Number(valveTime[7]))
  sendDbStime(startTime)

  }


  function sendDbK1(state){
    db.ref('/time').update({K1 : state})
 }

 function sendDbK2(state){
   db.ref('/time').update({K2 : state})
 }
 function sendDbK3(state){
   db.ref('/time').update({K3 : state})
 }
 function sendDbT1(state){
   db.ref('/time').update({T1 : state})
 }
 function sendDbT2(state){
   db.ref('/time').update({T2 : state})
 }
 function sendDbT3(state){
   db.ref('/time').update({T3 : state})
 }
 function sendDbT4(state){
   db.ref('/time').update({T4 : state})
 }
 function sendDbT5(state){
   db.ref('/time').update({T5 : state})
 }
 function sendDbStime(state){
  db.ref('/time').update({startTime : state})
}

return(
  <>
<h1>Sterowanie czasowe</h1>

<Card>
    <Card.Body>
    <h2>Data rozpoczecia podlewania</h2>
    <br></br>
    <input type="time" id="sTime" placeholder={dbPlaceholder("startTime","sTime")} ></input>

    </Card.Body>
  </Card>

<Card>
    <Card.Body>
      <h2>Sekcja kroplująca 1</h2>
      <input type="number" min="0" id="time1" placeholder={dbPlaceholder("K1","time1")}></input>
    </Card.Body>
  </Card>

  <Card>
    <Card.Body>
      <h2>Sekcja kroplująca 2</h2>
      <input type="number" min="0" id="time2"placeholder={dbPlaceholder("K2","time2")}></input>
    </Card.Body>
  </Card>

  <Card>
    <Card.Body>
      <h2>Sekcja kroplująca 3</h2>
      <input type="number" min="0" id="time3"placeholder={dbPlaceholder("K3","time3")}></input>
    </Card.Body>
  </Card>
  <Card>
    <Card.Body>
      <h2>Sekcja tryskacze 1</h2>
      <input type="number" min="0" id="time4"placeholder={dbPlaceholder("T1","time4")}></input>
    </Card.Body>
  </Card>
  <Card>
    <Card.Body>
      <h2>Sekcja tryskacze 2</h2>
      <input type="number" min="0" id="time5"placeholder={dbPlaceholder("T2","time5")}></input>
    </Card.Body>
  </Card>
  <Card>
    <Card.Body>
      <h2>Sekcja tryskacze 3</h2>
      <input type="number" min="0" id="time6"placeholder={dbPlaceholder("T3","time6")}></input>
    </Card.Body>
  </Card>
  <Card>
    <Card.Body>
      <h2>Sekcja tryskacze 4</h2>
      <input type="number" min="0" id="time7"placeholder={dbPlaceholder("T4","time7")}></input>
    </Card.Body>
  </Card>
  <Card>
    <Card.Body>
      <h2>Sekcja tryskacze 5</h2>
      <input type="number" min="0" id="time8"placeholder={dbPlaceholder("T5","time8")}></input>
    </Card.Body>
  </Card>
<Link id="save" onClick={() => setTime()} className="btn btn-primary w-100 mt-3"> Zapisz</Link>

<div className="w-100 text-center mt-3">
            <Link to="/manual">sterowanie ręczne</Link>
          </div>

<div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
        </div>
</>
)
}
