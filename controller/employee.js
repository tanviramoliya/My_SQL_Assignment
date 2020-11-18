const Emp = require('../models/employee');

exports.getEmployee = (req,res, next) => {
   Emp.fetchAll()
   .then(([rows , fieldData]) => {
        res.status(200).json(rows);
   })
   .catch(err => {
       console.log(err);
   });
}

exports.AddEmployee = (req, res, next) => {
    const name = req.body.name;
    const emp_no = req.body.emp_no;
    const dept_id = req.body.dept_id;
    const join_date = req.body.join_date;
    const end_date = req.body.end_date;
    const emp = new Emp(null, name, emp_no, dept_id,join_date,end_date);
    emp.save()
    .then(() => 
    {
        res.json({ message : 'Employee Successfully Added!'});
    })
    .catch(err => {
        console.log(err);
    })
}

exports.DeleteEmployee = (req, res, next) => {
    const id = req.params.id;
    Emp.delete(id)
    .then(() => {
        res.json({ message : 'Employee Deleted!!'});
    })
    .catch(err => {
        console.log(err);
    })
}

exports.UpdateEmployee = (req , res , next) => {
    const id = req.params.id;
    const name = req.body.name;
    const emp_no = req.body.emp_no;
    const join_date = req.body.join_date;
    const end_date = req.body.end_date;
    Emp.Update(id,name , emp_no,join_date,end_date)
    .then(() => {
        res.json({message : 'Employee Data Updated!'})
    })
    .catch(err => {
        console.log(err);
    })
}