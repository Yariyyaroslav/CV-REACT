import s from '../../pages/Home.module.css'

type ContactComponentProps = {
    telegramId: string;
    githubId: string;
    ref: React.Ref<HTMLDivElement>;
}
import {useSelector} from "react-redux";
import type { RootState } from '../../app/store/store.ts';
const ContactComponent = ({telegramId, githubId, ref}: ContactComponentProps) => {
    const darkMode = useSelector((state: RootState) => state.theme.darkMode);
    return (
        <div className={`${darkMode ? s.glass : s.whiteGlass} w-full flex flex gap-[15px] justify-center items-center p-[10px] rounded-2xl`} ref={ref}>
            <a className={`bg-[rgba(0,0,0,0.2)] w-full h-[90px] rounded-xl text-lg desktop:text-2xl hover:bg-[rgba(0,0,0,0.3)] flex items-center justify-center gap-[10px]`} href={`https://t.me/${telegramId}`}>
                <img
                    className='max-w-[40px]'
                src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/telegram-white-icon.png" alt="telegram"/> Telegram</a>
            <a className={`bg-[rgba(0,0,0,0.2)] w-full h-[90px] rounded-xl text-lg desktop:text-2xl hover:bg-[rgba(0,0,0,0.3)] flex items-center justify-center gap-[10px]`} href={`https://github.com/${githubId}`}>
                <img
                    className='max-w-[40px]'
                    src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/github-white-icon.png" alt="Github"/>Github</a>
        </div>
    )
}

export default ContactComponent