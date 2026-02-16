import s from "./ProfileCard.module.css";

type ProfileCardProps = {
    img: string;
    name: string;
    role: string;
    ref: React.Ref<HTMLDivElement>;
};
import type { RootState } from '../../../app/store/store.ts';
import {useSelector} from "react-redux";
const ProfileCard = ({ img, name, role, ref }: ProfileCardProps) => {
    const darkMode = useSelector((state: RootState) => state.theme.darkMode);
    return (
        <div className={`flex flex-col gap-[8px] items-center shrink-0 rounded-[18px] pb-[10px] ${darkMode ? s.glass : s.whiteGlass}`} ref={ref}>
            <div className={s.gradientCard}>
                <img
                    src={img}
                    alt={name}
                    className={`${s.inner} desktop:w-[400px]`}
                />
            </div>

            <div className="text-center">
                <p className="text-white text-xl font-semibold">
                    {name}
                </p>

                <p className="text-white/80 text-lg">
                    {role}
                </p>
            </div>
        </div>
    );
};

export default ProfileCard;
