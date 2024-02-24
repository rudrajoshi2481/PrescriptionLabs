import React from 'react'
import FileComponent from './FileComponent'
import FolderComponent from './FolderComponent'

function FileManager() {
  return (
    <div className='max-w-[60vw] border-2  p-3 flex flex-col min-w-[60vw]'>
        <FileComponent />
        <FileComponent />
        <FolderComponent />
        <FolderComponent />
        <FileComponent />
        <FileComponent />
        <FolderComponent />
        <FolderComponent />
    </div>
  )
}



export default FileManager