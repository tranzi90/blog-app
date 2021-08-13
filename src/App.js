import './styles/App.css'
import {useMemo, useState} from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import CustomModal from "./components/UI/modal/CustomModal";
import CustomButton from "./components/UI/button/CustomButton";

function App() {
    const [posts, setPosts] = useState([
        { id: 1, title: 'JS', body: 'description' },
        { id: 2, title: 'JS 2', body: 'description' },
        { id: 3, title: 'JS 3', body: 'description' }
    ])

    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false)

    const sortedPosts = useMemo(() => {
        return filter.sort
            ? [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
            : posts
    }, [filter.sort, posts])

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
    }, [filter.query, sortedPosts])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    return (
        <div className="App">
            <CustomButton onClick={() => setModal(true)}>
                Create
            </CustomButton>
            <CustomModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost} />
            </CustomModal>
            <hr style={ {margin: '15px 0'} }/>
            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />
            <PostList remove={removePost} posts={sortedAndSearchedPosts} title='Posts about JS' />
        </div>
      );
}

export default App;
