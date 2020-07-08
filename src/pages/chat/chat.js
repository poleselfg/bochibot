import React, {useState, useEffect} from "react";
import "./chat.css";
import Bochitem from "./Bochitem/bochitem";
import UserItem from "./userItem/userItem";
import InputChat from "./inputChat/inputChat";

const Chat = () => {

let idCounter = 0;

const [msg, setMsg] = useState({})
const [chat, setChat] = useState([
  {
    id:0,
    emitter:'Bocha',
    msg:['Hola!', ' Como es tu nombre?']
  }
])



//armar respuesta
const firstResponse = (name) =>{
  let newChat = {
    id: idCounter + 2,
    emitter: 'Bocha',
    msg: [
      'Mucho gusto, ' + name + '!',
      'Me Presento, Soy un Bochibot en desarrollo aun! :(',
      'Igual podemos interactuar! Elegi la pregunta que queres hacerme!'
    ]
  }
  if(newChat){
    setChat([...chat, newChat]);
  }
}

//useEffect(() 

useEffect(() => {
  if(chat.length === 2){
    setTimeout(() => firstResponse(msg.msg), 500);
    setMsg({...msg, msg:''});
    //setTimeout(() => setOpenSelect(true), 600);
  }
}, [chat]);

//almacen valor input
const getMessage = (value) => {
  idCounter = idCounter + 1;
  setMsg({
    id: idCounter,
    emitter: 'User',
    msg: value
  })
}

//funcion que envia el mensaje
const sendMessage = (e) =>{
  e.preventDefault();
  setChat([...chat, msg])
}



  return (
    <div className="chatbot-chat-container">
      <div className="chatbot-chat-content">
        <div className="chatbot-chat">
          <div className="chatbot-chat-container-body">
          {chat.map((message, index) => 
          message.emitter==='Bocha' ?
          <Bochitem 
          key={index}
          text={message.msg}/>
          :
          <UserItem text={message.msg}/>
          )}
          </div>
          <div className="chatbot-chat-container-input">
            <InputChat 
            getMessage={getMessage}
            sendMessage={sendMessage}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
