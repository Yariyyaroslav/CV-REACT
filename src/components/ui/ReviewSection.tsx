import { useEffect, useState } from "react";
import supabase  from "../../util/supabase";
import ReviewForm from "./ReviewForm";
import ReviewList from "./ReviewList";
import type { ReviewItemProps } from "./ReviewItem";

const ReviewSection = () => {
    const [reviews, setReviews] = useState<ReviewItemProps[]>([]);
    async function loadReviews() {
        const { data } = await supabase
            .from("reviews")
            .select("*")
            .order("created_at", { ascending: false });

        if (data) setReviews(data);
    }

    const handleSubmit = async (review: {
        name: string;
        text: string;
    }) => {
        await supabase.from("reviews").insert([review]);
        loadReviews();
    };
    useEffect(() => {
        loadReviews();
    }, []);
    return (
        <div className="flex  self-start gap-[70px]">
            <ReviewForm onSubmit={handleSubmit} />
            <ReviewList reviews={reviews} />
        </div>
    );
};

export default ReviewSection;
