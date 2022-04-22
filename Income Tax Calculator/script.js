

var calculateTax = function() {
	var income = parseFloat(document.getElementById("income").value);
	document.getElementById("tax").value = calcTaxes(income);
	console.log(tax);
	function calcTaxes(amount){
	var calculate = 0;
	if(amount > 100000){
		tax = ((amount - 100000)*.50 + (100000-35001)*.40 + (35000-10001)*.20).toFixed(2);
		taxPrint = 'Tax Payable: Rs/-' + tax;
		salaryaftertax = (income - tax).toFixed(2);
		salaryaftertaxPrint = ' Salary After Tax: Rs/-' + salaryaftertax;
		percentagebracket1 = ((10000/amount)*100).toFixed(1);
		percentagebracket2 = ((24999/amount)*100).toFixed(1);
		percentagebracket3 = ((64999/amount)*100).toFixed(1);
		percentagebracket4 = (((amount-100000)/amount)*100).toFixed(1);
		percentagebracketPrint = ' \n\nSee your percentage breakdown of salary by tax band: ' + percentagebracket1 + '% between Rs/- 0 to Rs/- 1000k, ' + percentagebracket2 + '% between RS/- 10,00100 to Rs/- 3500k, ' + percentagebracket3 + '% between Rs/- 35,00101 to 10000k and ' + percentagebracket4 + '% across the Rs/- 10000k+ bracket\n';
		taxband1 = 0;
		taxband2 = ((35000-10001)*.20).toFixed(2);
		taxband3 = ((100000-35001)*.40).toFixed(2);
		taxband4 = ((amount - 100000)*.50).toFixed(2);
		taxbandPrint = ' \n\nand, here is your breakdown of tax paid at each band: Rs/-' + taxband1 + ' at 0%, Rs/-' + taxband2 + ' at 20%, Rs/-' + taxband3 + ' at 40% and Rs/-' + taxband4 + ' at 50%.\n';
	}
	else if( amount > 35001){
		tax = ((amount - 35001)*.40 + (35000-10001)*.20).toFixed(2);
		taxPrint = 'Tax Payable: Rs/-' + tax;
		salaryaftertax = (income - tax).toFixed(2);
		salaryaftertaxPrint = ' Salary After Tax: Rs/-' + salaryaftertax;
		percentagebracket1 = ((10000/amount)*100).toFixed(1);
		percentagebracket2 = ((24999/amount)*100).toFixed(1);
		percentagebracket3 = (((amount-35001)/amount)*100).toFixed(1);
		percentagebracketPrint = '\n\n See your percentage breakdown of salary by tax band: ' + percentagebracket1 + '% between 0 to 1000k, ' + percentagebracket2 + '% between 10,00001 to Rs/- 3500k and ' + percentagebracket3 + '% between Rs/- 35,00001 to Rs/- 100000k\n';
		taxband1 = 0;
		taxband2 = ((35000-10001)*.20).toFixed(2);
		taxband3 = ((amount-35001)*.40).toFixed(2);
		taxbandPrint = '\n\n and, here is your breakdown of tax paid at each band: Rs/-' + taxband1 + ' at 0%, Rs/-' + taxband2 + ' at 20% and Rs/-' + taxband3 + ' at 40%.\n';
	}
	else if(amount > 10001){
		tax = ((amount - 10001)*.20).toFixed(2);
		taxPrint = 'Tax Payable: Rs/-' + tax;
		salaryaftertax = (income - tax).toFixed(2);
		salaryaftertaxPrint = ' Salary After Tax: Rs/-' + salaryaftertax;
		percentagebracket1 = ((10000/amount)*100).toFixed(1);
		percentagebracket2 = (((amount-10001)/amount)*100).toFixed(1);
		percentagebracketPrint = ' \n\nSee your percentage breakdown of salary by tax band: ' + percentagebracket1 + '% between 0 to Rs/- 1000k and ' + percentagebracket2 + '% between Rs/- 10,00001 to Rs/- 3500k\n';
		taxband1 = 0;
		taxband2 = ((amount-10001)*.20).toFixed(2);
		taxbandPrint = '\n \nand, here is your breakdown of tax paid at each band: Rs/-' + taxband1 + ' at 0% and Rs/-' + taxband2 + ' at 20%.';
	}
	else if(amount > 0){
		 tax = amount*0;
		 taxPrint = 'Tax Payable: Rs/-' + tax;
		 salaryaftertax = (income - tax).toFixed(2);
		 salaryaftertaxPrint = ' Salary After Tax: Rs/-' + salaryaftertax;
		 percentagebracket1 = 100;
		 percentagebracketPrint = '\n\n See your percentage breakdown of salary by tax band: ' + percentagebracket1 + '% between 0 to Rs/- 1000k\n';
		 taxband1 = 0;
		 taxbandPrint = '\n \nand, here is your breakdown of tax paid at each band: Rs/-' + taxband1 + ' at 0%.\n';
	}
	else {
	  taxPrint = 'n/a';
	  salaryaftertaxPrint = ' n/a';
	  percentagebracketPrint = ' n/a';
	  taxbandPrint = ' n/a'
	}
	return [taxPrint, salaryaftertaxPrint, percentagebracketPrint, taxbandPrint];
  }}

  window.onload = function () {
	document.getElementById("calculate").onclick = calculateTax;
  

