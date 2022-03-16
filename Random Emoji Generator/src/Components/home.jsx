import React, { useState } from 'react';
import PropTypes from 'prop-types';



function Home() {
    const emojis=["😁","😀","😃", "😄", "😁","😆","😅","😂","😍","😘","😙","🤣","😊"," 🥰", "😛", "😎","😋","😜","😏","😡","😩","😢" ,"✌","😂","😝","😁","😱","👉","🙌","🍻","🔥","🌈","☀","🎈","🌹","💄","🎀","⚽","🎾","🏁","😡","👿","🐻","🐶","🐬","🐟","🍀","👀","🚗","🍎","💝","💙","👌","❤","😍","😉","😓","😳","💪","💩","🍸","🔑","💖","🌟","🎉","🌺","🎶","👠","🏈","⚾","🏆","👽","💀","🐵","🐮","🐩","🐎","💣","👃","👂","🍓","💘","💜","👊","💋","😘","😜","😵","🙏","👋","🚽","💃","💎","🚀","🌙","🎁","⛄","🌊","⛵","🏀","🎱","💰","👶","👸","🐰","🐷","🐍","🐫","🔫","👄","🚲","🍉","💛","💚"]

    const [count,setCount]=useState([{id:0,emoji:"😘",x:0,y:"40px"}]);

    const SetCount = (counts) => {
        var X = Math.floor(Math.random() * (window.innerWidth-110-0)+0);
        var Y = Math.floor(Math.random() * (window.innerHeight - 110 - 0) + 0);
        setCount([{ id: count.length, emoji: emojis[Math.floor(Math.random() * 113) % 114], x: X, y: Y }])
    }
    const number=count.map((counts)=>{
        return (<div className="emoji" id="emoji"  key={counts.id}>{counts.emoji}</div>)
    })

    return (
        <div><h2> Please hover on the box </h2>
        <div className="outer-box">
           
        <div className="box" onMouseEnter={() => SetCount(count + count)}>
            <div className="box-body">
                <div className="img" >{number}</div>
                    <div className="box-lid">

                        <div className="box-bowtie"></div>

                    </div>
        </div>
            </div>
        </div>
        </div>
    );
}

export default Home;
  