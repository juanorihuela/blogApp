import "./styles.scss";


function RelatedPost({ postId, relatedPostData, onClickEvent }) {
    return (
        <div id={postId} className="relatedContainer" onClick={onClickEvent}>
            <div className="relatedImage">
                <img src={relatedPostData.contenido.portada} alt="imgAlt" />
            </div>
            <div className="relatedContent">
                <h6>{relatedPostData.titulo}</h6>
                <small>{relatedPostData.actualizado}</small>
            </div>
        </div>
    );
};

export default RelatedPost;
