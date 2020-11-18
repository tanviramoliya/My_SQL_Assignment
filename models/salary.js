const db = require('../util/database');

module.exports = class Salary {
    constructor(id, emp_id , month , year , amount, generated_date){
        this.id = id;
        this.emp_id = emp_id;
        this.month = month;
        this.year = year;
        this.amount = amount;
        this.generated_date = generated_date;
    }
        
    save() { 
       return db.execute('INSERT INTO salary (id , emp_id , month , year , amount, generated_date) VALUES ( ? , ? , ?, ? , ? , ?)',[this.id , this.emp_id , this.month,this.year,this.amount,this.generated_date]);
    }
    static fetchAll() {
        return db.execute('SELECT * FROM salary');
    }
    static delete(id) {
        return db.execute('DELETE FROM salary WHERE id = ?',[id]);
    }
    static Update(id,month,year,amount,generated_date) {
        return db.execute('UPDATE salary SET month = ?, year = ?, amount = ?, generated_date = ? WHERE id = ?',[month , year,amount, generated_date ,id]);
    }
}