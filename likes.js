import { getToken, renderLike } from "./index.js";
import { addLike, removeLike } from "./api.js";

export function likes () {
    const likeButtons = document.querySelectorAll(".like-button");
    for (const likeButton of likeButtons) {
        likeButton.addEventListener("click", () => {
            // проверка на поставленный лайк
            if (likeButton.dataset.isLiked==='false') {
                console.log('лайк');
                addLike({id: likeButton.dataset.postId, token: getToken() })
                .then(() =>{
                    renderLike();
                })
            } else {
                console.log('диз');
                removeLike({id: likeButton.dataset.postId, token: getToken() })
                .then(() =>{
                    renderLike();
                })
            }
        });        
    }
}

