import React from "react";
import { IoSearch } from "react-icons/io5";

export default function Searchbox() {
  return (
    <form action="" className="flex">
      <input type="text" name="" placeholder="Search Jobs..." />
      <IoSearch className="search" />
    </form>
  );
}
