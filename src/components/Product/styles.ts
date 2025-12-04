import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  background-color: ${cores.cinza};
  border-radius: 8px;
  padding: 16px;
  position: relative;
  width: 222px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  img {
    width: 222px;
    height: 250px;
    object-fit: cover;
    border-radius: 8px;
    display: block;
    margin-bottom: 16px;
  }

  ${TagContainer} {
    margin-right: 8px;
  }
`
export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 16px;
  display: block;
  margin-top: 16px;
  margin-bottom: 8px;
  width: 100%;
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 16px;
  color: ${cores.branco};
`
export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  gap: 8px;

  ${TagContainer} {
    margin-right: 0;
  }
`
