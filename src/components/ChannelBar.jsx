import { useState } from 'react';
import { BsHash } from 'react-icons/bs';
import { FaChevronDown, FaChevronRight, FaPlus } from 'react-icons/fa';

const ChannelBar = () => {
    return (
        <div className="channel-bar shadow-lg">
            <ChannelBlock />
            <div className="channel-container">

            </div>
        </div>
    )
}

const Dropdown = ({ header, selections }) => {
    const [expanded, setExpanded] = useState(true);

    return (
        <div className="dropdown">
            <div onClick={() => setExpanded(!expanded)}className="dropdown-header">

            </div>
        </div>
    )
};

const ChevronIcon = ({ expanded })

const ChannelBlock = () => (
    <div className="channel-block">
        <h5 className="channel-block-text">Channels</h5>
    </div>
);

export default ChannelBar;