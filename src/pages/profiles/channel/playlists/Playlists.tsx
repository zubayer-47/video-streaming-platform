import { FC } from 'react';
import ChannelNavLayout from '../../../../components/Layouts/ChannelNavLayout';

interface PlaylistsProps { }

const Playlists: FC<PlaylistsProps> = () => {
    return <ChannelNavLayout>
        <div>Playlist</div>
    </ChannelNavLayout>
}
export default Playlists