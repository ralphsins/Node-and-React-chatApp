import React from 'react'
import { PrettyChatWindow } from 'react-chat-engine-pretty';

function ChatsPage(props) {
    return (
        <div style={{ height: "100vh" }}>
            <PrettyChatWindow
                projectId="759cec90-eb7a-49f5-931d-cc23998c70bb"
                username={props.user.username}
                secret={props.user.secret}
                style={{ height: '100vh' }}
            />

        </div>
    )
}

export default ChatsPage
