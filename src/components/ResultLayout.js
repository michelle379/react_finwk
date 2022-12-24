import { useState } from "react";
import { Button, Result } from 'antd';
import { Link } from 'react-router-dom';


function ResultLayout() {
    return (
        <>
        {/* <div className="ResultLayout">
        <Result
            status="success"
            title="預約成功"
            subTitle="請留意信箱發送預約資訊通知若未收到預約資訊請來電確認，謝謝您"
            title="Successfully Purchased Cloud Server ECS!"
            subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
            extra={[
            <Button href="https://accounts.google.com/b/0/AddMailService" type="primary" key="console">
                Go Console
            </Button>,
            <Button key="okey"><Link to="/" className="navbar-brand">回首頁</Link></Button>,
            ]}
        />
        </div> */}

        <div className="mt-5 mb-5 d-flex justify-content-center feedback-container">
        <div className=" px-1 py-4 Feedback-card feedback-layout">
        <Result
            status="success"
            title="預約成功"
            subTitle="請留意信箱發送預約資訊通知若未收到預約資訊請來電確認，謝謝您"
            // title="Successfully Purchased Cloud Server ECS!"
            // subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
            extra={[
            // <Button href="https://accounts.google.com/b/0/AddMailService" type="primary" key="console">
            //     Go Console
            // </Button>,
            <Button key="okey"><Link to="/" className="navbar-brand">回首頁</Link></Button>,
            ]}
        />
        </div>
        </div>
        </>
    );
}

export default ResultLayout;


