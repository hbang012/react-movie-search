import { generatePagination } from '@/lib/utils';
import { useEffect, useState } from 'react';

export default function Pagination({ page, totalPage, setPage }) {
  const [pageArr, setPageaArr] = useState([]);

  useEffect(() => {
    // page, totalPage변경시마다 페이지번호배열 생성하여 배열스테이트 업데이트
    const arr = generatePagination(page, totalPage);
    setPageaArr(arr);
  }, [page, totalPage]);

  // 이동은아님
  return (
    <div className="flex gap-x-[2px] justify-center mt-[40px]">
      {page !== 1 && (
        <button
          type="button"
          className="btn h-[30px] w-[36px] text-[13px] px-[2px] bg-[#eee]"
          onClick={() => setPage(page - 1)}
        >
          이전
        </button>
      )}
      {pageArr.map((item, i) => {
        if (item === '...') {
          return (
            <span
              className="h-[30px] w-[36px] text-[13px] text-center leading-[28px] px-[2px] border border-[#666] bg-[#eee]"
              key={i}
            >
              ...
            </span>
          );
        } else {
          return (
            <button
              type="button"
              key={i}
              className={`btn h-[30px] w-[36px] text-[13px] px-[2px] " ${
                page === item ? 'text-white bg-[#666]' : 'bg-[#eee]'
              }`}
              onClick={() => setPage(item)}
            >
              {item}
            </button>
          );
        }
      })}
      {page !== totalPage && (
        <button
          type="button"
          className="btn h-[30px] w-[36px] text-[13px] px-[2px] bg-[#eee]"
          onClick={() => setPage(page + 1)}
        >
          다음
        </button>
      )}
    </div>
  );
}
