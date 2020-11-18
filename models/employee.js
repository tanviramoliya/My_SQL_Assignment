const db = require('../util/database');

module.exports = class Employee {
    constructor(id, name, emp_no, dept_id, join_date, end_date){
        this.id = id;
        this.name = name;
        this.emp_no = emp_no;
        this.dept_id = dept_id;
        this.join_date = join_date;
        this.end_date = end_date;
    }
        
    save() { 
       return db.execute('INSERT INTO employee (id , name, emp_no , dept_id, join_date , end_date) VALUES ( ? , ? , ?, ? , ? , ?)',[this.id , this.name , this.emp_no,this.dept_id,this.join_date,this.end_date]);
    }
    static fetchAll() {
        return db.execute('SELECT * FROM employee');
    }
    static delete(id) {
        return db.execute('DELETE employee,salary FROM employee INNER JOIN salary ON salary.emp_id = employee.id WHERE employee.id = ?',[id]);
    }
    static Update(id,name,emp_no,join_date,end_date) {
        return db.execute('UPDATE employee SET name = ?, emp_no = ?,join_date = ?, end_date = ? WHERE id = ?',[name , emp_no ,join_date, end_date,id]);
    }
}