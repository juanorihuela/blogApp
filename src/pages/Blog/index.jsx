import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import postList from "../../data/blog.json";

import "./styles.scss";


function Blog() {
    const params = useParams();
    const [postData, setPostData] = useState({});

    useEffect(() => {
        const postId = params.postId;
        const currentPost = postList.publicaciones.find((post) => post.id == postId);

        setPostData(currentPost);
    }, []);

    return (
        <div id="blogContainer">
            <div id="blogHeader">
                <img src={postData?.contenido?.portada} alt="altPortada" />
                <div className="coverOverlay">
                    <h1>{postData?.titulo}</h1>
                    <ul>
                        <li>{postData?.autor}</li> |
                        <li>{postData?.tiempo_lectura} min.</li> |
                        <li>{postData?.actualizado}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Blog;
