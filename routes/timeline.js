exports.list = function(req, res, next){
  req.db.tasks.find({completed: false}).toArray(function(error, tasks){
    if (error) return next(error);
    res.render('timeline', {
      title: 'Todo List',
      tasks: tasks || []
    });
  });
};