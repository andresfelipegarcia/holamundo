<!DOCTYPE html> 
<html> 
<head> 
	<meta charset="utf-8"> 
	<meta http-equiv="X-UA-Compatible" content="IE=edge"> 
	<title>WebCam</title>
	 <link rel="stylesheet" href="css/bootstrap.css">  
	 <script src="js/jquery.js"></script> 
	 <script type="text/javascript" src="js/webcam.min.js"></script> 
	 <script src="js/app.js"></script> 
	</head> 
	<body> 
		<div class="container" style="margin-top:10px;">   
			<div class="row form-group"> 
				<div class="col-xs-12 col-md-6"> 
					<div class="panel panel-default"> 
						<div class="panel-heading"> 
							<h3 class="panel-title">WebCam</h3> 
						</div> 
						<div class="panel-image hide-panel-body" id="camara">  
						 </div>   
						 <div class="panel-footer text-center"> 
						 	<button onclick="tomarFoto();" class="btn btn-success btn-block">Tomar Fotografia</button> 
						 </div> 
						</div> 
					</div>  
					 <div class="col-xs-12 col-md-6">
					  <div class="panel panel-default"> 
					  	<div class="panel-heading"> 
					  		<h3 class="panel-title">Tu Fotografia</h3> 
					  	</div> 
					  	<div class="panel-image hide-panel-body" id="foto">
					  	 <img src="http://666a658c624a3c03a6b2-25cda059d975d2f318c03e90bcf17c40.r92.cf1.rackcdn.com/unsplash_52c470899a2e1_1.JPG" class="panel-image-preview" /> </div> 
					  	 <div class="panel-footer text-center"> 
					  	 </div> 
					  	</div> 
					  </div> 
					</div> 
				</div> 
			</body> 
			</html> 