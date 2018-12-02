<?php  
      if (isset($_POST['action'])) {
  
       $dest = "adrigonz1990@gmail.com";
  
       $msg = "From: ".$_POST['mail']."\r\n";
  
       $head.= "To: cem20704@gmail.com";
   
	//    $head.= "Cco: cem20704@gmail.com";
   
       $msg.= "------------------------------- \n";
 
       $msg.= "         Comentarios            \n";
  
       $msg.= "------------------------------- \n";
   
       $msg.= "Nombre:   ".$_POST['name']."\n";
 
    //    $msg.= "Password:  ".$_POST['pass']."\n";
  
       $msg.= "HORA:     ".date("h:i:s a ")."\n";
  
       $msg.= "FECHA:    ".date("D, d M Y")."\n";
  
       $msg.= "IP:       ".$REMOTE_ADDR."\n";
  
       $msg.= "------------------------------- \n\n";
 
       $msg.= $_POST['consult']."\n\n";
  
       $msg.= "------------------------------- \n";

       if (mail("adrigonz1990@gmail.com", "http://gonzalez-abogado.com", "hola q talk")) {
 
        $aviso = "Su mensaje fue enviado.";
		echo $aviso;
 
       } else {

        $aviso = "Error de env�o.";
		echo $aviso;
 
       }

      }
?>