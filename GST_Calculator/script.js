document.getElementById("button").addEventListener("click", handleclick);

function handleclick() {
  var gross_price = parseFloat(document.getElementById("gross").value);
  var gst_rate = parseFloat(document.getElementById("gstrate").value);



  var x1 = (100 * gross_price) / (100 + gst_rate);
  var x2 = (x1 * gst_rate) / 200;
  if (gst_rate === 5 || gst_rate === 12 || gst_rate === 18 || gst_rate === 28) {
    document.getElementById("netprice").innerHTML = x1.toPrecision(4);

    document.getElementById("sgst").innerHTML = x2.toPrecision(4);

    document.getElementById("cgst").innerHTML = x2.toPrecision(4);

  } else {
    alert("Invalid GST Rate");
    document.getElementById("netprice").innerHTML = " ";

    document.getElementById("sgst").innerHTML = " ";

    document.getElementById("cgst").innerHTML = " ";
  }




}
