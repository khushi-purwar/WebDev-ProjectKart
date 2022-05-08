const Navigation = ({outScreen ,signedIn}) => {
    if (signedIn) {
        return (
            <div>
                <nav style={{display:'flex', justifyContent: 'flex-end', padding: '5px'}}>
                    <p onClick={() => outScreen('signin')} className="dim white  ma2 pointer f6 link dim ph3 pv2 mb2 dib white bg-mid-gray">Sign Out</p>
                </nav>
            </div>
        );
    } else {
        return (
            <div>
                <nav style={{display:'flex', justifyContent: 'flex-end', padding: '5px'}}>
                    <p onClick={() => outScreen('signin')} className="dim white  ma2 pointer f6 link dim ph3 pv2 mb2 dib white bg-mid-gray">Sign IN</p>
                    <p onClick={() => outScreen('register')} className=" dim white  ma2 pointer f6 link dim ph3 pv2 mb2 dib white bg-mid-gray">Register</p>
                </nav>
            </div>
        )
    }
}

export default Navigation;