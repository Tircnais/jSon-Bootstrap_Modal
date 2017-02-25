
function grupos(event) {
    $('#solucion').empty();
    /* Act on the event */
    event.preventDefault();
    alert('Cargando datos...');
    var d=1;
    $.ajax({
        url:'https://sica.utpl.edu.ec/rest/groups/',
        type: 'POST',
        dataType: 'jsonp',
        data: {},
        success: function(data, textStatus, xhr){
            console.log('OK!');
            console.log(data.name);
            console.log(data.results);
            var div="<div class='table-responsive'>";
            var finDIv="</div>";
            var tab="<table class='table table-bordered table-condensed table-hover'>";
            div+=tab;
            var cuerpo="<tr class='success'><th>TITULO</th><th>Acronimo</th><th>Info</th></tr>";
            tab+=cuerpo;
            var fintab= "</table>";
            var lista="";
            lista+= '<b>Programas existentes</b>';
            for (var i = data.items.length - 1; i >= 0; i--) {
                tab+="<tr class='color'>";
                var item = data.items[i].program;
                var titulo = data.items[i].program;
                tab+="<td>"+titulo+"</td>";
                console.log("titulo"+acronimo);
                var item = data.items[i];
                var acronimo = item.acronym;
                tab+="<td>"+acronimo+"</td>";
                var ver= "Ver mas";
                tab+= '<td><a href="#noticia'+ d + '" rel="modal:open">'+ver+'</a></td></tr>';
                d++;
            };
            tab+=fintab;
            div+=tab;
            div+=finDIv;
            console.log("tabla "+tab);
            $(lista).appendTo('#solucion');
            $(div).appendTo('#solucion');
        },
        error: function(xhr, textStatus){
          console.log('Error');
        }
    }); //end Ajax
}

/**
<div id="ex1" style="display:none;">
    <p>Thanks for clicking.  That felt good.  <a href="#" rel="modal:close">Close</a> or press ESC</p>
     <p><a href="#ex1" rel="modal:open">Open Modal</a></p>
  </div>
*/

function informacion(event) {
    $('#info').empty();
    /* Act on the event */
    event.preventDefault();
    alert('Cargando datos...');
    var d=1;
    $.ajax({
        url:'https://sica.utpl.edu.ec/rest/groups/',
        type: 'POST',
        dataType: 'jsonp',
        data: {},
        success: function(data, textStatus, xhr){
            console.log('OK!');
            console.log(data.name);
            console.log(data.results);

            for (var i = data.items.length - 1; i >= 0; i--) {
                //console.log(data.items[i]);
                var item = data.items[i];
                var columna='';
                columna+='<div class="color" id="noticia'+d+'" style="display:none">';
                var modal='<div class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel"><div class="modal-dialog modal-lg" role="document"><div class="texto modal-content">';
                //var modal= '<div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><h4 class="modal-title" id="myModalLabel">'+item.program+'</h4></div><div class="texto modal-body">';
                var finModal='</div><div class="modal-footer"><button type="button" class="btn btn-primary" data-dismiss="modal"><a href="#" rel="modal:close">Close</a></button></div></div></div>';
                var p='<div class="row">';
                modal+=p;
                modal +='<div class="col-xs-12"><p><b id="title">Programa:</b><br>'+item.program+'</p></div>';
                modal += '<div class="col-xs-4 col-sm-6"><p><b id="title">Area:</b><br> '+item.area+'</p></div>';
                modal += '<div class="col-xs-4 col-sm-6"><p><b id="title">Coordinador:</b><br> '+item.coordinator+'</p></div>';
                modal += '<div class="col-xs-4 col-sm-12"><p><b id="title">Acronimo:</b><br> '+item.acronym+'</p></div>';

                //p += '<p><b>Actividad:</b><br>'+item.activities+'</p>';
                
                modal += '<div class="col-xs-12 col-sm-12"><p><b id="title">Descripción:</b><br>'+item.description+'</p></div></div>';

                //p += '<p><b>Imagen:</b><br><img src="'+item.image+'" id="imgAjax"></p>';
                modal+=finModal;
                columna+=modal;
                columna+='</div>';
                console.log(columna);
                $(columna).appendTo('#info');
                d++;
            };
        },
        error: function(xhr, textStatus){
          console.log('Error');
        }
    }); //end Ajax
}

$(document).ready(function(){
    
    /*ICONO subir/bajar */
	$(window).scroll(function(){
        /*esta funcion revisa si ha subido el scroll*/
		if( $(this).scrollTop() > 0 ){
            /*si el scrool sube*/
			$('.ir-arriba').slideDown(300);
            /*el boton aparece*/
		} else {
			$('.ir-arriba').slideUp(300);
            /*cuando sube el boton desaparece*/
		}
	});
    $('.ir-arriba').click(function(){
        /*al dar click en el boton*/
		$('body, html').animate({
            /*suba*/
			scrollTop: '0px'
		}, 300);
        /*300 miliseg (tiempo de subir)*/
	});
    
    
    $('#cargar').click(grupos);
    $('#cargar').click(informacion);
    $("#limpiar").click(function(event) {
          /* Act on the event */
          $('#solucion').empty();
          $('#info').empty();
    });
    $('#Gestión y conservación de recursos naturales.').click(function(event) {
        event.preventDefault();
        $.get(this.href, function(html) {
            $(html).appendTo('body').modal();
        });
    });
    $('#Electrónica, redes y telecomunicaciones.').click(function(event) {
        event.preventDefault();
        $.get(this.href, function(html) {
            $(html).appendTo('body').modal();
        });
    });
    $('#Salud pública y medicina familiar.').click(function(event) {
        event.preventDefault();
        $.get(this.href, function(html) {
            $(html).appendTo('body').modal();
        });
    });
});