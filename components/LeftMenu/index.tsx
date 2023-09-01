import React from "react";
import { Button } from "@mui/material";
import FireIcon from '@mui/icons-material/Whatshot';
import MessageIcon from '@mui/icons-material/Sms';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ListIcon from '@mui/icons-material/FormatListBulleted';
import styles from "./LeftMenu.module.scss";
import Link from "next/link";
import { usePathname } from 'next/navigation'

const menu = [
  { text: 'Лента', icon: <FireIcon />, path: '/' },
  { text: 'Сообщения', icon: <MessageIcon />, path: '/messages' },
  { text: 'Рейтинг RJ', icon: <TrendingUpIcon />, path: '/rating' },
  { text: 'Подписки', icon: <ListIcon />, path: '/follows' },
];

const LeftMenu: React.FC = () => {
  const router = usePathname()

  return (
    <div className={styles.menu}>
      <ul className={styles.ul_container}>
        {
          menu.map((obj) => (
            <li key={obj.path}>
              <Link href={obj.path}>
                <Button variant={router === obj.path ? 'contained' : 'text'}>
                  {obj.icon}
                  {obj.text}
                </Button>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default LeftMenu;
