import CustomInput from "./UI/input/CustomInput";
import CustomButton from "./UI/button/CustomButton";
import {useState} from "react";

const PostForm = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    return (
        <form>
            <CustomInput
                value={title}
                onChange={e => setTitle(e.target.value)}
                type="text"
                placeholder='Post name'
            />
            <CustomInput
                value={body}
                onChange={e => setBody(e.target.value)}
                type="text"
                placeholder='Post description'
            />
            <CustomButton onClick={addNewPost} >Create post</CustomButton>
        </form>
    );
};

export default PostForm;