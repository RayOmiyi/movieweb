@import url("https://fonts.googleapis.com/css2?family=Spartan:wght@100;200;300;400;500;600;700;800;900&display=swap");
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'spartan', sans-serif;
}
html{
    scroll-behavior: smooth;
}
/* Global styles */
h1{
    font-size: 50px;
    line-height: 64px;
    color: #222;
}
h2{
    font-size: 46px;
    line-height: 54px;
    color: #222;
}
h4{
    font-size: 20px;
    color: #222;
}
h6{
    font-weight: 700;
    font-size: 12px;
}
p{
    font-size: 16px;
    color: #465b52;
    margin: 15px 0 20px 0;
}
.section-p1{
    padding: 40px 80px;
}
.section-m1{
    margin: 40px 0;
}
button.normal{
    font-size: 14px;
    font-weight: 600;
    padding: 15px 30px;
    color: #000;
    background-color: #fff;
    border-radius: 4px;
    cursor: pointer;
    border: none;
    transition: 0.2s;
}
button.white{
    font-size: 13px;
    font-weight: 600;
    padding: 11px 18px;
    color: #fff;
    background-color: transparent;
    cursor: pointer;
    border: 1px solid white;
    outline: none;
    transition: 0.2s;
}
body{
    width: 100%;
}
#header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 80px;
    background: white;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.06);
    z-index: 999;
    position: sticky;
    top: 0;
    left: 0;
}
#navbar {
    display: flex;
    align-items: center;
    justify-content: center;
}

#navbar li {
    list-style: none;
    padding: 0 20px;
    position: relative;
}

#navbar li a {
    text-decoration: none;
    font-size: 16px;
    font-weight: 600;
    color: #1a1a1a;
    transition: 0.3s ease;
}

#navbar li a:hover {
    color: #088178;
}

#navbar li a:hover,
#navbar li a.active {
    color: #088178;
}

#navbar li a.active::after,
#navbar li a:hover::after {
    content: "";
    width: 30%;
    height: 2px;
    background: #088178;
    position: absolute;
    bottom: -4px;
    left: 20px;
}

#mobile {
    display: none;
    align-items: center;
}

#close {
    display: none;
}
/* end of mobile */
/* Home Page */
#hero{
    background-image: url("img/hero2.jpeg");
    height: 90vh;
    width: 100%;
    /* background-repeat: no-repeat; */
    background-size: cover;
    background-position: top 25% right 0;
    padding: 0 80px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
}
#hero h4{
    padding-bottom: 15px;
}
#hero h1{
    color: black;
}
#hero button{
    background-image: url("img/button.png");
    background-color: transparent;
    color: purple;
    border: 0;
    padding: 14px 80px 14px 65px;
    background-repeat: no-repeat;
    cursor: pointer;
    font-weight: 700;
    font-size: 15px;
}
#feature{
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
}
#feature .fe-box{
    width: 180px;
    text-align: center;
    padding: 25px 15px;
    box-shadow: 20px 20px 34px rgba(0, 0, 0, 0.23);
    border: 1px solid white;
    border-radius: 4px;
    margin: 15px 0;
}
#feature .fe-box:hover{
    box-shadow: 10px 10px 54px rgba(0, 0, 0, 0.27);
}
#feature .fe-box img{
    width: 100%;
    margin-bottom: 10px;
}
#feature .fe-box h6{
    display: inline-block;
    padding: 9px 8px 6px 8px;
    line-height: 1;
    border-radius: 4px;
    color: #465b52;
    background-color: darkgray;
}
#feature .fe-box:nth-child(2) h6{
    background-color: #cdebbc;
}
#feature .fe-box:nth-child(3) h6{
    background-color: pink;
}
#feature .fe-box:nth-child(4) h6{
    background-color: burlywood;
}
#feature .fe-box:nth-child(5) h6{
    background-color: lightblue;
}
#feature .fe-box:nth-child(6) h6{
    background-color: navajowhite;
}
#product1{
    text-align: center;
}
#product1 .pro-container{
    display: flex;
    justify-content: space-between;
    padding: 20px;
    flex-wrap: wrap;
}
#product1 .pro{
    width: 23%;
    min-width: 250px;
    padding: 10px 12px;
    border: 1px solid white;
    border-radius: 25px;
    cursor: pointer;
    box-shadow: 20px 20px 30px rgba(0, 0, 0, 0.06);
    margin: 15px 0;
    transition: 0.2s ease;
    position: relative;
}
#product1 .pro:hover{
    box-shadow: 20px 20px 30px rgba(0, 0, 0, 0.16);
}
#product1 .pro img{
    width: 100%;
    border-radius: 20px;
}
#product1 .pro .des{
    text-align: start;
    padding: 10px 0;
}
#product1 .pro .des span{
    color: #465b52;
    font-size: 12px;
}
#product1 .pro .des h5{
    padding-top: 7px;
    color: #222;
    font-size: 14px;
}
#product1 .pro .des i{
    font-size: 12px;
    color: gold;
}
#product1 .pro .des h4{
    padding-top: 7px;
    font-size: 15px;
    font-weight: 700;
    color: darkgreen;
}
#product1 .pro .cart {
    width: 40px;
    height: 40px;
    line-height: 40px;
    border-radius: 50px;
    background-color: #e8f6ea;
    font-weight: 500;
    color: #088178;
    border: 1px solid #cce7d0;
    position: absolute;
    bottom: 20px;
    right: 10px;
}
#banner{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-image: url("img/Banner/banner.jpeg");
    width: 100%;
    height: 40vh;
    background-size: cover;
    background-position: center;
}
#banner h4{
    color: white;
    font-size: 16px;
}
#banner h2{
    color: white;
    font-size: 30px;
    padding: 10px 0;
}
#banner h2 span{
    color: rgb(209, 34, 34);
}
#banner button:hover{
    background: darkgreen;
    color: #fff;
}
#sm-banner{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}
#sm-banner .banner-box{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    background-image: url("img/banner/thor2.jpg");
    min-width: 580px;
    height: 50vh;
    background-size: cover;
    background-position: center;
    padding: 30px;
}
#sm-banner .banner-box2{
    margin-left: 50px;
    background-image: url("img/banner/wolverine.jpg");
}
#sm-banner h4{
    color: #fff;
    font-size: 20px;
    font-weight: 300;
}
#sm-banner h2{
    color: #fff;
    font-size: 28px;
    font-weight: 600;
}
#sm-banner span{
    color: white;
    font-size: 14px;
    font-weight: 500;
    padding-bottom: 15px;
}
#sm-banner .banner-box:hover button{
    background: darkcyan;
    border: 1px solid darkcyan;
}
#banner3{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0 80px;
}
#banner3 .banner-box{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    background-image: url("img/banner/b20.jpg");
    min-width: 30%;
    height: 30vh;
    background-size: cover;
    background-position: center;
    padding: 20px;
    margin-bottom: 20px;
}
#banner3 .banner-box2{
    background-image: url("img/hero.png");
}
#banner3 .banner-box3{
    background-image: url("img/Hero4.jpg");
}
#banner3 h2{
    color: white;
    font-weight: 900;
    font-size: 22px;
}
#banner3 h3{
    color: red;
    font-weight: 800;
    font-size: 15px;
}
#newsletter{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    background-image: url("img/Banner/banner.jpeg");
    background-repeat: no-repeat;
    background-position: 20% 30%;
    background-size: 100%;
}
#newsletter h4{
    font-size: 22px;
    font-weight: 700;
    color: white;
}
#newsletter p{
    font-size: 14px;
    font-weight: 600;
    color: grey;
}
#newsletter p span{
    color: yellow;
}
#newsletter .form{
    display: flex;
    width: 40%;
}
#newsletter input{
    height: 3.125rem;
    padding: 0 1.25em;
    font-size: 14px;
    width: 100%;
    border: 1px solid transparent;
    border-radius: 4px;
    outline: none;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}
#newsletter button{
    background-color: darkcyan;
    color: white;
    white-space: nowrap;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}
footer{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
footer .col{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
footer .col{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 20px;
}
footer .logo{
    margin-bottom: 30px;
}
footer h4{
    font-size: 14px;
    padding-bottom: 20px;
}
footer p{
    font-size: 13px;
    margin: 0 0 8px 0;
}
footer a {
    font-size: 13px;
    text-decoration: none;
    color: #222;
    margin-bottom: 10px;
}
footer .follow{
    margin-top: 20px;
}
footer .follow i{
    color: lightcoral;
    padding-right: 4px;
    cursor: pointer;
}
footer .install .row img{
    border: 1px solid lightcoral;
    border-radius: 6px;
}
footer .install img{
    margin: 10px 0 15px 0;
}
footer .follow i:hover,
footer a:hover{
    color: darkcyan;
}
footer .copyright{
    width: 100%;
    text-align: center;
}
/* movie page */
.menu {
    padding: 5rem 0;
}

.title {
    text-align: center;
    margin-bottom: 2rem;
}

.underline {
    width: 10rem;
    height: 0.25rem;
    background: darkcyan;
    margin-left: auto;
    margin-right: auto;
}

.btn-container {
    margin-bottom: 4rem;
    display: flex;
    justify-content: center;
}

.filter-btn {
    background: transparent;
    border-color: #222;
    font-size: 1rem;
    text-transform: capitalize;
    margin: 0 0.5rem;
    letter-spacing: 1px;
    border-radius: 0.5rem;
    padding: 0.375rem 0.75rem;
    color: #088178;
    cursor: pointer;
    transition: all 0.3s linear;
}

.filter-btn:hover {
    background: #088178;
    color: white;
}
#page-header{
    background-image: url("img/Banner/b2.jpg");
    width: 100%;
    height: 20vh;
    background-size: cover;
    display: flex;
    justify-content: center;
    text-align: center;
    flex-direction: column;
    padding: 14px;
}
#page-header h2,
#page-header p{
    color: #fff;
}
#pagination{
    text-align: center;
}
#pagination a {
    text-decoration: none;
    background-color: grey;
    padding: 15px 20px;
    border-radius: 4px;
    color: #fff;
    font-weight: 600;
}

#pagination a i {
    font-size: 16px;
    font-weight: 600;
}
/* About  */
.video{
    /* position: relative; */
    width: 100%;
    height: 100%;
}
.video-container {
    /* position: absolute; */
    top: 0;
    left: 0;
    width: 50%;
    height: 50%;
    /* object-fit: cover; */
    z-index: -2;
}
#about-head div {
    padding-left: 40px;
}

#about-app {
    text-align: center;
}

#about-app .video {
    width: 70%;
    height: 100%;
    margin: 30px auto 0 auto;
}

#about-app .video video {
    width: 100%;
    height: 100%;
    border-radius: 20px;
}
#product1 .pro video{
    width: 100%;
}
/* video play in smovies */
.switch-btn {
    position: absolute;
    bottom: 7%;
    left: 7%;
    width: 7rem;
    height: 2rem;
    display: flex;
    border-radius: 0.5rem;
    align-items: center;
    justify-content: space-around;
    border: none;
    transition: 0.3s;
    color: darkcyan;
}

.switch-btn span {
    display: inline-block;
    font-size: 0.85rem;
    cursor: pointer;
    text-transform: capitalize;
    color: #fff;
}
.switch {
    position: absolute;
    width: 50%;
    height: 100%;
    top: 0;
    left: 0;
    background: darkcyan;
    border-radius: 0.5rem;
    margin: 0;
    color: #222;
    display: block;
    transition: 0.3s;
}
.slide .switch {
    left: 50%;
}
/* Start media query */
@media (max-width:799px) {
    .section-p1{
        padding: 40px 40px;
    }
    #navbar{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        position: fixed;
        top: 0;
        right: -300px;
        height: 100vh;
        width: 300px;
        background-color: white;
        box-shadow: 0 40px 60px rgba(0, 0, 0, 0.1);
        padding: 80px 0 0 10px;
        transition: 0.3s
    }
    #navbar.active{
        right: 0px;
    }
    #navbar li{
        margin-bottom: 25px;
    }
    #mobile{
        display: flex;
        align-items: center;
    }
    #mobile i{
        color: black;
        font-size: 24px;
        padding-left: 20px;
    }
    #close{
        display: initial;
        position: absolute;
        top: 30px;
        left: 30px;
        color: #222;
        font-size: 24px;
    }
    #lg-bag{
        display: none;
    }
    #hero{
        height: 70vh;
        padding: 0 80px;
        background-position: top 30% right 30%;
    }
    #feature{
        justify-content: center;
    }
    #feature .fe-box{
        margin: 15px 15px;
    }
    #product1 .pro-container{
        justify-content: center;
    }
    #product1 .pro{
        margin: 15px;
    }
    #banner{
        height: 20vh;
    }
    #sm-banner .banner-box {
        min-width: 100%;
        margin: 30px 0;
        height: 70vh;
    }
    #banner3 {
        padding: 0 40px;
    }
    #banner3 .banner-box {
        width: 28%;
    } 
    #newsletter .form {
        width: 70%;
    }
}
@media (max-width: 477px) {
    .section-p1 {
            padding: 20px;
        }
    
        #header {
            padding: 10px 30px;
        }
    
        h1 {
            font-size: 38px;
        }
    
        h2 {
            font-size: 32px;
        }
    
        #hero {
            padding: 0 20px;
            background-position: 55%;
        }
    
        #feature {
            justify-content: space-between;
        }
    
        #feature .fe-box {
            width: 155px;
            margin: 0 0 15px 0;
        }
    
        #product .pro {
            width: 100%;
        }
    
        #banner {
            height: 40vh;
        }
    
        #sm-banner .banner-box {
            height: 40vh;
        }
    
        #sm-banner .banner-box2 {
            margin-top: 20px;
        }
    
        #banner3 {
            padding: 0 20px;
        }
    
        #banner3 .banner-box {
            width: 100%;
        }
    
        #newsletter {
            padding: 40px 20px;
        }
    
        #newsletter .form {
            width: 100%;
        }
    
        footer .copyright {
            text-align: start;
        }
        #about-head {
            flex-direction: column;
        }
        #about-head img {
            width: 100%;
            margin-bottom: 20px;
        }        
        #about-head div {
            padding-left: 40px;
        }
        #about-app .video {
            width: 100%;
        }
        #about-head {
            flex-direction: column;
        }
        #about-head img {
            width: 100%;
            margin-bottom: 20px;
        }
        #about-head div {
            padding-left: 40px;
        }
        #about-app .video {
            width: 100%;
        }
}# movieweb
