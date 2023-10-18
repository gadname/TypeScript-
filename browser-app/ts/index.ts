class Application {
    start() {
        const button = document.getElementById('deleteAllDoneTask')

        if(!button) return

        console.log(button)
    }
}

window.addEventListener('load',() => { //windowがloadされた時の処理
    const app = new Application() //新しいインスタンスの作成
    app.start(); //先ほどの定数で定義したオブジェクトの実行
})