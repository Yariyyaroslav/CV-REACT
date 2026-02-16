export type ReviewItemProps = {
    name: string,
    text: string,
    created_at: string
}
import s from '../../pages/Home.module.css'
import type { RootState } from '../../app/store/store.ts';
import {useSelector} from "react-redux";
const ReviewItem = ({name, text, created_at}: ReviewItemProps) => {
    const darkMode = useSelector((state: RootState) => state.theme.darkMode);
    return (
        <div className={`${darkMode ? s.glass : s.whiteGlass} p-[20px] rounded-xl shrink-0 w-full max-w-[400px] text-left`}>
            <p className="font-bold">{name}</p>
            <p>{text}</p>
            <span className="text-sm opacity-60">
        {new Date(created_at).toLocaleDateString()}
      </span>
        </div>
    )
}
export default ReviewItem