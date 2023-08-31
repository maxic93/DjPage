import { styled } from "styled-components";


export const BannerSection = styled.div`
width: 100%;
height: 500px;
background-image: url(https://cdn0.casamentos.com.br/vendor/0849/3_2/960/jpg/img-20211016-1741341_13_370849-166786413235748.jpeg);
text-align: center;
background-position: center center;
background-size: cover;
background-repeat: no-repeat;
display: flex;
align-items: center;
justify-content: space-between;
position: relative;
&:before {
	content:'';
	position: absolute;
    top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background-color: rgba(0,0,0,0.7);
}
@media (max-width: 510px) {
	height: 300px;
}
`
export const H1 = styled.h1`
font-size: 80px;
color: #fff;
padding: 20px;
position: relative;
@media (max-width: 800px) {
	font-size: 4rem;
}
@media (max-width: 614px) {
	font-size: 3rem;
}
@media (max-width: 510px) {
	font-size: 2rem;
}
`
export const SocialMediaContainer = styled.div`
width: 100px;
height: 80px;
margin-bottom: 150px;
@media (max-width: 800px) {
	font-size: .7rem;
}
@media (max-width: 510px) {
	height: 50px;
	margin-bottom: 100px;
}
`
export const SocialMediaDiv = styled.div`
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
transition: .3s;
&:hover {
    background: #000;
}
`