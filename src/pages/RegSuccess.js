import React from 'react'
import GearIcon from '@rsuite/icons/Gear';
import { Progress } from 'rsuite';
import ProgressBar from 'react-bootstrap/ProgressBar';

const RegSuccess = () => {
    const now = 60;
  return (
    <div className='m-5 p-5 text-center' >
        <h1>Processing your request , We call you after completion</h1>
        <div className="icon-example-list mt-4">
            <GearIcon spin style={{ fontSize: '2em' }} />
            
            
    
        </div>

    </div>
  )
}

export default RegSuccess