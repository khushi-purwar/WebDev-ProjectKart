const Rank = ({name, entries}) => {
    return (
        <div className="bgRank bgText" >
            <div >
                <p className="f3 Black">{` ${name}, your entry count is ...`}</p>
             </div>
             <div>
                <p className="f2 ma0 Black">{`#${entries}`}</p>
             </div>
             <div  >
             </div>
        </div>
    )
}
export default Rank;