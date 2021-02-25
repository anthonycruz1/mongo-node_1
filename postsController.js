const express = require('express');
const Post = require('./posts.js');
const mongoose = require('mongoose');

const postsController = {};

postsController.newPost = function (req, res, next) {
  console.log('newPost detected');
  const post = new Post({
    _id: new mongoose.Types.ObjectId(),
    title: req.body.title,
    body: req.body.postBody,
    category: req.body.category,
  });
  post
    .save()
    .then((result) => {
      console.log(result);
    })
    .catch((err) => console.log(err));
  res.status(200).json({
    message: 'Handled post',
    newPost: post,
  });
};

module.exports = postsController;
