import { useParams, useLocation } from "react-router-dom";

export const UrlParameter = () => {
  const { id } = useParams();
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  console.log(query);
  return (
    <div>
      <h1>UrlParameterページです</h1>
      <p>パラメータは{id}です。</p>
      <p>
        クエリパラメータは{query.has("name") ? "あります。" : "ないです。"}
        {query.get("name")}です。
      </p>
      {query.append("name2", "追加できます")}
      <p>{query.get("name2")}</p>
    </div>
  );
};
