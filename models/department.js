const db = require('../util/database');

module.exports = class Department {
    constructor(id, name, date){
        this.id = id;
        this.name = name;
        this.date = date;
    }
        
    save() { 
       return db.execute('INSERT INTO department (id , name, created_date) VALUES ( ? , ? , ?)',[this.id , this.name , this.date]);
    }
    static fetchAll() {
        return db.execute('SELECT * FROM department');
    }
    static delete(id) {
        return db.execute('DELETE FROM department WHERE id = ?',[id]);
    }
    static Update(id,name,date) {
        return db.execute('UPDATE department SET name = ?, created_date = ? WHERE id = ?',[name , date ,id]);
    }
}