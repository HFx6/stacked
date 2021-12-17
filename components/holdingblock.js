import { useEffect, React } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

export default function RecentBlock( props ) {
    var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      });
    return (
    <div className='recentblock'>
        <div className='recenticon'>
            <Image src={props.url} alt={props.url} layout='fill'
    objectFit='contain' />
        </div>
        <div className='tickerholding'>
                <p >{props.name}</p>
        </div>
        <div className='secondtext' style={{textAlign: "right"}}>
            <div>
                <p >{formatter.format(props.amount)}</p>
            </div>
            <div>
                <p >{props.amount} shares</p>
            </div>
        </div>
    </div>
    )
}
