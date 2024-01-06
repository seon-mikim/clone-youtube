import Image from "@components/Image/Image";
import Youtube from "@assets/logo.svg";
import * as S from "./style";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <S.LogoWrap>
        <Image src={Youtube} alt="youtube-icon" />
      </S.LogoWrap>
    </Link>
  );
};

export default Logo;
