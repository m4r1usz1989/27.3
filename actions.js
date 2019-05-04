import uuid from uuid;

const ADD_COMMENT = 'ADD_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const DELETE_COMMENT = 'DELETE_COMMENT';
const LIKE_COMMENT = 'LIKE_COMMENT';
const UNLIKE_COMMENT = "UNLIKE_COMMENT";

function addComment(text) {
    return {
        type: ADD_COMMENT,
        text,
        id: uuid.v4()
    }
}

function editComment(id, text) {
    return {
        type: EDIT_COMMENT,
        id,
        text
    }
}

function deleteComment(id) {
    return {
        type: DELETE_COMMENT,
        id
    }
}

function likeComment(id) {
    return {
        type: LIKE_COMMENT,
        id
    }
}

function unlikeComment(id) {
    return {
        type: UNLIKE_COMMENT,
        id
    }
}

const boundAddComment = text => dispatch(addComment(text));
const boundEditComment = (id, text) => dispatch(editComment(id, text));
const boundDeleteComment = id => dispatch(deleteComment(id));
const boundLikeComment = id => dispatch(likeComment(id));
const boundUnlikeComment = id => dispatch(unlikeComment(id));