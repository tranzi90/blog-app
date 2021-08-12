
const PostItem = ( {post : {title, body}, number} ) => {
    return (
        <div className="post">
            <div className="post__content">
                <strong>{number}. {title}</strong>
                <div>
                    {body}
                </div>
            </div>
            <div className="post__btns">
                <button>delete</button>
            </div>
        </div>
    );
};

export default PostItem;