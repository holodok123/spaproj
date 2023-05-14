const sqlite = require('sqlite3');

// 1. Коннектимся к бд (создается если нет файла)

const db = new sqlite.Database('./spa.db', () => { });


// 2. Выполняем несколько запросов на создание несольких таблиц
db.serialize(() => {
    db.run(`
    CREATE TABLE IF NOT EXISTS feedback (
        id INT,
        firstname STRING,
        secondename STRING,
        email STRING,
        meesage STRING,
        primary KEY (id),
        FOREIGN KEY (store_id) REFERENCES store (id) 
        
    )
    `)
    db.run(`
    CREATE TABLE IF NOT EXISTS store (
        id INT,
        person INT,
        program STRING,
        firstdate DATE,
        secondedate DATE,
        primary KEY (id),
        FOREIGN KEY (product) REFERENCES prod (id)
    )
    `)
    db.run(`
    CREATE TABLE IF NOT EXISTS product (
        id INT,
        reviews STRING,
        primary KEY (id),
        FOREIGN KEY (users) REFERENCES users (id)
    )
    `)
    db.run(`
    CREATE TABLE IF NOT EXISTS users (
        id INT,
        firstname STRING,
        secondename STRING,
        thirdname STRING,
        number phone STRING,
        primary KEY (id)
    )
    `)
})


// 3. Закрываем БД

db.close()