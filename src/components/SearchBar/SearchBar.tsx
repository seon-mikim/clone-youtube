import SearchIcon from "@assets/search-icon.svg"
import * as S from './style'

const SearchBar = () => {
  return (
    <S.Form>
      <S.SearchInput placeholder="검색"/>
      <S.SearchButton src={SearchIcon} alt="검색 아이콘" />
    </S.Form>
  );
};

export default SearchBar;
