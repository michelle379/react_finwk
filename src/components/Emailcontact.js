import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Form, Button, Checkbox, Input,Select, Segmented, DatePickerProps,DatePicker, Space } from "antd";
import { WarningOutlined } from "@ant-design/icons";
import Cookie from "js-cookie"

import { useReserve } from "../react-query";

import  { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Emailcontact=({ product, redirect })=>{
    let productname=2;
    
    const email_form = useRef();
    
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_0izfxhy', 'template_ckj6s93', email_form.current, 'UG9xv7I2gaQEjKStJ')
        .then((result) => {
            console.log(result.text);
            console.log("message send")
        }, (error) => {
            console.log(error.text);
        });
    };


    var r=document.getElementById('price');




    return (
        <div className="row justify-content-center ReserveLayout" >
        {/* <form ref={email_form} onSubmit={sendEmail}>
         <label>Name</label>
         <input type="text" name="user_name" />
         <label>Email</label>
         <input type="email" name="user_email" />
         <label>Message</label>
         <textarea name="message" />
         <input type="submit" value="Send" />
         <input type="text" name="project_name" />
         <label>service</label>
         <input type="text" name="project_time" />
        <label>time</label>
         <input type="text" name="project_price" /> </form> */}
        <form ref={email_form} onSubmit={sendEmail}>
          <div className="col-xl-10">
              
              <div className="card border-0">
              <div className="col-lg-8 reserve-header">
                  <h1 className="align-center reserve-title">預約系統</h1>
                  <p className="align-center reserve-subtitle">
                  ＊因應疫情，若該清潔地址於下列情況，FML家事服務保留暫停服務權益：該地址居住/生活者於14日內有出入境、有呼吸道症狀、確診/居家隔離等情事。<br/><br/>
                  ＊若為時間或坪數計價者，請填寫下方服務時間、服務坪數估價
                  </p>
  
              </div>
              <div className="card-body p-0">
              <div className="row no-gutters">
  
  

  
      {/* 基本資料 */}
      <div className="align-center">
          <h3 className="h4 font-weight-bold">∷ 基本資料 ∷</h3>
      </div>
  
      <div className="col-lg-5">
      <div className="left-layout">
  
  
        <Form.Item
          name="name"
          label="姓名"
          rules={[
            {
              required: true,
              message: "Please input your name!",
              whitespace: true,
              
            },
          ]}
        >
          <Input className="form-control" name="user_name"/>
        </Form.Item>
        </div>
      </div>
  
  
  
      <span className="reserve-form">
      <div className="col-lg-10">
      <div className="email-layout">
  
        <Form.Item
          name="email"
          label="電子信箱"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Please input your E-mail!",
            },
          ]}
        >
          <Input className="form-control" style={{  width: '42em', }} name="user_emaisl"/>
        </Form.Item>
  
        </div>
      </div>
      </span>
  
  
  
      {/* 預約內容 */}
      <div className="align-center">
          <h3 className="h4 font-weight-bold">∷ 預約內容 ∷</h3>
      </div>
  
  
      <span className="reserve-form">
      <div className="col-lg-5">
      <div className="left-layout">
  
        <Form.Item
          name="area"
          className="label-test"
          label="服務單位"
          // tooltip="What do you want others to call you?"
          rules={[
            {
              required: true,
              message: "Please input your area!",
              whitespace: true,
            },
          ]}
        >
          <Input className="form-control" name="project_hour"  />
          {/* 預設onChange */}
        </Form.Item>
  
        </div>
      </div>
  
      <div className="col-lg-5 ">
      <div className="right-layout">
  
        <Form.Item
          name="addr"
          label="服務地址"
          // tooltip="What do you want others to call you?"
          rules={[
            {
              required: true,
              message: "Please input your addr!",
              whitespace: true,
            },
          ]}
        >
          <Input className="form-control" style={{  width: '15em', }} name="project_location"/>
        </Form.Item>
  
        <Form.Item
          name="reserve_date"
          className="label-test"
          label="預約日期"
          rules={[
            {
              required: true,
              message: "Please input your reserve_date!",
              whitespace: true,
            },
          ]}
        >
          <Input type="date" className="form-control" name="project_time" style={{  width: '15em', }}/>
        </Form.Item>
        </div> 
      </div>
      </span>
  
  <br/>
  <span className="reserve-form">
      <div className="col-lg-10">
      <div className="left-layout">
      <div className="form-group label-test total-layout">
          <p >✧ 預約服務為：<strong>『{productname}』</strong>服務</p>
          <input name="project_name" value={productname} type="hidden"></input>
          
          <label>✧ 估計金額：</label>
          <label id="price">NT${100 * 1}元</label>

      </div>
      </div></div></span>
      <span className="reserve-form">
      <div className="col-lg-10">
      <div className="center-layout">
  
  
        <Form.Item 
        >
          
            <Button
              type="primary"
              className="btn btn-primary btn-block confirm-button"
              htmlType="submit"
              value="Send"
            >
              送出預約
            </Button>
          
        </Form.Item>
        
      
      </div></div></span>

      </div>
  
              </div>
              </div>
  
              <p className="text-muted text-center mt-3 mb-0"></p>
  
          </div>
          </form>
      </div>
        
    );
};

export default Emailcontact;