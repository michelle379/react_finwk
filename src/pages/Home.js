import { Layout } from "antd";
import { useState } from "react";
import AppHeader from "../components/Header";
import AppFooter from "../components/Footer";
import products from "../json/products.json";
import MainHome from "../components/MainHome";

const { Header, Content, Footer } = Layout;

function Home(){
    const [open, setopen] = useState(false);

    return(
        <Layout className="main-layout">
        {/* <NavBar open = {open} /> container*/}
        <Layout>
        {/* <HamMenu
          onClick={() => setopen(!open)}
          open={open}
        /> */}
            <Header className="layout-header">
                <AppHeader />
            </Header> 
            <Content className="layout-content">
                {/* <ProductList products={products}/> */}
                <MainHome/>
            </Content>
            <Footer className="layout-footer">
                <AppFooter />
            </Footer>
            </Layout>
        </Layout>
    );
}

export default Home;