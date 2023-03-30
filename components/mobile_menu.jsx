import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';


export default function MobileMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const router = useRouter();


  return (
    <div className='sm:hidden flex'>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        
            <Image src='/img/logo.png' width={60} height={50} alt='logo-image' />
            <span className={router.pathname === '/' ? 'underline decoration-orange-500 decoration-4 underline-offset-4' : ''}><h1 className={router.pathname === '/' ? 'font-principal text-white text-2xl font-bold ' : 'font-principal text-black text-2xl font-bold '} >Menu</h1></span>
      

      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >

        <MenuItem onClick={handleClose}>
            <Link className='font-principal text-black text-2xl' href="/">
            <span className={router.pathname === '/' ? 'underline decoration-orange-500 decoration-4 underline-offset-4' : ''}>Home</span>
            </Link>
        </MenuItem>

        <MenuItem onClick={handleClose}>
            <Link className='font-principal text-black text-2xl' href="/burgers">
            <span className={router.pathname === '/burgers' ? 'underline decoration-orange-500 decoration-4 underline-offset-4' : ''}>Burgers</span>
            </Link>
        </MenuItem>

        <MenuItem onClick={handleClose}>
            <Link className='font-principal text-black text-2xl'  href="/news"><span className={router.pathname === '/news' ? 'underline decoration-orange-500 decoration-4 underline-offset-4' : ''}>News</span></Link>
        </MenuItem>

        <MenuItem onClick={handleClose}>
            <Link className='font-principal text-black text-2xl' 
            href="/contact"><span className={router.pathname === '/contact' ? 'underline decoration-orange-500 decoration-4 underline-offset-4' : ''}>Contact</span></Link>
        </MenuItem>

      </Menu>
    </div>
  );
}