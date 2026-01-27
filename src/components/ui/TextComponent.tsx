import React from 'react'
import s from '../../pages/Home.module.css'

type TextComponentProps = {
    ref?: React.Ref<HTMLDivElement>;
    children: React.ReactNode;
    name: string;
};
const TextComponent = ({ref , children, name}: TextComponentProps) => {
    return (
        <div className='flex flex-col gap-[20px]'>
            <h3 className='text-left text-3xl '>{name}</h3>
            <div
                className={`text-white text-left text-[18px] leading-6.5 p-[20px] rounded-2xl self-start ${s.glass}`}
                ref={ref}>
                <div>
                    {children}
                </div>
            </div>
        </div>
    )
}
export default TextComponent;