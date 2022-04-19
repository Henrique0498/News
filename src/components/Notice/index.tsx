import React from 'react'
import { useMedia } from '../../hooks/useMedia'

import { newsNotice } from '../../types/api/news'
import ImageCustom from '../ImageCustom'
import sliceText from './../../functions/sliceText'

import * as S from './styles'

interface NoticeProps {
  data: newsNotice
}

const Notice = ({ data }: NoticeProps) => {
  const srcImage = data.urlToImage ?? "https://cdn.w600.comps.canstockphoto.com.br/urgente-desenho_csp12611300.jpg"
  const { windowWidth, match } = useMedia('(max-width: 539px)')

  function formatDate (date: string){
    let resultArray = date.slice(0, -4).split('T')

    return resultArray[0].replace(/-/g, '/') + ' às ' + resultArray[1]
  }

  return (
    <S.Container href='#' className={`${match ? 'mobile' : ''}`}>
      <S.Photo>
          <div className='image'>
            <ImageCustom src={srcImage} alt={data.publishedAt}/>
          </div>
      </S.Photo>
      <S.Text className={`${match ? 'mobile' : ''}`}>
        <span>
          Publicado no dia {formatDate(data.publishedAt)}
        </span>
        <h3 className='title'>{sliceText(data.title, windowWidth / 25)}</h3>
        <p className='content'>{sliceText(data.content ?? '', windowWidth / 5)}</p>
        <p className='description'>{sliceText(data.description ?? '', windowWidth / 15)}</p>
      </S.Text>
    </S.Container>
  )
}

export default Notice