import ReviewItem, { type ReviewItemProps } from "./ReviewItem";
import s from '../../pages/Home.module.css'
type ReviewListProps = {
    reviews: ReviewItemProps[];
};

const ReviewList = ({ reviews }: ReviewListProps) => {
    return (
        <div className={`flex flex-col w-full items-center shrink-0 max-w-[450px] max-h-[444px] rounded-2xl overflow-y-scroll py-[30px] gap-[20px] ${s.glass}`}>
            {reviews.map((review) => (
                <ReviewItem key={review.created_at} {...review} />
            ))}
        </div>
    );
};

export default ReviewList;
