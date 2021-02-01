var express = require('express');
const router = express.Router();
const connection = require('../../model/database');
connection.connect(function(err)
{
    if(err)
        console.log(err);
    else
        console.log('Connected with Database');
});

router.get('/',function(req,res)
{
    res.send("Welcome To server ");
});
router.get('/adminlogin',function(req,res)
{
    res.render('AdminLogin');
});
router.get('/adminregister',function(req,res)
{
    res.render('AdminRegister');
});
router.get('/studentlogin',function(req,res)
{
    res.render('StudentLogin');
});
router.get('/studentregister',function(req,res)
{
    res.render('StudentRegister');
});
router.post('/validateadminloginform', function(req,res)
{
    var email=req.body.email;
    var pwd = req.body.password;
    connection.query('SELECT * FROM adminregister WHERE mailid LIKE ? AND password LIKE ?',[email,pwd],function(err,result)
    {
        if(result !='')
        {
            res.render('MarkEntrySheet');
        }
        else{
            res.render('AdminLogin');
        }
    });
});
router.post('/validateadminregisterform',function(req,res)
{
    var name = req.body.name;
    var email = req.body.email;
    var pwd = req.body.password;
    connection.query('INSERT INTO adminregister VALUES(?,?,?)',[name,email,pwd],function(err,result)
    {
        if(err)
            throw err;
        else
            console.log("Values inserted successfully");
    });
    res.render('AdminLogin');
});
router.post('/validatestudentloginform', function(req,res)
{
    var email=req.body.email;
    var pwd = req.body.password;
    connection.query('SELECT * FROM studentregister WHERE mailid LIKE ? AND password LIKE ?',[email,pwd],function(err,result)
    {
        if(result != '')
        {
            connection.query('SELECT studentregister.name,studentregister.rollno,studentregister.mailid,subject_marks.dateofexam,subject_marks.sub1,subject_marks.sub2,subject_marks.sub3,subject_marks.sub3,subject_marks.sub4 FROM studentregister JOIN subject_marks USING(rollno) WHERE studentregister.mailid LIKE ?',[email],function(req,result1)
            {
                        res.render('Marksheet',{data:result1});
            });
        }
        else{
            res.render('StudentLogin');
        }
    });
});
router.post('/validatestudentregisterform',function(req,res)
{
    var name = req.body.name;
    var rollno=req.body.rollno;
    var email = req.body.email;
    var pwd = req.body.password;
    connection.query('INSERT INTO studentregister VALUES(?,?,?,?)',[rollno,name,email,pwd],function(err,result)
    {
        if(err)
            throw err;
        else
            console.log("Values inserted successfully");
    });
    res.render('StudentLogin');
});
router.post('/validatemarkentryform',function(req,res)
{
    var name = req.body.name;
    var rollno=req.body.rollno;
    var dateofexam = req.body.date1;
    var sub1=req.body.sub1;
    var sub2=req.body.sub2;
    var sub3=req.body.sub3;
    var sub4=req.body.sub4;
    connection.query('INSERT INTO subject_marks VALUES(?,?,?,?,?,?)',[rollno,dateofexam,sub1,sub2,sub3,sub4],function(err,result)
    {
        if(err)
            throw err;
        else
            console.log("Values inserted successfully");
    });
    res.render('MarkEntrySheet');
});
router.get('*',function(req,res)
{
    res.render('404pagenotfound');
});
module.exports = router;
