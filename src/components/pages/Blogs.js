import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBlogs } from "../../redux/actions/blog";
import LoadingIcon from "../UI/LoadingIcon";
import { Table, Typography, Input, Button, Space  } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import Highlighter from 'react-highlight-words';

const Blogs = () => {
    const [state, setState] = useState({
        searchText: '',
        searchedColumn: '',
      })
    const dispatch = useDispatch()
    const blogs = useSelector(state => state.blogs);
    const token = useSelector(state => state.auth.token);
    useEffect(() => {
        dispatch(getAllBlogs(token));
    }, [dispatch, token])
    if (blogs.isLoading)
    return (
        <LoadingIcon />
    )
    return (
        <div>
            
        </div>
    )
}

export default Blogs
