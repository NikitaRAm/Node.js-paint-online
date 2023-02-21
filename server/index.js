import express from "express";
import expressWs from "express-ws";

const app = express();
const WSserver = expressWs(app);
const aWss = WSserver.getWss(); 

const PORT = process.env.PORT || 5000;

app.ws('/', (ws, req) => {
    console.log('connection established')
    ws.send('success')
    ws.on('message', (msg) => {
        msg = JSON.parse(msg);
        switch (msg.method) {
            case "connection":
                connectionHandler(ws, msg)
            break;
        }
    })
})

app.listen(PORT, () => {
    console.log('server has been started')
})

const connectionHandler = (ws, msg) => {
    ws.id = msg.id;
    broadcastConnection(ws, msg);
}

const broadcastConnection = (ws, msg) => {
    aWss.clients.forEach(client => {
        if (client.id === msg.id) {
            client.send(`User ${msg.username} connected`)
        }
    })
}