import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from '../app/store/store.ts';
import { toggleTheme } from './themeSlice.ts';
const ThemeToggle = () => {
    const darkMode = useSelector((state: RootState) => state.theme.darkMode);
    const dispatch = useDispatch<AppDispatch>();

    return (
        <button style={{ cursor: 'pointer' }} onClick={() => dispatch(toggleTheme())}>
            {darkMode ? '🌙' : '☀️'}
        </button>
    );
};
export default ThemeToggle;