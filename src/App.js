import './styles/App.css'
import PostItem from "./components/PostItem";
import {useState} from "react";
import PostList from "./components/PostList";
import CustomButton from "./components/UI/button/CustomButton";
import CustomInput from "./components/UI/input/CustomInput";

function App() {
    const [posts, setPosts] = useState([
        { id: 1, title: 'JS', body: 'description' },
        { id: 2, title: 'JS 2', body: 'description' },
        { id: 3, title: 'JS 3', body: 'description' }
    ])

    const addNewPost = (e) => {
        e.preventDefault()

        const newPost = {
            id: Date.now(),
            title,
            body
        }

        setPosts([...posts, newPost])
        setTitle('')
        setBody('')
    }

    return (
        <div className="App">

            <PostList
                posts={posts}
                title='Posts about JS'
            />
        </div>
      );
}

export default App;
