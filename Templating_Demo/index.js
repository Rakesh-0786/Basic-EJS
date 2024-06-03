const express=require("express");
const app=express();
const path=require('path');
// const redditData=require('./data.json')
// console.log(redditData);


// inside publib we can use the css js and img etc.

app.use(express.static(path.join(__dirname,'public')))


// now im going to do is tell my app to use EJS.
// with the hepl of app.set and set accepts two arguments.
// the key  that we wanna set and the corresponding value or the property and its value.

app.set('view engine','ejs');
// The line app.set('view engine', 'ejs'); is a configuration setting in an Express.js application that tells Express to use EJS as the templating engine for rendering views. This means that when you use the res.render method to render a view, Express will use EJS to process the view file and generate the HTML.
// by default when we create a new Express app and we are using some view engine, Express is going to assume that our viewd, our templates exist  in the directory called views.
//  to resolve this issues we can create new a folder with the nane views and inside the view we can add our ejs.

// we can access this with any incorrect folder or directory
app.set('views',path.join(__dirname,'/views'))

app.get("/",(req,res) =>{
    const name="Rakesh";
    res.render('home.ejs',{name});
})

app.get('/cats',(req,res)=>{
    const cats=[
        "Blue","Rocket","Monty","Stephanie","Winston"
    ]
    res.render("cats",{cats});
})

// for generating the random number:
app.get('/rand',(req,res)=>{
    const num=Math.floor(Math.random()*10)+1;
    res.render('random',{num});
})

app.get('/r/:subreddit',(req,res) =>{
    const {subreddit} =req.params;
    res.render('subreddit', {subreddit});
})


const port=4000;
app.listen(port,()=>{
    console.log(`This Server is Running on the port ${port}`);
})