import SearchIcon from "@assets/search-icon.svg";
import * as S from "./style";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const SearchBar = () => {
  const { keyword } = useParams();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/videos/${search}`);
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  useEffect(() => setSearch(keyword || ""), [keyword]);
  return (
    <S.Form onSubmit={handleSubmit}>
      <S.SearchInput
        placeholder="검색"
        onChange={handleChange}
        value={search}
      />
      <S.SearchButton src={SearchIcon} alt="검색 아이콘" />
    </S.Form>
  );
};

export default SearchBar;
