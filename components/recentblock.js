import { useEffect, React } from 'react';
import { useRouter } from 'next/router';

export default function RecentBlock( props ) {
    return (
    <div className='recentblock'>
        <div className={ (props.signal=="BUY" ? 'recenticon buyrecent' : 'recenticon sellrecent')}>
            <i className="gg-swap"></i>
        </div>
        <div className='firsttext'>
            <div>
                <p >{props.name}</p>
            </div>
            <div>
                <p style={{color: '#BABABA'}}>{props.date}</p>
            </div>
        </div>
        <div className='secondtext'>
            <p style={{fontSize: '18px'}}>{props.amount}</p>
        </div>
    </div>
    )
}
