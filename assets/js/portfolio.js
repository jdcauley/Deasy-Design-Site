

  var deasy_portfolio ={
    handlerData:function(resJSONP){
      var templateSource   = $("#portfolio").html(),
        template = Handlebars.compile(templateSource),
        studentHTML = template(resJSONP);
        $('#deasyportfolio').html(studentHTML);
      },
      loadStudentData : function(){
      $.ajax({
        method:'GET',
        url:"http://www.behance.net/v2/users/ddeasy/projects?api_key=JX5qeSfassE0zdtJqv6FjTTq942R2QlI",
        processData: true,
        dataType: "jsonp",
        success:this.handlerData
      })
    }
  };
  $(document).ready(function(){
    deasy_portfolio.loadStudentData();
    });