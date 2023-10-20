import { EventListener } from './EventListener'

class Application {
    start() {
        const eventListener = new EventListener()
        const button = document.getElementById('deleteAllDoneTask')

        if(!button) return

        eventListener.add(
            'sample',
            'click',
            button,
            () => alert('clicked'),

        )
    }
}

window.addEventListener('load',() => { //windowがloadされた時の処理
    const app = new Application() //新しいインスタンスの作成
    app.start(); //先ほどの定数で定義したオブジェクトの実行
})