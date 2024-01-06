import SearchBar from "@components/SearchBar/SearchBar";
import Logo from "./Logo";
import * as S from "./style";
import DrawerIcon from '@assets/drawer-icon.svg'
import Setting from "./Setting";



const Header = () => {
  return (
    <S.Header>
      <S.StartIconWrap>
       <S.DrawerButton src={DrawerIcon} alt="drawer-icon"/>
        <Logo />
      </S.StartIconWrap>
      <SearchBar />
      <Setting/>
    </S.Header>
  );
};

export default Header;
