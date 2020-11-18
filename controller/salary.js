const Sal = require('../models/salary');

exports.getSalary = (req,res, next) => {
   Sal.fetchAll()
   .then(([rows , fieldData]) => {
        res.status(200).json(rows);
   })
   .catch(err => {
       console.log(err);
   });
}

exports.AddSalary = (req, res, next) => {
    const emp_id = req.params.emp_id;
    const month = req.body.month;
    const year = req.body.year;
    const amount = req.body.amount;
    const generated_date = req.body.generated_date;
    const sal = new Sal(null,emp_id, month, year,amount,generated_date);
    sal.save()
    .then(() => 
    {
        res.json({ message : 'Salary Successfully Added!'});
    })
    .catch(err => {
        console.log(err);
    })
}

exports.DeleteSalary = (req, res, next) => {
    const id = req.params.id;
    Sal.delete(id)
    .then(() => {
        res.json({ message : 'Salary Removed!!'});
    })
    .catch(err => {
        console.log(err);
    })
}

exports.UpdateSalary = (req , res , next) => {
    const id = req.params.id;
    const month = req.body.month;
    const year = req.body.year;
    const amount = req.body.amount;
    const generated_date = req.body.generated_date;
    Sal.Update(id,month , year,amount,generated_date)
    .then(() => {
        res.json({message : 'Salary Updated!'})
    })
    .catch(err => {
        console.log(err);
    })
}