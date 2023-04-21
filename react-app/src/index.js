import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './../src/index.js';
// import App from './App';
import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('myDiv'));
// function insert()
// {
//   // var lname=document.getElementById("lastName")
//   // var cname=document.getElementById("companyName")
//   // var recordData = {
//   //   "Company": lname,
//   //   "Last_Name": cname
//   // }
//   //console.log("lname")
//   // ZOHO.CRM.API.insertRecord({Entity:"Leads",APIData:recordData,Trigger:["workflow"]}).then(function(data){
//   // console.log(data);
//   // });
// }



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
const index=() =>
{
  const insert=() =>
  {
    console.log("sd");
  }
  return(
    <div className='index'>
      <h2>Insert Lead</h2>
      <button onClick={insert}></button>
    </div>
  );
}

export default index;
