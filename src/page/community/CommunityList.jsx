import React from "react";
import styled from "styled-components";

const CommunityList = () => {

    return (
        <>
            <Button href="/community/posting">당신의 이야기를 들려주세요</Button>
            <h1>소통 글 목록 페이지입니다.</h1>
        </>
    );
}


const Button = styled.a`
    width: 100px;
    margin: auto;
    display: block;
    margin-top: 100px;
    width: 500px;
    height: 30px;
    border-radius: 30px;
    background-color: #FFF9E3;
    text-align: center;
    text-decoration: none;
    box-shadow: 5px 5px 5px rgb(145, 145, 145);
    color: #F6D697;
`;

export default CommunityList;