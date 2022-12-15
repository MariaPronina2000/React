import profileReducer from "./profileReducer";
import messagesReducer from "./messagesReducer";






let store = {

    _state: {

        profilePage: {

            PostData: [
                {id: 1, message: 'Reiner, sit down!', likesCount: 15},
                {id: 2, message: 'Reiner, stand up!', likesCount: 20}
            ],
            NewPostText: 'it.reiner.com'
        },
        messagesPage: {
            MessagesData: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'Hi'},
                {id: 3, message: 'Hi'},
                {id: 4, message: 'Hi'}
            ],
            DialogsData: [
                {id: 1, name: 'Reainer Braun'},
                {id: 2, name: 'Eren Yeager'},
                {id: 3, name: 'Jan Kirushutain'},
                {id: 4, name: 'Bertold Hoover'}
            ],
            ImgData: [
                {id: 1, img: <img alt='rainerface' src="https://pbs.twimg.com/media/E2tVpb5XEAEFQX3.jpg"/>},
                {id: 2,
                    img: <img alt='egerface'
                              src="https://abrakadabra.fun/uploads/posts/2021-12/1639229544_1-abrakadabra-fun-p-titan-praroditel-erena-1.png"/>
                },
                {id: 3,
                    img: <img alt='janface'
                              src="https://i.pinimg.com/originals/de/ef/d1/deefd1d82659ebfa18e0dc44aecbcda5.jpg"/>
                },
                {id: 4,
                    img: <img alt='bertoldface'
                              src="https://i.pinimg.com/originals/d5/8f/e8/d58fe8d2974dffd5b8b7e8feaa135907.jpg"/>
                }
            ],
            newMessagesData: ""
        },


    },

    dispatch(action) {

        this._state.profilePage = profileReducer (this._state.profilePage, action);
        this._state.messagesPage = messagesReducer (this._state.messagesPage, action);
        this._CallSubsriber(this._state);




    },



    _CallSubsriber() {
        console.log('state was changed');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._CallSubsriber = observer;
    },

}







export default store;
window.store = store;