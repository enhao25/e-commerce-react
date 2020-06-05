import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import "./Directory.scss"
import MenuItem from "../MenuItem/MenuItem"
import { selectDirectorySections } from '../../Redux/directory/directory.selector';

const Directory = ({ sections }) => (
    <div className="directory-menu">
        {sections.map(({id, ...OtherSectionProps}) => (
            <MenuItem key={id} {...OtherSectionProps} />
        ))}
    </div>
)

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);