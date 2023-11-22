import React, { useEffect, useState } from "react";

export default function Pagination({ page, setPage, data }) {
  const postsPerPage = 10;

  const pageList = [];
  const postsNum = data?.length;
  const totalPages = Math.ceil(postsNum / postsPerPage);

  const onClickPageBtn = (number) => () => {
    setPage(number);
  };

  const moveToPrevPage = () => {
    if (page === 1) return;
    setPage((prev) => prev - 1);
  };

  const moveToNextPage = () => {
    if (totalPages === page) return;
    setPage((prev) => prev + 1);
  };

  console.log("postsNum", postsNum);
  console.log("totalPages", totalPages);

  for (let i = 1; i <= totalPages; i++) {
    pageList.push(i);
  }
  console.log("pageList", pageList);
  return (
    <div>
      <button onClick={moveToPrevPage}>prev</button>
      {pageList.map((page, index) => (
        <button id={index} onClick={onClickPageBtn(page)} key={page}>
          {page}
        </button>
      ))}
      <button onClick={moveToNextPage}>next</button>
    </div>
  );
}
