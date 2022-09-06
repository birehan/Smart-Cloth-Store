import './category.style.css';
import React from 'react';

import { useParams } from 'react-router-dom';

import CollectionItem from '../../component/collection-item/collection-item.component';
import { connect } from 'react-redux';


const CategoryPage = ({shop_data}) => {
   const params = useParams();
   const category = shop_data[params.categoryId.toLowerCase()]
   return (
      <div className='category'>
         {
            category ?
            (<div className="collection-page">
            <h1 className="collection-title">{category.title.toUpperCase()}</h1>
            <div  className="items">
                {category.items
                .map((item) =>(
                    <CollectionItem key={item.id} item={item}/>
                )) }
            </div>
        </div>):
            <div>Page does not exist: 404</div>

         }
      </div>   
     )
}
const mapStateToProps = (state) => ({
   shop_data: state.shop.SHOP_DATA
})

export default connect(mapStateToProps,null)(CategoryPage);
