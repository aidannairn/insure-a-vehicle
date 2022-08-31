import React from 'react'
import { Home } from '../../pages/Home';
import { CarInsurance } from './CarInsurance';
import { MechanicalInsurance } from './MechanicalInsurance';

import './DiscoverInsurance.css';

interface DiscoverInsuranceProps {
    alignment: string;
}

export const DiscoverInsurance: React.FC<DiscoverInsuranceProps> = ({alignment}) => {
        return (
            <div className='insurance-container'>
                {alignment === 'left' ? <CarInsurance /> : <MechanicalInsurance />}
            </div>
        );
}