import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import dialogsReducer from "./dialogs-reducer";

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
        },
        sidebar: {}
    },
    getState() {
        return this._state;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state)
    }
};

window.store = store;

export default store;