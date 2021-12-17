import { useEffect, React } from 'react';
import { useRouter } from 'next/router';

import PieChart from '../components/pie';
import Holdings from '../components/holdings';

export default function rightblock( props ) {
    
    return (
        <div className='block70'>
            <p className='label'>Investment Overview</p>
            <PieChart data={props.pie}/>
            <Holdings data={props.pie} total={props.total} value={props.data}/>
        </div> 
    )
}