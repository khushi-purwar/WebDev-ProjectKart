console.log("this is ecom js");
onstart();
ondisplay();
let cards = document.querySelectorAll('.buynow');
let products = [
    {
    name:'Mi 10t Pro 5G',
    tag:'Mi10tPro5G',
    type:'Smart Phone',
    price:39000,
    incart:0
    },
{
    name:'Oppo Reno Pro 5G',
    tag:'OppoRenoPro5G',
    type:'Smart Phone',
    price:45000,
    incart:0
},
{
    name:'Oppo F17 Pro ',
    tag:'OppoF17Pro ',
    type:'Smart Phone',
    price:25000,
    incart:0
},
{
    name:'One Plus Nord',
    tag:'OnePlusNord',
    type:'Smart Phone',
    price:26000,
    incart:0
},
{
    name:'One Plus 9 Pro',
    tag:'OnePlus9Pro',
    type:'flagship Phone',
    price:65000,
    incart:0
},
{
    name:'I Phone 12',
    tag:'IPhone12',
    type:'Premium',
    price:70000,
    incart:0
},
{
    name:'I Phone 12 Pro Max',
    tag:'IPhone12ProMax',
    type:'Premium',
    price:130000,
    incart:0
},
{
    name:'Samsung S21 ULTRA 5G',
    tag:'SamsungS21ULTRA5G',
    type:'Premium',
    price:105000,
    incart:0
},
{
    name:'LG Wing',
    tag:'LGWing',
    type:'Flagship Phone',
    price:75000,
    incart:0
},
{
    name:'Mi 10',
    tag:'Mi10',
    type:'Smart Phone',
    price:50000,
    incart:0
},
{
    name:'Mi 11 Pro',
    tag:'Mi11Pro',
    type:'Flagship Phone',
    price:75000,
    incart:0
},
{
    name:'One Plus 9 Pro',
    tag:'OnePlus9Pro',
    type:'Smart Phone',
    price:22000,
    incart:0
},
{
    name:'Mi TV Q1 75',
    tag:'MiTvQ175',
    type:'Smart Tv',
    price:40000,
    incart:0
},
{
    name:'Mi TV 4A',
    tag:'MiTv4A',
    type:'Smart Tv',
    price:25000,
    incart:0
},
{
    name:'Mi TV 4S Pro 43',
    tag:'MiTv4SPro43',
    type:'Flagship Tv',
    price:50000,
    incart:0
},
{
    name:'Mi TV Horizon',
    tag:'MiTvHorizon',
    type:'Smart Tv',
    price:33000,
    incart:0
},
{
    name:'Samsung TU800 4K 43',
    tag:'SamsungTU800',
    type:'Smart Tv',
    price:47000,
    incart:0
},
{
    name:'Samsung TU8500 4K 55',
    tag:'SamsungTU8500',
    type:'Flagship Tv',
    price:60000,
    incart:0
},
{
    name:'Samsung K5570 Full HD 32',
    tag:'SamsungK5570',
    type:'Smart Tv',
    price:30000,
    incart:0
},
{
    name:'Samsung Q95T QLED 4k HDR 55',
    tag:'SamsungQ95T',
    type:'Flagship Tv',
    price:115000,
    incart:0
},
{
    name:'One Plus 43',
    tag:'OnePlus43',
    type:'Smart Tv',
    price:38000,
    incart:0
},
{
    name:'One Plus 55U1 4K',
    tag:'OnePlus55U1',
    type:'Flagship Tv',
    price:52000,
    incart:0
},
{
    name:'One Plus TV Q1',
    tag:'OnePlusTVQ1',
    type:'Flagship Tv',
    price:70000,
    incart:0
},
{
    name:'Amaze Fit Bip U',
    tag:'AmazeFitBipU',
    type:'Fitness',
    price:5000,
    incart:0
},
{
    name:'Amazefir GTR2',
    tag:'AmazefitGTR2',
    type:'Fitness',
    price:7000,
    incart:0
},
{
    name:'Amazefit GTX',
    tag:'AmazefitGTX',
    type:'Fitness',
    price:8000,
    incart:0
},
{
    name:'Amazefit Bip S',
    tag:'AmazefitBipS',
    type:'Fitness',
    price:10000,
    incart:0
},
{
    name:'One Plus Band',
    tag:'OnePlusBand',
    type:'Fitness',
    price:15000,
    incart:0
},
{
    name:'Apple Watch SE',
    tag:'AppleWatchSE',
    type:'Fitness',
    price:30000,
    incart:0
},
{
    name:'Mi Band Pro',
    tag:'MiBandPro',
    type:'Fitness',
    price:2500,
    incart:0
},
{
    name:'MiPower Bank 3i',
    tag:'MiPowerBank3i',
    type:'Accessories',
    price:1500,
    incart:0
},
{
    name:'Charger C with Cable',
    tag:'Charger',
    type:'Accessories',
    price:1000,
    incart:0
},
{
    name:'Dell XPS 13 11th Gen',
    tag:'DellXPS13',
    type:'Laptops',
    price:65500,
    incart:0

},
{
    name:'Asus Vivobook 11th Gen',
    tag:'AsusVivobook11thgen',
    type:'Laptops',
    price:70500,
    incart:0

},
{
    name:'HP Pavallion 360',
    tag:'HPPavallion360',
    type:'Laptops',
    price:60500,
    incart:0

},
{
    name:'Lenovo Yoga Slim 7i Pro',
    tag:'LenovoYogaSlim7iPro',
    type:'Laptops',
    price:85000,
    incart:0
},
{
    name:'MacBook Pro 13',
    tag:'MacBookPro13',
    type:' Premium Laptops',
    price:85000,
    incart:0
},
{
    name:'Mi Notebook Horizon',
    tag:'MiNotebookHorizon',
    type:'Laptops',
    price:50000,
    incart:0
},
{
    name:'Asus TUF F17',
    tag:'Asustuf17',
    type:'Gaming Laptops',
    price:85000,
    incart:0
},
{
    name:'Dell G3 15',
    tag:'DellG315',
    type:'Gaming Laptops',
    price:90500,
    incart:0
},
{
    name:'Acer Predator Triton',
    tag:'AcerPredator',
    type:'Gaming Laptops',
    price:115000,
    incart:0
},
{
    name:'Mi Earphones(New Edition)',
    tag:'MiEarphones',
    type:'Audio',
    price:500,
    incart:0
},
{
    name:'Boat Rockerz 255',
    tag:'BoatRockerz',
    type:'Audio',
    price:1500,
    incart:0
},
{
    name:'Boat Rockerz 550 (over ear)',
    tag:'Boat550',
    type:'Audio',
    price:2500,
    incart:0
},
{
    name:'Boat Airdopes 131',
    tag:'BoarAirdopes',
    type:'Audio',
    price:4000,
    incart:0
},
{
    name:'Apple Airpods Pro',
    tag:'AppleAirpods',
    type:'Premium',
    price:25000,
    incart:0
}
];
// console.log(cards);

for (let i = 0; i < cards.length; i++){
    console.log("my loop");
    cards[i].addEventListener('click',()=>{
        // console.log("clicked added");
        swal("Congrats!!", "Product Added To Cart", "success");
        updatenumber(products[i]);
        total(products[i]);
    })
};
function onstart(){
    let numberstring = localStorage.getItem('numberstore');
    numberstring = parseInt(numberstring);
    if(numberstring){
    document.querySelector('.cart span').innerHTML=numberstring;
    }
}
function updatenumber(product){
    // console.log( product);
    let numberstring = localStorage.getItem('numberstore');
    // console.log(numberstring);
     numberstring = parseInt(numberstring);

    if(numberstring){
        localStorage.setItem('numberstore', numberstring+1);
        document.querySelector('.cart span').innerHTML=numberstring+1;
    }
    else{
        localStorage.setItem('numberstore', 1);
        document.querySelector('.cart span').innerHTML=1;
    }
   setitems(product);
}
function setitems(product){
    // console.log(product);
    let cartitems = localStorage.getItem('productsincart');

    cartitems = JSON.parse(cartitems);

    if(cartitems!= null){
        
        if( cartitems[product.tag]==undefined ){
            cartitems = {
                     ...cartitems  ,
                    [product.tag]:product
            }
        }
        cartitems[product.tag].incart += 1;

    }
    else{
        product.incart=1;
         cartitems ={
            [product.tag]:product
        }
     
    }
    localStorage.setItem('productsincart', JSON.stringify(cartitems));
}
    function total(product){
        let totalamt = localStorage.getItem('totalamount');

        if(totalamt){
            totalamt = parseInt(totalamt);
            localStorage.setItem('totalamount', totalamt + product.price);

        }else{
            localStorage.setItem('totalamount',product.price);
        }
    }
    function ondisplay(){
        let cartitems = localStorage.getItem('productsincart');
        let totalamt = localStorage.getItem('totalamount');
        cartitems = JSON.parse(cartitems);
       let contentdisplay = document.querySelector('.rowsss');
       let contenttotal = document.querySelector('.conts');
       console.log(contenttotal);

     
    //  console.log(contentdisplay);
        if(cartitems && contentdisplay){
            html='';
            Object.values(cartitems).map(item=>{
                html+= 
                `    <tr >
                <td class="px-4 py-3">${item.name}</td>
                <td class="px-4 py-3">${item.incart}</td>
                <td class="px-4 py-3">${item.price}</td>
                <td class="px-4 py-3">${item.type}</td>
                <td class="px-4 py-3 text-lg text-gray-900">${item.price*item.incart}</td>
            </tr>
            
                `
                contentdisplay.innerHTML=html;
            });
            contenttotal.innerHTML+=`
            <span style="color:orangered; margin-left: 12px; font-size:40px" clas="spanandar" >₹ ${totalamt}</span>`
        }
        // else{
        //     contentdisplay.innerHTML=
        //     '  ....cartitems   Nothing To Show In Cart'
            
        // }
    }
    function cleared(){
        // localStorage.setItem('numberstore',localStorage.clear());
        localStorage.removeItem('numberstore');
        localStorage.removeItem('productsincart');
        localStorage.removeItem('totalamount');
      
    }
  