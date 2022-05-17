fetch('pics.json')
    .then((res) => {
        return res.json();
    })
    .then((data) => {

        // cover page
        let cVal = data.cVal[0].pic
        // page 1 front side
        let p1FrontValueHeader = data.p1FrontVal[0].header
        let p1FrontValueBodyy = data.p1FrontVal[1].bodyy
        let p1FrontValueFooter = data.p1FrontVal[2].footer


        // ******************************************************************************************************************************

            for (let i = 0; i < p1FrontValueBodyy.length; i++) {
            var element = p1FrontValueBodyy[i];

            let ul = document.getElementById('ul1');
            let li = document.createElement('li');
            
            let content = document.createTextNode(element);

            // c selectors
            document.getElementById('cover').getElementsByTagName('img')[0].src = cVal

            // p1 front selectors
            document.getElementById("p1fH").innerHTML = p1FrontValueHeader

            li.appendChild(content);
            ul.appendChild(li);

            document.getElementById("p1fF").innerHTML = p1FrontValueFooter

        }

// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

            // page 1 back side
            let p1BackValueHeader = data.p1BackVal[0].pic

            // p2 back side
            let p2BackValueHeader = data.p2BackVal[0].pic


            // p2 front side
            let p2FrontValueHeader = data.p2FrontVal[0].header
            let p2FrontValueBodyy = data.p2FrontVal[1].bodyy
            let p2FrontValueFooter = data.p2FrontVal[2].footer

            // p3 back side
            let p3BackValueHeader = data.p3BackVal[0].pic


            // p3 front side
            let p3FrontValueHeader = data.p3FrontVal[0].header
            let p3FrontValueBodyy = data.p3FrontVal[1].bodyy
            let p3FrontValueFooter = data.p3FrontVal[2].footer

            // p4 back side
            let p4BackValueHeader = data.p4BackVal[0].pic

            // p4 front side
            let p4FrontValueHeader = data.p4FrontVal[0].header
            let p4FrontValueBodyy = data.p4FrontVal[1].bodyy
            let p4FrontValueFooter = data.p4FrontVal[2].footer


            // ********************************************************************************************************************************************


            // p1 back selectors
            document.getElementById('p1back').getElementsByTagName('img')[0].src = p1BackValueHeader


            // p2 back selectors
            document.getElementById("p2back").getElementsByTagName('img')[0].src = p2BackValueHeader

            // p2 front selectors
            document.getElementById("p2fH").innerHTML = p2FrontValueHeader

            // document.getElementById("p2fB").innerHTML = p2FrontValueBodyy
            for (let i = 0; i < p2FrontValueBodyy.length; i++) {
                var element = p2FrontValueBodyy[i];
    
                let ul = document.getElementById('ul2');
                let li = document.createElement('li');
                
                let content = document.createTextNode(element);
    
                            
                li.appendChild(content);
                ul.appendChild(li);
            }


            document.getElementById("p2fF").innerHTML = p2FrontValueFooter

            // p3 back selectors

            document.getElementById("p3back").getElementsByTagName('img')[0].src = p3BackValueHeader

            // p3 front selectors
            document.getElementById("p3fH").innerHTML = p3FrontValueHeader

            // document.getElementById("p3fB").innerHTML = p3FrontValueBodyy
            for (let i = 0; i < p3FrontValueBodyy.length; i++) {
                var element = p3FrontValueBodyy[i];
    
                let ul = document.getElementById('ul3');
                let li = document.createElement('li');
                
                let content = document.createTextNode(element);
    
                            
                li.appendChild(content);
                ul.appendChild(li);
            }



            document.getElementById("p3fF").innerHTML = p3FrontValueFooter

            // p4 back selectors
            document.getElementById("p4back").getElementsByTagName('img')[0].src = p4BackValueHeader


            // p4 front selectors
            document.getElementById("p4fH").innerHTML = p4FrontValueHeader

            // document.getElementById("p4fB").innerHTML = p4FrontValueBodyy
            for (let i = 0; i < p4FrontValueBodyy.length; i++) {
                var element = p4FrontValueBodyy[i];
    
                let ul = document.getElementById('ul4');
                let li = document.createElement('li');
                
                let content = document.createTextNode(element);
    
                            
                li.appendChild(content);
                ul.appendChild(li);
            }



            document.getElementById("p4fF").innerHTML = p4FrontValueFooter

        })
// }




