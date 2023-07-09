import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { RootGate,AppDispatch } from './store';


export const useAppDispatch = ()=>useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootGate>= useSelector;