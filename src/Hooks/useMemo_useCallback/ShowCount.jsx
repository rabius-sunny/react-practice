import { memo } from "react";

function ShowCount({ count, title }) {
  console.log('rendering title...', title);
  return <p>
    <h3>{title}</h3> is <b>{count}</b>
  </p>
}

export default memo(ShowCount)