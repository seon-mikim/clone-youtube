import IconButton from "@components/Button/IconButton";
import Input from "@components/Input/Input";
import styled from "styled-components";


export const Form = styled.form`
flex: 0 1 732px;
border: 1px solid #b8bbba;
display: flex;
border-radius: 40px;
height: 40px;
margin-left: 40px;

`

export const SearchInput = styled(Input)`
border:none;
outline: none;
margin-left: 18px;
font-size: 16px;
flex: 1;
`
export const SearchButton = styled(IconButton)`
border-left: 1px solid #b8bbba;
border-top-right-radius: 40px;
border-bottom-right-radius: 40px;
width: 64px;
`