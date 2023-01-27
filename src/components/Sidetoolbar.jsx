//Hooks
import {useTranslation} from 'react-i18next'; //Hook de i18next

//Components
import { Link, LinkImg } from './Links';

//imgs
import Instagram from '../assets/img/instagram.png';
import Twitter from '../assets/img/twitter.png';
import Youtube from '../assets/img/youtube.png';

const Sidetoolbar = ({sideToolbar}) =>{
    const {t, i18n} = useTranslation();
    return(
        <div className={sideToolbar ? "sidetoolbar sidetoolbar--open" : "sidetoolbar"}>
            <li className><Link link="www.google.com" text = {t("sidetoolbar.inicio")}/> </li>
            <li className='inactive'><Link text = {t("sidetoolbar.hacemos")}/> </li>
            <li className='inactive'><Link text = {t("sidetoolbar.blog")}/> </li>
            <li className='inactive'><Link text = {t("sidetoolbar.bolsa")}/> </li>
            <li></li>
        </div>
    )
}

export default Sidetoolbar;