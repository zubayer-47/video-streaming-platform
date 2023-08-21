import { useState } from 'react';
import { FiChevronDown, FiX } from 'react-icons/fi';
import demoImg from '../../../../assets/demo.jpg';
import ProfileThumbnail from '../../../../components/ProfileThumbnail';

export default function Playlist() {
  const [playlistOpen, setPlaylistOpen] = useState(false)

  return (
    <div className={`border-2 border-indigo-200 rounded-xl p-3 ${!playlistOpen ? "bg-indigo-200/30" : "bg-indigo-50"}`}>
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-xl line-clamp-1 font-medium">Mix - Zara Zara Bahekta Hai - halraj [asdasdas]</h1>
          <h2 className="text-sm line-clamp-1 text-gray-700">Mixes are playlists YoutUbe makes for you</h2>
        </div>
        <button onClick={() => setPlaylistOpen(prev => !prev)} className='focus:bg-indigo-200/60 focus:border rounded-full p-2'>
          {!playlistOpen ? (<FiChevronDown className="h-7 w-7" />) : (<FiX className="h-7 w-7" />)}
        </button>
      </div>

      {!playlistOpen ? null : (
        <div className="flex flex-col gap-3 mt-5 max-h-[60vh] overflow-auto">
          {new Array(10).fill(true).map(() => (
            <ProfileThumbnail
              thumbnail={demoImg}
              views='7.6M'
              timetamp='05:44'
              title='LEADERSHIP LAB: The Craft of Writing Effectively UChicago Social Sciences The Craft of Writing Effectivel'
              channelName={'Standford Graduate School of Business'}
              chnLink='/channel123'
              vidLink='/watch/playlistvideo123'
              uploadedAt='1month'
              classes='h-20 w-32'
              isList
            />
          ))}
        </div>
      )}

    </div>
  )
}
