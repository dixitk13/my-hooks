import * as React from "react";

export const UseMemoApp = () => {
  const countRef = React.useRef<number>(0);
  const ref = React.useRef<Map<string, Function>>();

  const [str, setStr] = React.useState<string>("");

  const lst = [
    { value: "tom" },
    { value: "peter" },
    { value: "tommy" },
    { value: "pedro" },
    { value: "pascal" },
    { value: "nounce" },
    { value: "fox" },
    { value: "foxy" },
    { value: "oxymoron" },
  ];

  // this is a get on-purpose to find ref equality?
  const getFilteredList = React.useMemo(() => {
    return () => {
      if (!str) return lst;

      return lst.filter((x) => x.value.includes(str));
    };
  }, [str]);

  React.useEffect(() => {
    console.log(
      ">>: re-cal?",
      getFilteredList,
      ref.current?.get(str) === getFilteredList
    );
    if (ref.current?.has(str) && ref.current?.get(str) === getFilteredList) {
      countRef.current++;
    } else {
      ref.current?.set(str, getFilteredList);
    }
  }, [str]);

  return (
    <>
      <p>type to play with useMemo</p>
      <p>
        if you type same key-words for search, see how computation doesn't
        happen again and a cached value is returned
      </p>
      <div className="status-bar">COMPUTED: ${countRef?.current}</div>
      <br></br>
      <input
        type="text"
        onChange={(e) => setStr(e?.target?.value)}
        placeholder="enter search string"
      />
      <ul>
        {getFilteredList().map((x, indx) => (
          <li key={`filtered-list-${indx}`}>{x.value}</li>
        ))}
      </ul>
    </>
  );
};
