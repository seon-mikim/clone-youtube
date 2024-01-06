import MenuIcon from "@assets/menu-icon.svg";
import Image from "@components/Image/Image";
import UserIcon from '@assets/user-icon.svg'
import * as S from './style'

const Setting = () => {
  return (
    <S.SettingWrap>
      <S.MenuButton src={MenuIcon} alt="menu-icon" />
      <S.LoginButton>
        <Image src={UserIcon} w={24} h={24} alt="user-icon"/>
        <div>로그인</div>
      </S.LoginButton>
    </S.SettingWrap>
  );
};

export default Setting;
