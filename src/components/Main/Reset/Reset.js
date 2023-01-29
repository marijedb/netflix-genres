import "./Reset.css"

function Reset(props){
    return(
        <div className="reset">
            {props.language === "dutch" ? 
                <p className="reset--info">Werkt de pagina niet goed?</p> :
                <p className="reset--info">Page not working correctly?</p>
            }
            <button 
                onClick={props.resetPage}
                className="reset--btn">
                    {props.language === "dutch" ? 
                        <p className="reset--btn--text">
                            <img src={props.alarmIcon} alt="alarm icon" className="reset--img" />
                            Reset Pagina 
                            <img src={props.alarmIcon} alt="alarm icon" className="reset--img" />
                        </p> :
                        "Reset Page"
                    }
            </button>
        </div>
    )
}

export default Reset;