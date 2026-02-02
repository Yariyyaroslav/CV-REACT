import ReviewItem, { type ReviewItemProps } from "./ReviewItem";
import s from '../../pages/Home.module.css'
type ReviewListProps = {
    reviews: ReviewItemProps[];
};

const ReviewList = ({ reviews }: ReviewListProps) => {
    return (
        <div className="desktop:max-w-[450px] tablet:max-w-[310px] max-w-[400px] max-h-[444px] w-full shrink-0 overflow-hidden rounded-2xl">
            <div
                className={`h-full overflow-y-auto ${s.appleScroll} ${s.glass}`}
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
