import React, { useEffect, useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import {Link} from "react-router-dom";
import styles from "assets/jss/material-kit-react/views/loginPage.js";
import { login,request } from "Utils/Utils";
import image from "assets/img/bg7.jpg";
import { ACCESS_TOKEN } from "export/export";

const useStyles = makeStyles(styles);

export default function LoginPage(props) {
  const [cardAnimaton, setCardAnimation ] = React.useState("cardHidden");
  setTimeout(function () {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const { ...rest } = props;
  const [login,setLogin] = useState({
    email:"",
    password:"",
  })
  const ChangeValue = (e)=>{
    setLogin({
      ...login,
      [e.target.id]: e.target.value
    });
    console.log(login)
  }
  const submitLogin = (e) =>{
    e.preventDefault();
    return request({
      url : "http://localhost:8081/member/login",
      method : "POST",
    // fetch("http://localhost:8081/member/login",{
    //   method: "POST",
    //   headers: {
    //     "Content-type":"application/json;charset=utf-8"
      body:JSON.stringify(login)
      
    }).then((res)=>res)
    .then((res)=>{
      console.log(res.token)
      localStorage.setItem(ACCESS_TOKEN,res.token)
      props.history.push("/")
    });
  }
  return (
    <div>
      <Header
        absolute
        color="transparent"
        brand="Crowdee"
        rightLinks={<HeaderLinks />}
        {...rest}
      />
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <Card className={classes[cardAnimaton]}>
                <form className={classes.form}>
                  <CardHeader color="primary" className={classes.cardHeader}>
                    <h4>로그인</h4>
                    <div className={classes.socialLine}>
                      <Button
                        justIcon
                        href="#pablo"
                        target="_blank"
                        color="transparent"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className={"fab fa-twitter"} />
                      </Button>
                      <Button
                        justIcon
                        href="#pablo"
                        target="_blank"
                        color="transparent"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className={"fab fa-facebook"} />
                      </Button>
                      <Button
                        justIcon
                        href="#pablo"
                        target="_blank"
                        color="transparent"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className={"fab fa-google-plus-g"} />
                      </Button>
                    </div>
                  </CardHeader>
                  <p className={classes.divider}> 또는 </p>
                  <CardBody>
                    <CustomInput
                      labelText="이메일 주소 입력"
                      id="email"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "string",
                        onChange: ChangeValue,
                        endAdornment: (
                          <InputAdornment position="end">
                            <Email className={classes.inputIconsColor}/>
                          </InputAdornment>
                        ),
                      }}
                    />
                    <CustomInput
                      labelText="비밀번호 입력"
                      id="password"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "password",
                        onChange: ChangeValue,
                        endAdornment: (
                          <InputAdornment position="end">
                            <Icon className={classes.inputIconsColor}>
                              lock_outline
                            </Icon>
                          </InputAdornment>
                        ),
                        autoComplete: "off",
                      }}
                    />
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Button onClick={submitLogin} simple color="primary" size="lg">
                      로그인
                    </Button>
                     
                     
                  </CardFooter>
                  
                  <CardFooter className={classes.cardFooter}>
                  <Link to="/signUp">아직 Crowdee 계정이 없으신가요?</Link>
                  </CardFooter>
                  
                  
                  
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        <Footer whiteFont />
      </div>
    </div>
  );
}
