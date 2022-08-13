import "../styles/codeSpace.css";
import CodeBlock from "./CodeBlock";
import PixelsBlock from "./PixelsBlock";
import * as utils from "../utils/arrays"

function CodeSpace(props) {
    const pixels = utils.createArray(8,8);
    for(var x = 0; x<pixels.length; x++) {
        for(var y = 0; y<pixels[x].length; y++) {
            pixels[x][y] = 0;
        }
    }

    return (
        <div className="codeSpace">
            <div className="blocksWrapper">
                <PixelsBlock pixels={pixels}/>
            </div>   
            <div className="blocksWrapper">
                <CodeBlock></CodeBlock>
                <CodeBlock></CodeBlock>
            </div>
            <div className="blocksWrapper">
                <PixelsBlock pixels={pixels}/>
            </div>
        </div>
    )
}

export default CodeSpace