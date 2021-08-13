import CustomButton from "./UI/button/CustomButton";

const PostItem = ( {post, number, remove} ) => {
    return (
        <div className="post">
            <div className="post__content">
                <strong>{number}. {post.title}</strong>
                <div>
                    {post.body}
                </div>
            </div>
            <div className="post__btns">
                <CustomButton onClick={() => remove(post)}>
                    delete
                </CustomButton>
            </div>
        </div>
    );
};

export default PostItem;