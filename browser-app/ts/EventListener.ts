type Listeners = {
    [id: string]: {
        event: string
        element: HTMLElement
        handler: (e: Event) => void
    }
}