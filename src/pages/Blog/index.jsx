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
                    <div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
