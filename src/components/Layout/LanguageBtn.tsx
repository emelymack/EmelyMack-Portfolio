import Button from 'react-bootstrap/Button';
import argentinaFlag from '../../assets/img/argentina-flag.png';
import usaFlag from '../../assets/img/unitedStates-flag.png';
import style from '../../assets/css/Header.module.scss'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { setLanguage } from '../../redux/languageSlice';

export const LanguageBtn = () => {
  const dispatch = useAppDispatch()
  const language: string = useAppSelector(state => state.language)

  const changeLanguage = () => {
    const toLang = (language === 'eng') ? 'esp' : 'eng'
    dispatch(setLanguage(toLang))
  }
  return (
    <Button className='py-2 btn-none' onClick={changeLanguage}><img src={(language === 'eng') ? argentinaFlag : usaFlag} width={50} alt={(language === 'eng') ? 'Change language to Spanish' : 'Cambiar idioma a inglés'} className={style.languageBtn} /></Button>
    )
}