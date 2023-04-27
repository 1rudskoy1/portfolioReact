
import './tags.css'
function Tags (props:any) {
    return (    
        <div className="header-under-tags">
            <div className="header-under-tags-wrap">
                {props.tags.map((tag:string, index:number) => {
                    return(
                        <div className="header-under-tags__tag" key={index}>
                            {tag}
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default Tags;