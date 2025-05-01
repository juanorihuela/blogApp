import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import RelatedPost from "./components/RelatedPost"

import postList from "../../data/blog.json";

import "./styles.scss";


function Blog() {
    const params = useParams();
    const [postData, setPostData] = useState({});
    const [relatedList, setRelatedList] = useState([]);
    const navigate = useNavigate();

    const onClickEvent = (id) => {
        navigate(`/blog/${id}`);
    };

    useEffect(() => {
        const postId = params.postId;
        const currentPost = postList.publicaciones.find((post) => post.id == postId);
        setPostData(currentPost);

        const currentRelated = postList.publicaciones.filter((post) => post.id != postId);
        setRelatedList(currentRelated);
    }, [params]);

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

            <div id="blogContent">
                <div id="blogBody">
                    <p className="blogText intro">
                        {postData?.contenido?.introduccion}
                    </p>

                    <div id="graphicSection">
                        <img className="blogGrafico" src={postData?.contenido?.grafico} alt="graficoAlt" />
                        <span>| {postData?.contenido?.descripcion_grafico}</span>
                    </div>

                    <p className="blogText">
                        {postData?.contenido?.cuerpo}
                    </p>

                    <div id="phraseSection">
                        <h1>- {postData?.contenido?.frase}</h1>
                        <small>{postData?.contenido?.autor_frase}.</small>
                    </div>

                    <p className="blogText">
                        {postData?.contenido?.conclusion}
                    </p>
                    <small id="smallAuthor">{postData?.autor}, publicado el {postData?.actualizado}</small>
                </div>

                <div id="relatedPost">
                    <div id="relatedSection">
                        {relatedList.map((post) =>
                            <RelatedPost
                                key={post.id}
                                id={post.id}
                                relatedPostData={post}
                                onClickEvent={() => onClickEvent(post.id)}
                            />
                        )}
                    </div>
                    <div id="tagsSection">
                        <ul>
                            {postData?.tags?.map((tag) => 
                                <li key={tag}>{ tag }</li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
