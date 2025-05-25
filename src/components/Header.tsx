import { AppBar, Toolbar, Box, Button, IconButton, Menu, MenuItem, Link } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from '../features/language/useTranslation'
import LanguageSwitcher from './LanguageSwitcher'


export default function Header() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const navigate = useNavigate()
  const { t } = useTranslation()

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleNavigate = (path: string) => {
    if (path === '#contact') {
      navigate('/'); 
      setTimeout(() => {
        const el = document.getElementById('contact-section');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 300); // vent til HomePage er renderet
    }
    else {
      navigate(path);
    }
    handleClose();
  };
  

  const menuItems = [
    { label: t('mainButton'), path: '/' },
    { label: t('staffButton'), path: '/employees' },
    { label: t('contactButton'), path: '#contact' },
    { label: t('treatmentsButton'), path: '/treatments' }
  ]

  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#fff', color: '#000', boxShadow: 'none' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
      <MenuItem onClick={() => handleNavigate('/')}>
        <img src="/logo.webp" alt="Stavanger ØNH" style={{ height: '70px' }} />
      </MenuItem>

        {/* PC-meny: vises fra md og opp */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
          {menuItems.map((item) => (
            <Button key={item.label} onClick={() => handleNavigate(item.path)} color="inherit"  >
              {item.label}
            </Button>
            
          ))}
          <LanguageSwitcher />
          
        </Box>

        {/* Mobilmeny: vises på xs og skjules på md+ */}
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton onClick={handleOpen} color="inherit">
            <MenuIcon />
          </IconButton>
          <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
            {menuItems.map((item) => (
              <MenuItem key={item.label} onClick={() => handleNavigate(item.path)}>
                {item.label}
              </MenuItem>
            ))}
            <LanguageSwitcher />
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
