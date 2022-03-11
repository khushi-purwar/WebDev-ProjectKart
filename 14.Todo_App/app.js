const express = require("express");
const bodyParser = require("body-parser");
//const date = require(__dirname+"/date.js");
const _ =require("lodash");
const mongoose = require("mongoose");
const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
const uri ="mongodb+srv://webkarttodo:abcde@clusterp.f2qwz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(uri);
const itemsSchema = new mongoose.Schema({
  name:String
});
const Item = mongoose.model("Item",itemsSchema);
const item1 = new Item({
  name:"Welcome to your to do List!"
});
const item2 = new Item({
  name:"Hit the + button to add a new item."
});
const item3 = new Item({
  name:"<-- Hit this to delete an item."
});
const defaultItems =[item1,item2,item3];
/**/
const listSchema = new mongoose.Schema({
  name:String,
  items:[itemsSchema]
});
const List = mongoose.model("List",listSchema);
//const items =["Buy Food", "Cook Food", "Eat Food"];
//const workItems =[];
app.get("/", function(req, res){

  Item.find({}, function(err,foundItems){
    if (err)
    console.log(err);
    else
    {
      if(foundItems.length===0) {
        Item.insertMany(defaultItems, function(err){
          if(err)
          console.log(err);
          else
          console.log("Successfully saved default items to database");
        });
        foundItems=defaultItems;
      }
      //setTimeout(function() { mongoose.connection.close();}, 1000);
          res.render('list', {
        listTitle: "Today",
        newListItem: foundItems
      });
    }
  });
//  const day = date.getDate();
  
  
});

app.get("/:customListName", function(req,res){
  const customListName=_.capitalize(req.params.customListName);
  List.findOne({name:customListName}, function(err,foundList){
    if(err)
    console.log(err);
    else
    {
      if(!foundList)
      {
        const list = new List({
          name:customListName,
          items:defaultItems
        });
        list.save();
        res.redirect("/"+customListName);
      }
      else
      {
          res.render('list',{
          listTitle:foundList.name,
          newListItem:foundList.items
        });
      }
    }
  }); 
});

app.get("/about", function(req,res){
  res.render('about');
});

app.post("/", function(req,res){
  let itemName = req.body.newItem;
  const listName = req.body.list;
  const item = new Item({
    name:itemName
  });
  if(listName==="Today"){
    item.save();
    res.redirect("/");
  }
  else
  {
    List.findOne({name:listName}, function(err, foundList){
      foundList.items.push(item);
      foundList.save();
      res.redirect("/"+listName);
    });
  }
  /*if(req.body.list ==="Work List")
  {
    workItems.push(item);
    res.redirect("/work");
  }
  else
  {
    items.push(item);
    res.redirect("/");
  }*/
  
});
app.post("/delete", function(req,res){
  const checkedItemId=req.body.checkbox;
  const  listName = req.body.listName;
  if(listName==="Today")
  {
      Item.findOneAndRemove({_id:checkedItemId},function(err){
      if(err)
      console.log(err);
      else
      console.log("Checked Item removed");
    });
    res.redirect("/");
  }
  else
  {
    List.findOneAndUpdate({name:listName}, {$pull:{items:{_id:checkedItemId}}}, function(err, foundList){
      if(!err)
      {
        res.redirect("/"+listName);
      }
    });
  }
  
});

app.listen(process.env.PORT || 3000, function(){
  console.log("Server is up and running");
});
