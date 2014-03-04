var jsonEx = new jsonClass;

function jsonClass(){
	var that = this;

	this.name = function(){
		$.getJSON("http://www.behance.net/v2/collections/15518289/projects?api_key=JX5qeSfassE0zdtJqv6FjTTq942R2QlI",
			function(data){
				that.nameComplete = data;
				that.receiveBoth();
			}		
		);	
	}
	
	this.contact = function(){
		$.ajax({
			url:"http://www.behance.net/v2/users/ddeasy/projects?api_key=JX5qeSfassE0zdtJqv6FjTTq942R2QlI",
			dataType: "jsonp",
			success: function(data){
				that.contactComplete = data;
				that.receiveBoth();
			}
		});	
	}
	
	this.alertJson = function(data){
	//show the final data on the page
		$("#alert_json").html(JSON.stringify(data));
	};
	
	this.callBoth = function(){
	//call both functions that contain the ajax requests
		this.name();
		this.contact();
	}		
	
	this.nameComplete = "";
	this.contactComplete = "";
	this.receiveBoth = function(){
		if (this.nameComplete != "" && this.contactComplete != ""){
			for (var x in this.nameComplete){
				for (var i in this.contactComplete.addresses){
					if (this.nameComplete[x].id == this.contactComplete.addresses[i].id){
						this.nameComplete[x].contact = this.contactComplete.addresses[i];
						
					}
				}
				
			}
			that.finalData = this.nameComplete;
			that.alertJson(that.finalData);
			//reset to empty strings
			this.nameComplete = "";
			this.contactComplete = "";
		}
	}
}