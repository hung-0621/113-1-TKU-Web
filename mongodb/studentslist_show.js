const MongoClient = require('mongodb').MongoClient;

const uri = "mongodb://localhost:27017";
const db_name = "411630428";
const collection_name = 'studentslist';

async function show_db() {
    const client = new MongoClient(uri);
    try {
        // 連接到 MongoDB
        await client.connect();
        console.log("成功連接到 MongoDB");
        const db = client.db(db_name);
        const collection = db.collection(collection_name);

        // 顯示studentlist
        const result = await collection.find({}).toArray();
        result.forEach((doc) => {
            console.log(doc)
        });

    } catch (error) {
        console.error("發生錯誤：", error);
    } finally {
        await client.close();
        console.log("資料庫關閉");

    }
}

show_db();