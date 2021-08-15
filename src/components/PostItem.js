import CustomButton from "./UI/button/CustomButton";
import {useHistory} from "react-router-dom";

const PostItem = ( {post, number, remove} ) => {
    const router = useHistory()

    return (
        <div className="post">
            <div className="post__content">
                <strong>{post.id}. {post.title}</strong>
                <div>
                    {post.body}
                </div>
            </div>
            <div className="post__btns">
                <CustomButton onClick={() => router.push(`/posts/${post.id}`)}>
                    open
                </CustomButton>
                <CustomButton onClick={() => remove(post)}>
                    delete
                </CustomButton>
            </div>
        </div>
    );
};

export default PostItem;