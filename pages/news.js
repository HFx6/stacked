import { useEffect, React, useState } from 'react'
import { useRouter } from 'next/router'
import Header from '../components/header';
import Footer from '../components/footer';
import Image from 'next/image'

import Article from '../components/articleblock';
import loading from '../public/3.gif';

const articleBlocks = [];

async function search(tickers){
    var er = await fetch('api/search', {
        method: 'POST',
        headers: {
        'content-type': 'application/json',
        },
        body: JSON.stringify({
            tickers: tickers
        }),
    }).then(res => res.json()).then(data => {
        return data
    });
    return er;
}

async function getArticle(l){
    var er = await fetch('api/articles', {
        method: 'POST',
        headers: {
        'content-type': 'application/json',
        },
        body: JSON.stringify({
            uuids: l
        }),
    }).then(res => res.json()).then(data => {
        return data
    });
    return er;
}

async function getSearch(){
    var k = JSON.parse(window.localStorage.getItem('dataproc'));
    var news = await search(Object.keys(k));
    // console.log(news.news);
    var l = [];
    for(var key in news.news){
        l.push(news.news[key].uuid);
    }
    var articles = await getArticle(l);
    for(var key in articles.items){
        var d = {};
        d["title"] = articles.items[key].data.partnerData.pageTitle;
        d["summary"] = articles.items[key].data.partnerData.summary;
        var keyd = articles.items[key].data.partnerData.salientEntities;
        d["tickers"] = [];
        for(var tkey in keyd){
            if(keyd[tkey].type == "TICKER"){
                d["tickers"].push(keyd[tkey].canonicalId); 
            }
        }
        var htmlobj = articles.items[key].metatags;
        var el = document.createElement( 'html' );
        el.innerHTML = htmlobj;
        d["image"] = el.querySelector('meta[name="twitter:image"]').content;
        d["url"] = articles.items[key].data.partnerData.previewLink;
        articleBlocks.push(d);
    }
}

function getBlocks(){
    var el = [];
    for(var key in articleBlocks){
        el.push(<Article data={articleBlocks[key]} key={key}/>);
    }
    return el;
}

export default function Optimize() {
    const router = useRouter();
    const [loaded,setLoaded] = useState(false);

    async function masterHelper(){
        if(articleBlocks.length>0) {
            getBlocks();
        }else{
            await getSearch();
        }
    }

    useEffect(() => {
        if(localStorage.getItem("csvdata") == null ){
            router.push('/')
        }else{
            (async () => {
                await masterHelper()
                setLoaded(true)
            })();
        }
        }, [router]);

    if(!loaded){
        return (
            <div>
                <Header />
                <div className='loading'>
                    <Image src={loading} id='lol' alt="loader"/>
                </div>
                <Footer />
            </div>
        )
    }
    return (
        <div>
            <Header />
            <div className="flex-container">
                <div className="newsblock">
                    <div className="cardflex">
                        {getBlocks()}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
        )
}