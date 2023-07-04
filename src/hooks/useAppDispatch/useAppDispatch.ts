import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/index'; // Путь к вашему файлу store

export const useAppDispatch = () => useDispatch<AppDispatch>();
