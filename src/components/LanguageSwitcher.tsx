// src/components/LanguageSwitcher.tsx
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../app/store'
import { toggleLanguage } from '../features/language/languageSlice'
import { Button } from '@mui/material'

function LanguageSwitcher() {
  const language = useSelector((state: RootState) => state.language.language)
  const dispatch = useDispatch()

  return (
  <Button onClick={() => dispatch(toggleLanguage())} sx={{color:'#18AEAC'}}>
    {language === 'no' ? 'NO' : 'EN'}
  </Button>
  )
}

export default LanguageSwitcher
