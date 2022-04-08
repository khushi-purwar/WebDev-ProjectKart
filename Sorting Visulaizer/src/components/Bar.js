import { useEffect, useState} from 'react'
import './Bar.css'

function Bar({index,length,color, changeArray}) { //here we have destructed the props to use it

    const [len, setLen] = useState(length);

    useEffect(() => {
        setLen(length);
    }, [length]);
    const colors = [
		['rgba(61, 90, 241, 0.5)', 'rgba(61, 90, 241, 0.2)'],
		['rgba(255, 48, 79, 1)', 'rgba(255, 48, 79, 0.5)'],
		['rgba(131, 232, 90, 0.5)', 'rgba(131, 232, 90, 0.2)'],
	];

    // const barStyle ={
    //     height:length   //this will give different height to every bar according to the value
    // }

    const inputStyle = {
        position:`relative`,
        top: Math.floor(length/2)-10,
        width: length,
        left:-Math.floor(length/2)+10,
        border:`none`,
        background: `none`
    }
    const front_bottom = {
        transform: `translateY(${200 - length}px) rotateX(-90deg)`,
        backgroundColor: `${colors[color][0]}`,
        boxShadow:`5px 5px 50px 5px ${colors[color][1]}`,
        transition:`0.3s`
    }

    const front_back_right_left ={
        height: `${length}px`,
        transform:`translateY(${200 - length}px)`,
        backgroundColor: `${colors[color][0]}`,
        boxShadow:`5px 5px 50px 5px ${colors[color][1]}`,
        transition:`0.3s`
    }

    const quantity = {
        position : `relative`,
        top:`225px`
    }

    
    const handleChange = (e) => {
        let val = e.target.value;
        if(val ===''){
            setLen(0);
            changeArray(index,0); //here each method is used that we created in APP.js to chsange the height of bar acc. to value
        }else{
            val = parseInt(val);
            if(val>200){
                setLen(200);
                changeArray(index,200);
            }else{
                setLen(val);
                changeArray(index,val);
            }
        }

    };

    const increment = (e) => {
        setLen(len+1);
        changeArray(index,len+1)
    }

    const decrement = (e) => {
        setLen(len-1);
        changeArray(index,len-1)
    }

    return (
        <div>
            <div className="bar" >
                <div className="side top"></div>
                <div className="side bottom" style={front_bottom}></div>
                <div className="side right" >
                    <div className="color-bar right-color-bar" style = {front_back_right_left}></div>
                </div>
                <div className="side left" >
                    <div className="color-bar left-color-bar" style = {front_back_right_left}></div>
                </div>
                <div className="side front">
                    <div className="color-bar front-color-bar" style={front_back_right_left}>
                    <input 
                        type ="number" 
                        length={length} 
                        style={inputStyle} 
                        value={len} 
                        className="input"
                        onChange = {handleChange}
                    />
                    </div>
                   
                </div>
                <div className="side back">
                    <div className="color-bar back-color-bar" style={front_bottom}></div>
                </div>
                <div className="quantity-nav">
                    <div className="quantity-button quantity-up" style={quantity} onClick={increment}>
                        +
                    </div>
                    <div className="quantity-button quantity-down" style={quantity} onClick={decrement}>
                        -
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bar
