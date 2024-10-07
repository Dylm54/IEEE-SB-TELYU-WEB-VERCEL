const List = ({style, items}) => {
    return (
        <ol className={`pl-[40px] ${ style === "ordered" ? "list-decimal" : "list-disc"}`}>
            {items.map((listItem, i) => {
                return <li key={i} dangerouslySetInnerHTML={{__html: listItem}} className="cdx-list__item"></li>
            })}
        </ol>
    )
}

export const NewsContent = ({block}) => {

    let {type, data} = block
    
    if (type === "paragraph") {
        return <p dangerouslySetInnerHTML={{__html: data.text}} className="ce-paragraph"></p>
    }

    if (type === "header") {
        if (data.level === 3) {
            return <h3 className="ce-header" dangerouslySetInnerHTML={{__html: data.text}}></h3>
        }
        return <h2 className="ce-header" dangerouslySetInnerHTML={{__html: data.text}}></h2>
    }
    
    if (type === "list") {
        return <List style={data.style} items={data.items} ></List>
    }
}