import React from 'react';
import DownloadIcon from '../../assets/icons/download.svg'
const Download = ({ }) => {
    const handleDownload = () => {
        const fileUrl = 'https://gbihr.org/images/docs/test.pdf';
        const link = document.createElement('a');
        link.href = fileUrl;
        link.setAttribute('download', 'filename.pdf');
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
    };

    return (
        <button onClick={handleDownload}>
            <img src={DownloadIcon} alt="تحميل PDF" />
        </button>
    );
}

export default Download;
