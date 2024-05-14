"use client";
import React, { useCallback, useState } from "react";
import debounce from "lodash.debounce";

import { Input } from "../ui/input";

const SearchToolbar = ({
  setSearch,
  placeholder,
}: {
  setSearch: (value: string) => void;
  placeholder: string;
}) => {
  const [searchText, setSearchText] = useState("");

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleSearch = useCallback(
    debounce((value: string) => {
      setSearch(value);
    }, 1000),
    []
  );

  return (
    <div className="flex items-center justify-between space-y-2 w-full">
      <Input
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
          handleSearch(e.target.value);
        }}
        placeholder={placeholder}
        className="min-w-[400px] w-full"
      />
    </div>
  );
};

export default SearchToolbar;
