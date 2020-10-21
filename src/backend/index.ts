import express from 'express'
import messageController from './controllers/message'
import postController from './controllers/post'
import {createConnection} from 'typeorm'

import Post from './models/Post'

const app: express.Express = express()

// 追加 サーバの強化追加
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// 追加終了

// 追加 処理の外だし
app.use("/messages", messageController)
app.use("/api/posts", postController)
app.use("/", express.static(__dirname + "/public"))
app.get('*', (req, res) => {
    res.status(200).sendFile(__dirname + "/public/index.html");
});
// 追加終了

!async function initialize(){
    await createConnection({
        type: "postgres",
        url: process.env.DATABASE_URL || "postgres://postgres:postgres@localhost:5432/postgres",
        synchronize: true,
        entities: [
            Post,
        ],
        extra: {
            ssl: (!!process.env.DATABASE_SSL) ? {
                rejectUnauthorized: false,
            } : false,
        }
    });

// 3000番ポートでAPIサーバ起動
const port = process.env.PORT || 3000;
    app.listen(port, () => {
        console.log("ポート" + port + "番で起動しました！")
    })
}()