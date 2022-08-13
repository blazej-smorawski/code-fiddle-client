function TabsBar(props) {
    const navigationElements = props.elements.map((element) =>  <li>{element}</li>);

    return (
        <ul className="navigation">{navigationElements}</ul> 
    );
}

export default TabsBar;