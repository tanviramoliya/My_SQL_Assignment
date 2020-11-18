const Dept = require('../models/department');

exports.getDepartment = (req,res, next) => {
   Dept.fetchAll()
   .then(([rows , fieldData]) => {
        res.status(200).json(rows);
   })
   .catch(err => {
       console.log(err);
   });
}

exports.AddDepartment = (req, res, next) => {
    const name = req.body.name;
    const created_date = req.body.created_date;
    const dept = new Dept(null, name, created_date);
    dept.save()
    .then(() => 
    {
        res.json({ message : 'Successfully Added!'});
    })
    .catch(err => {
        console.log(err);
    })
}

exports.DeleteDepartment = (req, res, next) => {
    const id = req.params.id;
    Dept.delete(id)
    .then(() => {
        res.json({ message : 'Department Deleted!!'});
    })
    .catch(err => {
        console.log(err);
    })
}

exports.UpdateDepartment = (req , res , next) => {
    const id = req.params.id;
    const name = req.body.name;
    const created_date = req.body.created_date;
    Dept.Update(id,name , created_date)
    .then(() => {
        res.json({message : 'Department Updated!'})
    })
    .catch(err => {
        console.log(err);
    })
}