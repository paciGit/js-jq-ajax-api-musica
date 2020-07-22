$.ajax({
  url: 'https://flynn.boolean.careers/exercises/api/array/music',
  success: function(data, state){
    /* Variabili */
    var array = data.response;
    var objArray = data.response;
    /* Ciclo per album */
    for (var i = 0; i < array.length; i++) {
      objArray[i];

			/* Handlebars */
      var source = $("#template-handlebars").html();
      var template = Handlebars.compile(source);

      var context = {
        'img': objArray[i].poster,
        'title': objArray[i].title,
        'author': objArray[i].author,
        'year': objArray[i].year
      };
      var html = template(context);

      $('.cds-container').append(html);
    }

  },
  error: function(richiesta, state, error){
    $('.cds-container').append("Errore!");

  },

});

function init() {
	console.log('Test');

}

$(document).ready(init);
