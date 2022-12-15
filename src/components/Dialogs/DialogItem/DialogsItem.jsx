import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {

    let pass = "/Dialogs/" + props.id;

    return <div className={s.Dialog + ' ' + s.active}>
        <NavLink to={pass}>{props.name}</NavLink>
    </div>
}

const Message = (props) => {

    return <div className={s.message}>{props.message}</div>
}

const Dialogs = (props) => {

    let DialogsData = [
        {id: 1, name: 'Reainer Braun'},
        {id: 2, name: 'Eren Yeager'},
        {id: 3, name: 'jan kirushutain'},
        {id: 4, name: 'Bertold Hoover'}
    ]

    let MessagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hi'},
        {id: 3, message: 'Hi'},
        {id: 4, message: 'Hi'}
    ]

    let DialogsElements = DialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

    let MessagesElements = MessagesData.map(messages => <Message message={messages.message} id={messages.id}/>);

    return (
        <div className={s.Dialogs}>
            <div className={s.DialogsItem}>
                {DialogsElements}
            </div>
            <div className={s.messages}>
                {MessagesElements}
            </div>
        </div>
    )
}
export default Dialogs;