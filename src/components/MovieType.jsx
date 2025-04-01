const initTypes = ['All', 'Movie', 'Series', 'Episode'];

export default function MovieType({ type, setType, setPage }) {
  // 여기서 e.target은 button임
  // innerText가 All일땐 All 타입이 없으므로 초기값 ''으로 타입변경
  function handleType(e) {
    // console.log(e.target.innerText);

    if (e.target.innerText === 'All') {
      setType('');
    } else {
      // 버튼 내부는 글자로 변경
      setType(e.target.innerText);
    }
    // 타입변경시 1페이지로 초기화
    setPage(1);
  }
  // console.log(type);

  // 이동이 아니므로 그냥 버튼으로 나열
  // 타입하고 아이템을 비교
  return (
    <div>
      {initTypes.map((item) => (
        <button
          type="button"
          key={item}
          // item이 All인경우 ''으로 변경하여 type비교
          // 동일 css의 우선순위: 1.조건아닌경우, 2.조건안에 있을경우
          className={`btn leading-[28px] bg-[#eee] text-[14px] border-r-0 last:border-r last:border-r-[#666] ${
            type === (item === 'All' ? '' : item)
              ? 'text-white bg-gray-500'
              : 'bg-[#eee]'
          }`}
          onClick={handleType}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
