type Listeners = {
    [id: string]: {
        event: string
        element: HTMLElement
        handler: (e: Event) => void
    }
}

export class EventListener {

    remove(listenerId: string) {
        const listener = this.listeners[listenerId]//listenerオブジェクトから指定のIDをlistenerに定義
    
        if(!listener) return

        listener.element.removeEventListener(listener.event, listener.handler)

        delete this.listeners[listenerId]
    
    }
    private readonly listeners: Listeners = {}

    add(listenerId: string, event: string, element: HTMLElement, handler: (e: Event) => void) {
        this.listeners[listenerId] = {
            event,
            element,
            handler,

        }

        element.addEventListener(event, handler)
    }
}