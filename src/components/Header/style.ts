import Button from "@components/Button/Button";
import IconButton from "@components/Button/IconButton";
import Wrap from "@components/Wrap/Wrap";
import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  height: 56px;
  padding: 0 16px;
  align-items: center;
  justify-content: space-between;
`;
export const StartIconWrap = styled(Wrap)`
display: flex;
align-items: center;
`

export const DrawerButton = styled(IconButton)`
width: 40px;
height: 40px;
margin: 8px;
background-color: transparent;
border: none;
`
export const SettingWrap = styled(Wrap)`
display: flex;
align-items: center;
justify-content: flex-end;
min-width: 225px;
`
export const MenuButton = styled(IconButton)`
margin-right: 8px;
width: 40px;
height: 40px;
padding: 8px;
background-color: transparent;
`

export const LoginButton = styled(Button)`
display: flex;
align-items: center;
padding: 6px 12px 6px;
border: 1px solid #b8bbba;
border-radius: 40px;
background-color: transparent;
img {
  margin-right: 6px;
}
`
export const LogoWrap = styled(Wrap)`
flex: 1 1 0%;
width: 90px;

`
