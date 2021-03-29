//1 CSS
$(document).ready( function(){
  disabler();
});

$('.spb a').css({
	"color":"red",
	"textDecoration":"none"
});
$('p.khv').css({
	"color":"#A34521", 
	"margin":"10px"
});
$('.khv a').css("fontWeight", "bold");
$('p.spb').css("color", "blue");

function disabler(){
	$('.form input:enabled, select:enabled').attr("disabled","");
}

//2 DOM
$('a').prepend("<span class='arrow'>↗</span>️");
$('a').each(function(){										// Сохраняем исходные значения аттрибута target
	$(this).attr("target_backup", $(this).attr("target"))
});

$('a').attr("target", "_blank");

$("a[href^='http://']").each( function(){
	this.href = this.href.replace('http://', 'https://');	// Замена http на https для всех ссылок, 
});															// у которых в начале href есть http

var $input = $('<input type="button" onclick="redo()" value="Отмена" style="float:right" />');
    $input.prependTo($("body"));	// Добавляем HTML элемент в начало body

function redo(){
	$("span.arrow").remove();
	$('a').each(function(){
		$(this).attr("target", $(this).attr("target_backup")) // Возвращаем исходные значения аттрибута target
	});
}

//3 Effects
$("#but1").click(function(){
    $("#panel").slideDown("slow");
});

$("#but2").click(function(){
	$("#img1").fadeIn("slow");
});

$("#but3").click(function(){
    $("td a").toggle();
});

$("#but4").click(function(){
    $("#animated").animate({left: '400px'})
});

$("#but5").click(function(){
    $("td input[type='text']").fadeTo(1000, 0.3);
});

//4 AJAX
$("#but6").click(function(){
    $("#some").load("https://inxaoc.github.io/example/ajax-1.html");
});

function toList(obj){
    var stringList = "";
    const result = [];
    for (const prop in obj) {
        const value = obj[prop];
        if (typeof value === 'object') {
            stringList = stringList + '<ul>' + prop + toList(value) + '</ul>';
        }
        else {
            stringList = stringList + '<li>' + prop + ': ' + value + '</li>';
        }
    }
    return stringList
}

$("#but7").click(function(){
	$.getJSON('https://inxaoc.github.io/example/ajax.json', function(object) {
		$("#some2").empty()
		$('#some2').append(toList(object));
	});
});

