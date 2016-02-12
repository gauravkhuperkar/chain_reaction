var makeBord = function(){
	var tr='';
	for (var i = 0; i < 8; i++) {
		var td='';
		for (var j = 0; j < 8; j++) {
			td+='<td id="tile_'+i+'_'+j+'"></td>';
		};
		tr+='<tr id="row_'+i+'">'+td+'</tr>';
	};
	document.getElementById('bord').innerHTML = '<table>'+tr+'</table>';
}
