import React from 'react';

import {MenuItem} from '../menu-item/menu-item.component';

import './directory.style.css';

import {connect} from 'react-redux'


const Directory = ({sections}) => {
  return (
    <div className='directory-menu'>
      {sections.map(({id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
}

const mapStateToProps = state => ({
  sections: state.directory.sections
})

export default connect(mapStateToProps, null)(Directory);