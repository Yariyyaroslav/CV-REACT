import React from 'react'
import s from '../../pages/Home.module.css'

type TextComponentProps = {
    ref?: React.Ref<HTMLDivElement>;
    children: React.ReactNode;
    name: string;
};
import type { RootState } from '../../app/store/store.ts';
import {useSelector} from "react-redux";
const TextComponent = ({ref , children, name}: TextComponentProps) => {
    const darkMode = useSelector((state: RootState) => state.theme.darkMode);
    return (

        <div className='flex flex-col gap-[20px]'>

            <h3 className='laptop:text-left text-3xl text-center'>{name}</h3>
            <div
                className={` text-left text-[18px] leading-6.5 p-[20px] rounded-2xl self-start ${darkMode ? s.glass : s.whiteGlass}`}
                ref={ref}>
                <div>
                    {children}
                </div>
            </div>
        </div>
    )
}
export default TextComponent;