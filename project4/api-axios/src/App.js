import axios from "axios";
import { useEffect, useState } from "react";
// import apiInstance from "./api";
import "./App.css";
// import Tung from "./Tung";

function App() {
  // const [data, setData] = useState([]);
  // const [data2, setData2] = useState([]);
  const [dataList3, setDataList3] = useState([]);
  const [dataList4, setDataList4] = useState([]);

  // useEffect(() => {
  //   (async () => {
  //     const post = await apiInstance.get("posts");
  //     setData(post.data);
  //   })();
  // }, []);

  // useEffect(() => {
  //   (async () => {
  //     const post = await apiInstance.get("todos");
  //     setData2(post.data);
  //   })();
  // }, []);

  useEffect(() => {
    (async () => {
      const post = await axios.get("http://localhost:5000/");
      setDataList3(post.data);
    })();
  }, []);

  useEffect(() => {
    (async (id, userName) => {
      const post = await axios.post("http://localhost:5000/new", [
        {
          id,
          userName
        }
      ]);
      setDataList4(post.data);
    })();
  }, []);

  return (
    <div className="App">
      {/* {/* {data && (
        data.map((item, index) => (
          <ul key={index}>
            <li>{item.body}</li>
          </ul>
        ))
      )} */}
{/* 
      {data2 && (
        data2.map((item, index) => (
          <ul key={index}>
            <li>{item.id}</li>
          </ul>
        ))
      )} */}

      {dataList3 &&
        dataList3.map((item, index) => (
          <ul key={index}>
            <li>
              {item.id} , 
              {item.userName}
            </li>
          </ul>
        ))}

        {
          dataList4 && (
            dataList4.map((item, index) => (
              <ul key={index}>
                <li>{item.id}, {item.userName}</li>
              </ul>
            ))
          )
        }

    </div>
  );
}

export default App;
