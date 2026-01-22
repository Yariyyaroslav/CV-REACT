export type ReviewItemProps = {
    name: string,
    text: string,
    created_at: string
}

const ReviewItem = ({name, text, created_at}: ReviewItemProps) => {
    return (
        <div className={`bg-[rgba(0,0,0,0.3)] p-[20px] rounded-xl shrink-0 w-full max-w-[400px] text-left`}>
            <p className="font-bold">{name}</p>
            <p>{text}</p>
            <span className="text-sm opacity-60">
        {new Date(created_at).toLocaleDateString()}
      </span>
        </div>
    )
}
export default ReviewItem