import React, { useEffect, useState } from "react";
import axios from "axios";
import ChatBot from "react-chatbotify";
import {FetchResponse,UploadPDF} from './noorBotAI';
import './noorBot.css';

const NoorBot = () => {
  const settings = {
      isOpen: true,
      general: {
        primaryColor: '#42b0c5',
        secondaryColor: '#491d8d',
        fontFamily: 'Arial, sans-serif',
        embedded: true,
        showFooter: true,
        height: "6000px",
      },
      header: {
        title: 'NoorBot'
      },
      botBubble: {
        simStream: true
      },
      fileAttachment: {
        enabled: true,           
        accept: ".pdf" 
      }
    };

  const bodyStyle = {
    display: "flex", 
    justifyContent: "center",
    alignItems: "center", 
    backgroundColor : '#B0E0E6',
    height:'100vh',
    width:'100vw',
  }

  const runNoorAI = async(params) => {
    // if(params.files!=null && params.files[0]!=null){
    //   const file = params.files[0];
    //   return await UploadPDF(file);
    // }
    if(params.userInput!=null){
      const prompt = params.userInput;
      return await FetchResponse(prompt);
    }
    else{
      return "Please type a query to continue";
    }
  }

  const flow = {
    start:{
      message: "مرحبا , اسمي نور ... كيف يمكنني مساعدتك?",
      // file: async(params) => {
      //   const response = await runNoorAI(params);
      // },
      path: "model",
    },
    // fileUpload:{
    //   message:() => {
    //     return new Promise((resolve) => {
    //       setTimeout(() => {
    //         resolve('File Processed Successfully');
    //       }, 10000);
    //     });
    //   },
    //   path:'model'
    // },
    model:{
      message: async(params) => {
        return await runNoorAI(params)
      },
      path: "model"
    }
  };

  return(
  <div style={bodyStyle}>
      <ChatBot flow = {flow} settings={settings} />
  </div>
  );

};  

export default NoorBot;
