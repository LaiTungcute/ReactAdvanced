import React, { useEffect, useState } from "react";
import "./Page.scss";
import AddTodo from "../components/Add-to-do/AddTodo";
import Todo from "../components/Todo/Todo";

const getLocalStorage = () => {
  let getListTodo = localStorage.getItem("ListTodo");
  if (getListTodo) {
    return (getListTodo = JSON.parse(getListTodo));
  } else {
    return [];
  }
};

const Page = () => {
  const [todo, setTodo] = useState({
    check: false,
    title: "",
    changeValue: false,
  });

  const [listTodo, setListTodo] = useState(getLocalStorage);

  useEffect(() => {
    localStorage.setItem("ListTodo", JSON.stringify(listTodo));
    console.log('name');
  }, [listTodo]);

  //Thêm
  const handleAddTodo = (e) => {
    if (e.keyCode === 13) {
      const arr = [...listTodo];
      arr.push(todo);
      setListTodo(arr);
      setTodo({
        check: false,
        title: "",
      });
      console.log('chang');
    }
  };

  //Xóa
  const handleDeleteTodo = (id) => {
    const arr = [...listTodo];
    // arr.splice(id, 1);
    setListTodo(arr.filter((item, index) => index !== id));
  };

  const handleChangeStatus = (id) => {
    const arr = [...listTodo];
    arr &&
      arr.map((item, index) => {
        if (id === index) return (item.check = !item.check);
        return item;
      });
    setListTodo(arr);
  };

  //Sửa

  const handleChangeActive = (id) => {
    const arr = [...listTodo];
    arr &&
      arr.map((item, index) => {
        if (index === id) {
          return (item.changeValue = !item.changeValue);
        }
        return item;
      });
    setListTodo(arr);
  };

  const handleChange = (e, id) => {
    const arr = [...listTodo];
    arr &&
      arr.map((item, index) => {
        if (index === id) {
          return (item.title = e.target.value);
        }
        return item;
      });
    setListTodo(arr);
  };

  const handleChangeByEnter = (e, id) => {
    if (e.keyCode === 13) {
      const arr = [...listTodo];
      arr &&
        arr.map((item, index) => {
          if (index === id) {
            return (item.changeValue = !item.changeValue);
          }
          return item;
        });
      setListTodo(arr);
    }
  };

  return (
    <div className="page">
      <AddTodo todo={todo} setTodo={setTodo} handleAddTodo={handleAddTodo} />
      <ul>
        {listTodo &&
          listTodo.map((item, index) => (
            <li key={index}>
              <Todo
                key={index}
                id={index}
                item={item}
                handleDeleteTodo={handleDeleteTodo}
                handleChangeStatus={handleChangeStatus}
                handleChangeActive={handleChangeActive}
                handleChange={handleChange}
                handleChangeByEnter={handleChangeByEnter}
              />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Page;
