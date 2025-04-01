import MovieList from '@/components/MovieList';
import MovieSearch from '@/components/MovieSearch';
import MovieType from '@/components/MovieType';
import Pagination from '@/components/Pagination';
import { useEffect, useState } from 'react';

// ?파라메터=값&파라메터=값, 쿼리스트링을통해 서버로 데이터 전송
// get방식으로 데이터 요청시 사용
// tt: 발급 아이디 ?
const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=f4734f61';

// useEffect를 쓰는이유:렌더링 될때마다 계속 데이터를 가져오기때문에
// 외부동작, App이라는 데이터랑 관련이 없음... 외부의 것을 가져오기때문에
// 렌더링 이후에 외부데이터를 가져온 코드가 영향을 주면 안됨, 같이 실행되면 안됨
export default function App() {
  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState('fff');
  const [type, setType] = useState('');
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  useEffect(() => {
    async function searchMovies() {
      try {
        // throw new Error('에러 테스트');
        // 비동기 fetch로 응답을 json으로 받음
        const response = await fetch(
          `${API_URL}&s=${title}&type=${type}&page=${page}`
        );
        // json -> js객체로 변환
        const data = await response.json();
        // console.log(data.Search);

        // ? 붙이는 이유 :
        // 검색결과가 없을 경우 data.Search가 undefined이므로 오류방지
        const sortData = data.Search?.sort((a, b) =>
          a.Year > b.Year ? -1 : 1
        );
        setMovies(sortData);
        // console.log(Math.ceil(data.totalResults / 10));
        setTotalPage(Math.ceil(data.totalResults / 10));
      } catch (err) {
        console.error('데이터전송오류: ', err);
      }
    }
    searchMovies();
  }, [title, type, page]);

  return (
    <div className="p-[20px]">
      <h2 className="text-[40px] text-gray-600">MovieLand</h2>
      <MovieSearch setTitle={setTitle} setType={setType} />
      <MovieType type={type} setType={setType} setPage={setPage} />
      <MovieList movies={movies} />
      {/* 데이터 있을때만 페이지네이션 나오게 */}
      {movies && (
        <Pagination page={page} totalPage={totalPage} setPage={setPage} />
      )}
    </div>
  );
}
