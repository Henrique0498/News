import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import InfiniteScroll from '../../components/InfiniteScroll'
import Loading from '../../components/Loading'
import NotFound from '../../components/NotFound'
import Notice from '../../components/Notice'
import { useFetch } from '../../hooks/useFetch'
import { GET_LIST_HOME_PAGE } from '../../services/routes'
import { homePage } from '../../types/api/homePage'
import { newsNotice } from '../../types/api/news'

import * as S from './styles'

const Home: React.FC = () => {
  const [items, setItems] = useState(10)
  const [dataBase, setDataBase] = useState<newsNotice[]>()
  const { data, error, loading, request } = useFetch<homePage>()

  useEffect(()=>{
    async function getItems(){
      const { url, options } = GET_LIST_HOME_PAGE();
      const { json } = await request({url, options});

      setDataBase(json.articles)
    }

    getItems();
  }, [request])

  useEffect(()=>{
    if(data){
      setDataBase(data.articles.slice(0, items))
    }
  }, [items, data])

  function setPageAfter(){
    if(data && data.totalResults > items){
      setItems(item => item + 10)
    }
  }
  
  function controlRender(){
    if(error || data?.status !== 'ok'){
      return <NotFound />
    }else if(loading){
      return <Loading />
    }else if(data?.status === 'ok'){
      return (
        <>
          {dataBase && dataBase.map((notice, i) => <Notice key={notice.source.name + i} data={notice}/>)}

          {dataBase && !loading && <InfiniteScroll fetchMore={()=> setPageAfter()}/>}
        </>
      )
    }

    return null
  }

  return (
    <>
      <Header />
      <S.Container>
        {controlRender()}
      </S.Container>
    </>
  )
}

export default Home