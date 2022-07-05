import { Fragment } from "react"
import Filter from "./FIlter";
import SearchProperties from "./SearchProperties";

const DisplayProperties =()=>{
    return(
        <Fragment>
            <SearchProperties></SearchProperties>
            <Filter></Filter>
        </Fragment>
    )
}
export default DisplayProperties;