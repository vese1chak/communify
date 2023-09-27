const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let store = {
    _callSubscriber() {
        console.log('state changed');
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: "It's my first post", likesCount: 1},
                {id: 3, message: "It's my first post", likesCount: 2},
                {id: 4, message: "It's my first post", likesCount: 3}],
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Дима', img: 'https://via.placeholder.com/50'}, 
                {id: 2, name: 'Света', img: 'https://via.placeholder.com/50'},
                {id: 3, name: 'Артём', img: 'https://via.placeholder.com/50'},
                {id: 4, name: 'Антон', img: 'https://via.placeholder.com/50'},
                {id: 5, name: 'Илья', img: 'https://via.placeholder.com/50'},
                {id: 6, name: 'Алина', img: 'https://via.placeholder.com/50'}],
            messages: [
                {id: 1, message: 'Hi!'},
                {id: 2, message: 'Шо нi?'}],
            newMessageText: ''
        }
    },
    getState() {
        return this._state;
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === 'ADD-MESSAGE') {
            let newMessage = {
                id: 3,
                message: this._state.dialogsPage.newMessageText
            };
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
            this._state.dialogsPage.newMessageText = action.newText;
            this._callSubscriber(this._state);
        }
    }
};

export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})


window.store = store;

export default store;