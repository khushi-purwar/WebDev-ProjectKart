function updateMap(){
    fetch("/data.json")
      .then(response=>Response.json())
      .then(rsp=>{
        console.log(rsp.data)
        rsp.data.forEach(element => {
            latitude=element.latitude;
            longitude=element.longitude;
            infected=element.infected;
            if(infected>255){
                color="rgb(255,0,0)";
            }
            else{
                color="rgb(`${infected},0,0)";
            }
            new mapboxgl.Marker({
                draggable:false,
                color:color
            })
            .setLngLat([longitude,latitude])
            .addTo(map);
        });
    })
}
updateMap();
