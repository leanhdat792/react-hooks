import React, { useEffect, useState } from "react";
import queryString from 'query-string';
import './HomePage.scss';
import Pagination from "./components/Pagination";
import PostList from "./components/PostList";
import PostFiltersForm from "./components/PostFiltersForm";
import Clock from "./components/Clock";
import BetterClock from "./components/BetterClock";
import MagicBox from "./components/MagicBox";
//import TodoForm from "./components/TodoForm";
//import ColorBox from "./components/ColorBox";
//import TodoList from "./components/TodoList";

function HomePage() {
    const [todoList, setTodoList] = useState([
        { id: 1, title: 'I love Easy Frontend!' },
        { id: 2, title: 'We love Easy Frontend!' },
        { id: 3, title: 'They love Easy Frontend!' },
    ]);

    const [postList, setPostList] = useState([]);
    const [pagination, setPagination] = useState({
        _page: 1,
        _limit: 10,
        _totalPages: 1,
    });
    const [filters, setFilters] = useState({
        _limit: 10,
        _page: 1,
        title_like: '',
    });

    useEffect(() => {
        async function fetchPostList() {
            //...
            try {
                // _limit=10&_page=1
                const paramsString = queryString.stringify(filters);
                //const requestUrl = 'http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1';
                const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`;
                const response = await fetch(requestUrl);
                const responseJSON = await response.json();
                console.log({ responseJSON });

                const { data, pagination } = responseJSON;
                setPostList(data);
                setPagination(pagination);
            } catch (error) {
                console.log('Failed to fetch post list: ', error.message);
            }
        }
        console.log('POST list effect');
        fetchPostList();
    }, [filters]);

    useEffect(() => {
        console.log('TODO list effect');
    });

    function handlePageChange(newPage) {
        console.log('New page: ', newPage);
        setFilters({
            ...filters,
            _page: newPage,
        })
    }

    function handleFiltersChange(newFilters) {
        console.log('New filters: ', newFilters);
        setFilters({
            ...filters,
            _page: 1,
            title_like: newFilters.searchTerm,
        })
    }

    function handleTodoClick(todo) {
        const index = todoList.findIndex(x => x.id === todo.id);
        if (index < 0) return;
        const newTodoList = [...todoList];
        newTodoList.splice(index, 1);
        setTodoList(newTodoList);
    }

    function handleFormSubmit(formValues) {
        console.log('Form submit: ', formValues);
        //add new todo to current todo list
        const newTodo = {
            id: todoList.length + 1,
            ...formValues,
        };
        const newTodoList = [...todoList];
        newTodoList.push(newTodo);
        setTodoList(newTodoList);
    }

    const [showClock, setShowClock] = useState(true);

    return (
        <div className="app">
            <h1>React Hooks - Clock</h1>

            <MagicBox />

            {/* {showClock && <Clock />}
      <BetterClock />
      <button onClick={() => setShowClock(false)}>Hide clock</button> */}
            {/* <ColorBox /> */}
            {/* <TodoForm onSubmit={handleFormSubmit} /> */}
            {/* <TodoList todos={todoList} onTodoClick={handleTodoClick} /> */}
            {/* <PostFiltersForm onSubmit={handleFiltersChange} />
      <PostList posts={postList} />
      <Pagination
        pagination={pagination}
        onPageChange={handlePageChange}
      /> */}
        </div>
    );
}

export default HomePage;
