import { Fragment, useRef, useState, useEffect } from "react";
import { data } from "./tableData";
import "./popup.css"

const Table = () => {
  const [idOfBudget, setIdOfBudget] = useState(-1);
  const ref = useRef(null);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIdOfBudget(-1);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
  });

  return (
    <div className="table-container">
      <table>
        <tr>
          <th>s/n</th>
          <th>Name</th>
          <th>Age</th>
          <th>Actions</th>
        </tr>
        {data && data.length > 0 ? (
          data.map((item, index) => (
            <tr>
              <td>{index}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td
                style={{
                  cursor: "pointer",
                  fontSize: "25px",
                  fontWeight: "bold",
                }}
                onClick={() => setIdOfBudget(item.id)}
              >
                ...
                {idOfBudget === item.id ? (
                    <Fragment>
                      <span ref={ref} className="popup">
                        <p>
                          Edit
                        </p>
                        <p
                        >
                          View details
                        </p>
                        <p style={{ color: "red" }}>Delete</p>
                      </span>
                    </Fragment>
                  ) : null}
              </td>
            </tr>
          ))
        ) : (
          <p>No data to display</p>
        )}
      </table>
    </div>
  );
};

export default Table;
