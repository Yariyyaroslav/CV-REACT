import {useState} from "react";
import s from "../../pages/Home.module.css"
import type { RootState } from '../../app/store/store.ts';
import {useSelector} from "react-redux";
type ReviewProps = {
    name: string;
    text: string;
}

type FormProps = {
    onSubmit: (review: ReviewProps) => void;
}


const ReviewForm = ({ onSubmit }: FormProps) => {
    const darkMode = useSelector((state: RootState) => state.theme.darkMode);
    const [name, setName] = useState('');
    const [text, setText] = useState('');

    const handleSubmit = (e: React.FormEvent)=> {
        e.preventDefault();
        onSubmit({name, text});
        setName('');
        setText('')

    }
    return (
        <form action="#" className={`${darkMode ? s.glass : s.whiteGlass} flex flex-col items-center justify-center p-[30px] rounded-2xl w-full desktop:max-w-[400px] tablet:max-w-[360px] max-w-[400px] shrink-0`} onSubmit={handleSubmit}>
            <div className="flex flex-col gap-[20px] w-full">
                <h2 className='text-3xl font-bold text-left'>Leave your review</h2>
                <div className='flex flex-col gap-[10px] text-left pl-[15px] laptop:pl-0 desktop:pl-[15px]'>
                    <label htmlFor="name" className='text-xl'>Enter your name</label>
                    <input value={name} className='max-w-[300px] border-[1px] border-solid border-white rounded-xl p-[5px]' type="text" name='name' placeholder='Enter name' onChange={(e) => setName(e.target.value)} />
                </div>
                <div className='flex flex-col gap-[10px] text-left pl-[15px] laptop:pl-0 desktop:pl-[15px]'>
                    <label htmlFor="text" className='text-xl'>Enter a review</label>
                    <textarea value={text} className='max-w-[300px] border-[1px] border-solid border-white rounded-xl p-[5px]' name="text" id="" placeholder={'Enter a review'} cols={30} rows={5} onChange={(e)=> setText(e.target.value)}></textarea>
                </div>
                <button className='ml-[15px] self-start py-[10px] px-[15px] bg-white text-black rounded-xl' type={"submit"}>Submit</button>
            </div>
        </form>
    )
}
export default ReviewForm;