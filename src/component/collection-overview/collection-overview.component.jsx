import './collection-overview.style.css'
import React from 'react'

import CollectionPreview from '../../component/preview-component/preview-collection.component'
import { connect } from "react-redux";

const CollectionOverview = ({ShopData}) => {
    return(
        <div className='collection-overview'>
            {Object.entries(ShopData).map(([key, value]) => (
            <CollectionPreview key={key} {...value} />
                ))
            }
        </div>
    );
}
const mapStateToProps = (state) => ({
    ShopData: state.shop.SHOP_DATA
    })
    
    export default connect(mapStateToProps, null)(CollectionOverview);
       