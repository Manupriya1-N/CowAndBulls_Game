// gamelogic for game Bulls and Cows
// copyright Shevchenko Alexey
// reexelmail@gmail.com
// version 1.0   11-11-2013
			
var URL = "http://reexel.com/files/bc/index.html?ffdgdfdd" + Math.random(); // не могу победить кэш :(

// определяем: старт игры?
var tourGame = 0;

// при старте игры создаем число
if (tourGame == 0) { 
	//создаем переменные для задумывания числа компьютером
	var A; //1-ая цифра в числе
	var B; //2-ая цифра в числе
	var C; //3-ья цифра в числе
	var D; //4-ая цифра в числе
	
	var A = Math.floor(Math.random( ) * (8+1)) + 1;
	
	while(1) {
		var B = Math.floor(Math.random( ) * (8+1)) + 1;
		if (B != A) {
			break;
		}
	}
	
	while(1) {
		var C = Math.floor(Math.random( ) * (8+1)) + 1;
		if ((C != A) && (C != B)) {
			break;
		}
	}
	
	while(1) {
		var D = Math.floor(Math.random( ) * (8+1)) + 1;
		if ((D != A) && (D != B) && (D != C)) {
			break;
		}
	}
	
	// !DEBUG подсмотреть число, которое задумал комп
	//alert (A);
	//alert (B);
	//alert (C);
	//alert (D);
}

// проверяем число
function checkedNumbers() {
	
	// проверяем, ввели ли правильно цифры в соответствии с правилами, 
	// они не должны быть равны между собой
	/* ERROR!!! проверка не работает, все время проверяются однажды введенные цифры
	if ((number_A == number_B) || (number_A == number_C) || (number_A == number_D) ||
	   (number_B == number_A) || (number_B == number_C) || (number_B == number_D) ||
	   (number_C == number_A) || (number_A == number_B) || (number_A == number_D) ||
	   (number_D == number_A) || (number_D == number_B) || (number_D == number_C)) {
		alert ('Числа не должны быть одинаковыми!');
	} else {
	*/
		switch (tourGame) {
			case 0:
				// превратим введенные игроком значения в число
				var number_A = new Number(document.getElementById("number_a").value);
				var number_B = new Number(document.getElementById("number_b").value);
				var number_C = new Number(document.getElementById("number_c").value);
				var number_D = new Number(document.getElementById("number_d").value);
				break;
			case 1:
				// превратим введенные игроком значения в число
				var number_A = new Number(document.getElementById("number_a1").value);
				var number_B = new Number(document.getElementById("number_b1").value);
				var number_C = new Number(document.getElementById("number_c1").value);
				var number_D = new Number(document.getElementById("number_d1").value);
				break;
			case 2:
				// превратим введенные игроком значения в число
				var number_A = new Number(document.getElementById("number_a2").value);
				var number_B = new Number(document.getElementById("number_b2").value);
				var number_C = new Number(document.getElementById("number_c2").value);
				var number_D = new Number(document.getElementById("number_d2").value);
				break;
			case 3:
				// превратим введенные игроком значения в число
				var number_A = new Number(document.getElementById("number_a3").value);
				var number_B = new Number(document.getElementById("number_b3").value);
				var number_C = new Number(document.getElementById("number_c3").value);
				var number_D = new Number(document.getElementById("number_d3").value);
				break;
			case 4:
				// превратим введенные игроком значения в число
				var number_A = new Number(document.getElementById("number_a4").value);
				var number_B = new Number(document.getElementById("number_b4").value);
				var number_C = new Number(document.getElementById("number_c4").value);
				var number_D = new Number(document.getElementById("number_d4").value);
				break;
			case 5:
				// превратим введенные игроком значения в число
				var number_A = new Number(document.getElementById("number_a5").value);
				var number_B = new Number(document.getElementById("number_b5").value);
				var number_C = new Number(document.getElementById("number_c5").value);
				var number_D = new Number(document.getElementById("number_d5").value);
				break;
			case 6:
				// превратим введенные игроком значения в число
				var number_A = new Number(document.getElementById("number_a6").value);
				var number_B = new Number(document.getElementById("number_b6").value);
				var number_C = new Number(document.getElementById("number_c6").value);
				var number_D = new Number(document.getElementById("number_d6").value);
				break;
		}
		
		
		
		
		
		
		// в каждом туре подсчет идет заново
		var Bulls = 0; 
		var Cows = 0;
		
		/*
		if ((number_A == number_B) || (number_A == number_C) || (number_A == number_D) ||
		   (number_B == number_A) || (number_B == number_C) || (number_B == number_D) ||
		   (number_C == number_A) || (number_A == number_B) || (number_A == number_D) ||
		   (number_D == number_A) || (number_D == number_B) || (number_D == number_C)) {
			alert ('The numbers don't have to be the same!');
			}
		*/
		
		
		// считаем количество цифр, совпадающих с загаданными цифрами в числе (Bulls)
		if ((number_A == A) || (number_B == A) || (number_C == A) || (number_D == A)) {
			Bulls++;
		}
		if ((number_A == B) || (number_B == B) || (number_C == B) || (number_D == B)) {
			Bulls++;
		} 
		if ((number_A == C) || (number_B == C) || (number_C == C) || (number_D == C)) {
			Bulls++;
		}
		if ((number_A == D) || (number_B == D) || (number_C == D) || (number_D == D)) {
			Bulls++;
		}
		
		// считаем количество цифр, стоящих на своих местах (Cows)
		if (number_A == A) {
			Cows++;
		}
		if (number_B == B) {
			Cows++;
		}
		if (number_C == C) {
			Cows++;
		}
		if (number_D == D) {
			Cows++;
		}
		
		if ((Bulls == 4) && (Cows == 4)) { // Условия победы - конец игры
		var replay = confirm ('Victory!!!! Another party?');
			if (replay) {
				location.reload();
			} else {
				window.close();
			}
		} else {
		
			switch (tourGame) {
				case 0:
					
					showBulls();
					showCows();
					document.getElementById('textid1').style.display = 'block';
					document.getElementById("number_a").disabled = true;
					document.getElementById("number_b").disabled = true;
					document.getElementById("number_c").disabled = true;
					document.getElementById("number_d").disabled = true;
					break;
				case 1:
					showBulls1();
					showCows1();
					document.getElementById('textid2').style.display = 'block';
					document.getElementById("number_a1").disabled = true;
					document.getElementById("number_b1").disabled = true;
					document.getElementById("number_c1").disabled = true;
					document.getElementById("number_d1").disabled = true;
					break;
				case 2:
					showBulls2();
					showCows2();
					document.getElementById('textid3').style.display = 'block';
					document.getElementById("number_a2").disabled = true;
					document.getElementById("number_b2").disabled = true;
					document.getElementById("number_c2").disabled = true;
					document.getElementById("number_d2").disabled = true;
					break;
				case 3:
					showBulls3();
				showCows3();
					document.getElementById('textid4').style.display = 'block';
					document.getElementById("number_a3").disabled = true;
					document.getElementById("number_b3").disabled = true;
					document.getElementById("number_c3").disabled = true;
					document.getElementById("number_d3").disabled = true;
					break;
				case 4:
					showBulls4();
					showCows4();
					document.getElementById('textid5').style.display = 'block';
					document.getElementById("number_a4").disabled = true;
					document.getElementById("number_b4").disabled = true;
					document.getElementById("number_c4").disabled = true;
					document.getElementById("number_d4").disabled = true;
					break;
				case 5:
					showBulls5();
					showCows5();
					document.getElementById('textid6').style.display = 'block';
					document.getElementById("number_a5").disabled = true;
					document.getElementById("number_b5").disabled = true;
					document.getElementById("number_c5").disabled = true;
					document.getElementById("number_d5").disabled = true;
					break;
				case 6:
					showBulls6();
					showCows6();
					document.getElementById("number_a6").disabled = true;
					document.getElementById("number_b6").disabled = true;
					document.getElementById("number_c6").disabled = true;
					document.getElementById("number_d6").disabled = true;
					break;
			}
		
		
			tourGame = tourGame + 1;
			if (tourGame > 6) {
				var replay = confirm ('You lost... Correct answer: ' + A + B + C + D + '  Another party?');
				if (replay) {
					location.reload();
				} else {
					window.close();
				}
			}
		}
		
		//alert('Bulls ' + Bulls); // !DEBUG отобразить количество Быков
		//alert('cows ' + Cows);  // !DEBUG отобразить количество Коров
		
			
		function showBulls() {	//отобразить результат Быков в туре
			document.getElementById("b_c_result_b").innerHTML = Bulls;
		}
		
		function showCows() { //отобразить результат Коров в туре
			document.getElementById("b_c_result_c").innerHTML = Cows;
		}
		
		function showBulls1() {	//отобразить результат Быков в туре
			document.getElementById("b_c_result_b1").innerHTML = Bulls;
		}
		
		function showCows1() { //отобразить результат Коров в туре
			document.getElementById("b_c_result_c1").innerHTML = Cows;
		}
		
		function showBulls2() {	//отобразить результат Быков в туре
			document.getElementById("b_c_result_b2").innerHTML = Bulls;
		}
		
		function showCows2() { //отобразить результат Коров в туре
			document.getElementById("b_c_result_c2").innerHTML = Cows;
		}
		
		function showBulls3() {	//отобразить результат Быков в туре
			document.getElementById("b_c_result_b3").innerHTML = Bulls;
		}
		
		function showCows3() { //отобразить результат Коров в туре
			document.getElementById("b_c_result_c3").innerHTML = Cows;
		}
		
		function showBulls4() {	//отобразить результат Быков в туре
			document.getElementById("b_c_result_b4").innerHTML = Bulls;
		}
		
		function showCows4() { //отобразить результат Коров в туре
			document.getElementById("b_c_result_c4").innerHTML = Cows;
		}
		
		function showBulls5() {	//отобразить результат Быков в туре
			document.getElementById("b_c_result_b5").innerHTML = Bulls;
		}
		
		function showCows5() { //отобразить результат Коров в туре
			document.getElementById("b_c_result_c5").innerHTML = Cows;
		}
		
		function showBulls6() {	//отобразить результат Быков в туре
			document.getElementById("b_c_result_b6").innerHTML = Bulls;
		}
		
		function showCows6() { //отобразить результат Коров в туре
			document.getElementById("b_c_result_c6").innerHTML = Cows;
		}
	
	//}
}	

// разрешаем вводить только числа 1-9
function proverka(input) {
	input.value = input.value.replace(/[^1-9]/g,'');
	
};

// всплывающие окна
function openbox(id,tt) {
	var div = document.getElementById(id);
	var tt_div = document.getElementById(tt);
	if(div.style.display == 'block') {
		div.style.display = 'none';
	}
	else {
		div.style.display = 'block';
	}
}

		