import Paho from 'paho-mqtt'

async function getData() {
    return '1205'
}

class MessageBroker {
    constructor() {
        this.listenersMap = {}
        this.paths = []
        this.clientsMap = {}
        this.lostTimes = 0
        this.username = ''
        this.userId = ''
        this.mqhost =
            process.env.PRO_ENV === 'production' ? 'mq.yunxi.tv' : 'mq-test.yunxi.tv'
        this.getName()
    }

    async getName() {
        let data = await getData()
        this.userId = data.id ? `b-${data.id}` : ''
    }

    on(type, callback, thisArg) {
        let listeners = this.listenersMap[type]
        if (!listeners) {
            listeners = this.listenersMap[type] = []
        }

        listeners.push({
            type,
            thisArg,
            callback,
        })
    }

    off(type, callback) {
        let listeners = this.listenersMap[type]
        if (listeners && listeners.length > 0) {
            listeners = listeners.filter(function (item) {
                return item.callback != callback
            })
        }
    }

    reconnect(subscribePath) {
        this.disconnect(subscribePath)
        this.connect(subscribePath)
    }

    connect(subscribePath, callback) {
        if (this.clientsMap[subscribePath]) {
            return
        }

        let client = new Paho.Client(
            this.mqhost,
            Number(8084),
            this.getClientId()
        )

        client.onConnectionLost = (responseObject) => {
            if (responseObject.errorCode === 0) {
                console.log('连接已断开')
                this.reconnect(subscribePath)
            } else {
                console.log('异常：连接丢失' + responseObject.errorMessage)
                this.reconnect(subscribePath)
            }
        }

        client.onMessageArrived = (message) => {
            this.onMessageArrived(message)
        }

        console.log(this.userId)
        client.connect({
            useSSL: true,
            userName: this.userId,
            timeout: 7200,
            reconnect: true,
            onSuccess: () => {
                client.subscribe(subscribePath)
                if (callback) {
                    callback()
                }
            },
            keepAliveInterval: 30,
        })

        this.clientsMap[subscribePath] = client

        return client
    }

    onMessageArrived(payload) {
        try {
            let message = JSON.parse(payload.payloadString)
            let type = message.type
            let listeners = this.listenersMap[type] || []
            listeners.forEach((listener) => {
                if (
                    listener &&
                    (typeof listener.callback).toLowerCase() === 'function'
                ) {
                    listener.callback.call(listener.thisArg, message)
                }
            })
        } catch (e) {
            console.error('%o', e)
        }
    }

    getClientId() {
        let chars = [
            '0',
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8',
            '9',
            'A',
            'B',
            'C',
            'D',
            'E',
            'F',
            'G',
            'H',
            'I',
            'J',
            'K',
            'L',
            'M',
            'N',
            'O',
            'P',
            'Q',
            'R',
            'S',
            'T',
            'U',
            'V',
            'W',
            'X',
            'Y',
            'Z',
            'a',
            'b',
            'c',
            'd',
            'e',
            'f',
            'g',
            'h',
            'i',
            'j',
            'k',
            'l',
            'm',
            'n',
            'o',
            'p',
            'q',
            'r',
            's',
            't',
            'u',
            'v',
            'w',
            'x',
            'y',
            'z',
        ]
        let nums = ''

        for (let i = 0; i < 32; i++) {
            let id = parseInt(Math.random() * 61)
            nums += chars[id]
        }

        return nums
    }

    disconnect(subscribePath) {
        let client = this.clientsMap[subscribePath]
        if (client && subscribePath) {
            this.clientsMap[subscribePath] = null
            try {
                client.disconnect()
            } catch (e) {
                console.error(e)
            }
        }
    }
}

export default new MessageBroker()

