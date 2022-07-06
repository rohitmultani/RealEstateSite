import { Fragment } from "react"
import PropertyCard from "./Card";
import CardGrid from "./CardGrid";
import Filter from "./FIlter";
import SearchProperties from "./SearchProperties";

const DisplayProperties =()=>{
    return(
        <Fragment>
            <SearchProperties></SearchProperties    >
            <Filter></Filter>
            <CardGrid/>
        </Fragment>
    )
}
export default DisplayProperties;