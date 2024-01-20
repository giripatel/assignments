import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import {backgrounColorAtom} from '../atoms/atoms'
import { useState } from "react"

export const BackgroundChanger = () => {

    const [backgroundColor,setBackgroundColor] = useRecoilState(backgrounColorAtom)

    return (
        <>
            <div className={`w-full h-screen  ${backgroundColor} `}>
                <div className="flex flex-wrap hover:shadow-xl inset-x-0 justify-center gap-3">
                    <div className="flex fixed flex-wrap gap-3 bottom-7  hover:shadow-xl shadow-2xl py-1  bg-slate-100 rounded-md px-4">
                        <button className={'px-4 rounded-md bg-red-300    '} onClick={() => setBackgroundColor('bg-red-300')}>Red</button>
                        <button className={'bg-yellow-200 px-3  rounded-md drop-shadow-2xl'} onClick={() =>setBackgroundColor('bg-yellow-200')}>Yellow</button>
                        <button className={'bg-black px-3 rounded-md text-white drop-shadow-2xl'} onClick={() =>setBackgroundColor('bg-black')}>Black</button>
                        <button className={'bg-purple-200 px-3 rounded-md drop-shadow-2xl'} onClick={() =>setBackgroundColor('bg-purple-200')}>Purpule</button>
                        <button className={'bg-green-300 px-3 rounded-md drop-shadow-2xl '} onClick={() => setBackgroundColor('bg-green-300')}>Green</button>
                        <button className={'bg-blue-300 px-3 rounded-md shadow-xl'} onClick={() =>setBackgroundColor('bg-blue-300')}>Bule</button>  
                        <button className={'bg-white px-3 rounded-md shadow-xl'} onClick={() =>setBackgroundColor('bg-white')}>White</button>  
                    </div>  
                </div>
            </div>

        </>
    )
}