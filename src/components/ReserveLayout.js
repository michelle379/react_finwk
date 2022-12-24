import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Form, Button, Checkbox, Input,Select, Segmented, DatePickerProps,DatePicker, Space } from "antd";
import { WarningOutlined } from "@ant-design/icons";
import Cookie from "js-cookie"

import { useReserve } from "../react-query";

import  { useRef } from 'react';
import emailjs from '@emailjs/browser';

// const formItemLayout = {
//   labelCol: {
//     xs: {
//       span: 24,
//     },
//     sm: {
//       span: 8,
//     },
//   },
//   wrapperCol: {
//     xs: {
//       span: 24,
//     },
//     sm: {
//       span: 16,
//     },
//   },
// };
// const tailFormItemLayout = {
//   wrapperCol: {
//     xs: {
//       span: 24,
//       offset: 0,
//     },
//     sm: {
//       span: 24,
//       offset: 0,
//     },
//   },
// };

const ReserveLayout = ({ product, redirect }) => {
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
    const [nameValue, setNameValue] = useState('')
    const [phoneValue, setPhoneValue] = useState('')
    const [emailValue, setEmailValue] = useState('')
    const [countyValue, setCountyValue] = useState('')
    const [addrValue, setAddrValue] = useState('')
    const [areaValue, setAreaValue] = useState('')
    const [timeValue, setTimeValue] = useState('')
    const [reserve_dateValue, setReserve_dateValue] = useState('')
    const [product_idValue, serProduct_idValue] = useState('')

    const [spend, setSpend] = useState(1);

  const { mutate, error, isLoading, isError, isSuccess, data } = useReserve();

  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = (values) => {
    values.product_id = product.id;
    // values.time = 1;
    console.log("Received values of form: ", values);
    console.log(values.product_id)
    mutate(values);
    navigate('/ResultPage');
  };

  // useEffect(() => {
  //   if (isSuccess) {
  //     Cookie.set("userInfo", JSON.stringify(data?.data));
  //     navigate(redirect);
  //   }
  // }, [isSuccess, redirect]); 

  return (
    <div className="row justify-content-center ReserveLayout">
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

            {/* ⁛◈▣◊⋚⋛⩊〓⁖ ∷ */}
            <div className="row no-gutters">


    <Form
    //   {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      className="register-form"
      scrollToFirstError
    >

    {/* 基本資料 */}
    <div className="align-center">
        <h3 className="h4 font-weight-bold">∷ 基本資料 ∷</h3>
    </div>


    <span className="reserve-form">
    <div className="col-lg-5">
    <div className="left-layout">


      <Form.Item
        name="name"
        label="姓名"
        // tooltip="What do you want others to call you?"
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


    <div className="col-lg-5 ">
    <div className="right-layout">

      <Form.Item
        name="phone"
        label="手機號碼"
        // tooltip="What do you want others to call you?"
        rules={[
          {
            required: true,
            message: "Please input your phone!",
            whitespace: true,
          },
        ]}
      >
        <Input className="form-control" style={{  width: '15em', }} name="user_email"/>
      </Form.Item>
      

      </div> 
    </div>
    </span>


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
        <Input className="form-control" style={{  width: '42em', }}/>
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
        name="county"
        label="服務縣市"
        // tooltip="What do you want others to call you?"
        rules={[
          {
            required: true,
            message: "Please input your county!",
            whitespace: true,
          },
        ]}
      >
      <Select
        style={{
            width: 160,
        }}
        options={[
            {
            value: '臺北市',
            label: '臺北市',
            },
            {
            value: '新北市',
            label: '新北市',
            },
            {
            value: '桃園市',
            label: '桃園市',
            },
            {
            value: '新竹市',
            label: '新竹市',
            },
            {
            value: '高雄市',
            label: '高雄市',
            },
            {
            value: '臺中市',
            label: '臺中市',
            },
        ]}
      />

        {/* <Input className="form-control"/> */}
        {/* <select className="form-select form-control" aria-label="Default select example">
            <option selected>請選擇縣市</option>
            <option value="1">臺北市</option>
            <option value="2">新北市</option>
            <option value="3">桃園市</option>
            <option value="4">新竹市</option>
            <option value="5">高雄市</option>
            <option value="6">臺中市</option>
        </select> */}
      </Form.Item>



      {/* <Form.Item
        name="category"
        label="服務類別與項目"

      >
        <Input value={product.category} className="form-control" disabled={true}/> 
      </Form.Item> */}

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
        <Input className="form-control"  placeholder={product.hour} onChange={(e)=>{setSpend(e.target.value)}} name="project_hour"/>
        {/* 預設onChange */}
      </Form.Item>


      {/* <Form.Item
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
        <Input className="form-control"/>
      </Form.Item> */}

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


      {/* <Form.Item label="預約項目名稱">
        <Input className="form-control" value={product.name} disabled={true}/> 
      </Form.Item> */}

      {/* <label>本服務以{product.hour}計價.ᐟ.ᐟ</label> */}
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
        <Input className="form-control" style={{  width: '15em', }} name="project_time"/>
      </Form.Item>
      {/* <Form.Item
        name="time"
        className="label-test"
        label="&nbsp;&nbsp;&nbsp;服務時間"
        rules={[
          {
            required: false,
            message: "Please input your time!",
            whitespace: true,
          },
        ]}
      >
        <Input className="form-control" onChange={(e)=>{setSpend(e.target.value)}}/>
      </Form.Item> */}


      {/* <Form.Item
        name="product_id"
        label="服務代碼"
        rules={[
          {
            required: true,
            message: "Please input your id!",
            whitespace: true,
          },
        ]}
      >
        <Input className="form-control"  />
      </Form.Item> */}
    {/* <div className="form-group">
        <label for="exampleInputPassword1"></label>
    </div> */}




{/* 
      <Form.Item
        name="total"
        label="估計金額"
        rules={[
          {
            required: true,
            message: "Please input your time!",
            whitespace: true,
          },
        ]}
      >
        <Input className="form-control"/>
        預設NT${product.price * spend}元，或label完成 
      </Form.Item>
*/}
      </div> 
    </div>
    </span>
      {/* <div className="form-group label-test total-layout">
        <label for="exampleInputPassword1">估計金額：</label>
        <label for="exampleInputPassword1">NT${product.price * spend}元</label>
    </div> */}

      {/* <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="rePassword"
        label="Re-enter Password"
        dependencies={["password"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please re-enter your password!",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }

              return Promise.reject(
                new Error("The two passwords that you entered do not match!")
              );
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value
                ? Promise.resolve()
                : Promise.reject(new Error("Should accept agreement")),
          },
        ]}
        {...tailFormItemLayout}
      >
        <Checkbox>
          I have read the <Link to={"/"}>agreement</Link>
        </Checkbox>
      </Form.Item> */}

<br/>
<span className="reserve-form">
    <div className="col-lg-10">
    <div className="left-layout">
    <div className="form-group label-test total-layout">
        <p>✧ 預約服務為：<strong>『{product.company} - {product.name}』</strong>服務</p>
        <input name="project_name" value={product.company - product.name} type="hidden"></input>
        <label>✧ 估計金額：</label>
        <label>NT${product.price * spend}元</label>
        <input name="project_price" value={product.price * spend} type="hidden"></input>
        {/* <input type="text" className="form-control" id="exampleInputEmail1" placeholder="坪"/> */}
    </div>
    </div></div></span>
    <span className="reserve-form">
    <div className="col-lg-10">
    <div className="center-layout">

      <Form.Item 
    //   {...tailFormItemLayout}
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
    </Form>
    </div>

            </div>
            </div>

            <p className="text-muted text-center mt-3 mb-0"></p>

        </div>
        </form>
    </div>

  );
};
export default ReserveLayout;