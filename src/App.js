import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import slice from "./redux/list/listSlice";
import List from "./List";
import {useForm} from "react-hook-form"

const App = () => {
  const lists = useSelector(state => state.list);
  const {register, handleSubmit}=useForm()


  const dispatch = useDispatch();

  const addList = (date) => {
      dispatch(slice.actions.addList({ id: lists.length > 0 ? lists.reduce((a, b) => a.id > b.id ? a : b).id + 1 : 1, title: date.newListName }));
  };


  return (
    <div className="App">
      <p>Redux TODO sample</p>
      {lists.map((list) =>
        <List key={list.id} item={list} />
      )}
      <form onSubmit={handleSubmit(addList)}>
      <input ref={register({required:true})} type="text" name="newListName" />
      </form>
    </div>
  );
};

export default App;