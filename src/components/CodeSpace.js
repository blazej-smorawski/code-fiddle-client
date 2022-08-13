import "../styles/codeSpace.css";
import CodeBlock from "./CodeBlock";
import PixelsBlock from "./PixelsBlock";

function CodeSpace(props) {
    return (
        <div className="codeSpace">
            <div className="blocksWrapper">
                <PixelsBlock></PixelsBlock>
            </div>   
            <div className="blocksWrapper">
                <CodeBlock></CodeBlock>
            </div>
            <div className="blocksWrapper">
                <PixelsBlock></PixelsBlock>
            </div>
        </div>
    )
}

export default CodeSpace