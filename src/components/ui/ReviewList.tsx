import ReviewItem, { type ReviewItemProps } from "./ReviewItem";
import s from '../../pages/Home.module.css'
type ReviewListProps = {
    reviews: ReviewItemProps[];
};
import type { RootState } from '../../app/store/store.ts';
import {useSelector} from "react-redux";
const ReviewList = ({ reviews }: ReviewListProps) => {
    const darkMode = useSelector((state: RootState) => state.theme.darkMode);
    return (
        <div className="desktop:max-w-[450px] tablet:max-w-[310px] max-w-[400px] h-[444px] w-full shrink-0 overflow-y-auto  rounded-2xl">
            <div
                className={`h-full overflow-y-auto ${s.appleScroll} ${darkMode ? s.glass : s.whiteGlass}`}
            >
                <div className="flex flex-col gap-[16px] p-[20px]">
                    {reviews.map((review) => (
                        <ReviewItem key={review.created_at} {...review} />
                    ))}
                </div>
            </div>
        </div>


    );
};

export default ReviewList;
