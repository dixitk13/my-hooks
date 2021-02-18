import * as React from "react";

export const UseMemoApp = () => {
  const ref = React.useRef<number>(0);
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

  const filteredList = React.useMemo(() => {
    ref.current++;
    if (!str) return lst;

    return lst.filter((x) => x.value.includes(str));
  }, [str]);

  return (
    <>
      <p>type to play with useMemo</p>
      <p>
        if you type same key-words for search, see how computation doesn't
        happen again and a cached value is returned
      </p>
      <div className="status-bar">COMPUTED: ${ref?.current}</div>
      <br></br>
      <input
        type="text"
        onChange={(e) => setStr(e?.target?.value)}
        placeholder="enter search string"
      />
      <ul>
        {filteredList.map((x, indx) => (
          <li key={`filtered-list-${indx}`}>{x.value}</li>
        ))}
      </ul>
    </>
  );
};
