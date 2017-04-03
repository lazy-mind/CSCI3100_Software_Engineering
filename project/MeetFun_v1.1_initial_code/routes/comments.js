var express = require("express");
var router  = express.Router({mergeParams: true});
var Fun = require("../models/fun");
var Comment = require("../models/comment");
var middleware = require("../middleware");

//Comments New
router.get("/new", middleware.isLoggedIn, function(req, res){
    // find fun by id
    console.log(req.params.id);
    Fun.findById(req.params.id, function(err, fun){
        if(err){
            console.log(err);
        } else {
             res.render("comments/new", {fun: fun});
        }
    })
});

//Comments Create
router.post("/",middleware.isLoggedIn,function(req, res){
   //lookup fun using ID
   Fun.findById(req.params.id, function(err, fun){
       if(err){
           console.log(err);
           res.redirect("/funs");
       } else {
        Comment.create(req.body.comment, function(err, comment){
           if(err){
               console.log(err);
           } else {
               //add username and id to comment
               comment.author.id = req.user._id;
               comment.author.username = req.user.username;
               //save comment
               comment.save();
               fun.comments.push(comment);
               fun.save();
               console.log(comment);
               req.flash('success', 'Created a comment!');
               res.redirect('/funs/' + fun._id);
           }
        });
       }
   });
});

router.get("/:commentId/edit", middleware.isLoggedIn, function(req, res){
    // find fun by id
    Comment.findById(req.params.commentId, function(err, comment){
        if(err){
            console.log(err);
        } else {
             res.render("comments/edit", {fun_id: req.params.id, comment: comment});
        }
    })
});

router.put("/:commentId", function(req, res){
   Comment.findByIdAndUpdate(req.params.commentId, req.body.comment, function(err, comment){
       if(err){
           res.render("edit");
       } else {
           res.redirect("/funs/" + req.params.id);
       }
   }); 
});

router.delete("/:commentId",middleware.checkUserComment, function(req, res){
    Comment.findByIdAndRemove(req.params.commentId, function(err){
        if(err){
            console.log("PROBLEM!");
        } else {
            res.redirect("/funs/" + req.params.id);
        }
    })
});

module.exports = router;